const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const db = req.app.get('db');
  const { firstName, lastName, email, phone, password, subscribeNewsletter } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (first_name, last_name, email, phone, password, subscribe_newsletter) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, phone, hashedPassword, subscribeNewsletter], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ message: 'Email already exists' });
        return res.status(500).json({ message: 'Server error' });
      }
      const user = { id: result.insertId, firstName, lastName, email, phone, subscribeNewsletter, created_at: new Date().toISOString() };
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, user });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', (req, res) => {
  const db = req.app.get('db');
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });
    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        registrationTime: user.created_at.toISOString()
      }
    });
  });
});

module.exports = router;