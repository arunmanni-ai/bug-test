const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const validator = require('validator');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/public/login.html');
});

app.post('/login', (req, res) => {
  const email = (req.body.email || '').trim();
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  return res.status(200).json({ message: 'OK' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
}

module.exports = app;
