const { User } = require('../models');

class SessionController {
  store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (password !== user.password_hash) {
      return res.status(401).json({ message: 'User not found' });
    }

    return res.status(200).send();
  }
}

module.exports = new SessionController();
