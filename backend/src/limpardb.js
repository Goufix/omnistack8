const Dev = require('./models/devModel');

module.exports = {
  async store(req, res) {
    const remove = await Dev.findById(req.headers.id);
    remove.likes = [];
    remove.dislikes = [];
    await remove.save();
    return res.json({ hello: 'world' });
  }
};
