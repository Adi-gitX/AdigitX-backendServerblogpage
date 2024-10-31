const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { prismaClient } = require("../config/db");
const prisma = prismaClient;

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send({ message: "All fields (name, email, password) are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({ message: "Invalid email format." });
  }

  if (password.length < 6) {
    return res.status(400).send({ message: "Password must be at least 6 characters long." });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ message: 'User registered successfully.', token, userId: user.id, name: user.name, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while registering user.', error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Both email and password are required." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful.', token, userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while logging in.', error });
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(403).json({ message: 'Failed to authenticate token.' });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = { registerUser, loginUser, authenticateToken };
const getUserProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching user profile.', error });
  }
};

const updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !name) {
    return res.status(400).send({ message: "Both name and email are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({ message: "Invalid email format." });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser && existingUser.id !== req.userId) {
      return res.status(400).json({ message: 'Email is already in use by another user.' });
    }

    const updateData = { name, email };
    if (password) {
      if (password.length < 6) {
        return res.status(400).send({ message: "Password must be at least 6 characters long." });
      }
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id: req.userId },
      data: updateData,
    });

    res.status(200).json({ message: 'User profile updated successfully.', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while updating user profile.', error });
  }
};

module.exports = { registerUser, loginUser, authenticateToken, getUserProfile, updateUserProfile };
