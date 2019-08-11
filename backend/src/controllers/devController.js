const axios = require('axios');
const Dev = require('../models/devModel');

module.exports = {
  async store(req, res) {
    // Pegar o usuário do corpo da requisição (body)
    const { username } = req.body;

    // Se o usuário já existir na base de dados, apenas retorne ele.
    const userExists = await Dev.findOne({ login: username });
    if (userExists) {
      return res.json(userExists);
    }

    // Pega os dados na API do GitHub
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    // Separar apenas os dados úteis
    const { name, login, bio, avatar_url: avatar } = response.data;

    // Colocar os dados do novo usuário no banco de dados.
    const dev = await Dev.create({ name, login, bio, avatar });

    return res.json(dev);
  },
  async index(req, res) {
    const { id: loggedDev } = req.headers;

    const loggedDevUser = await Dev.findById(loggedDev);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: loggedDev } },
        { _id: { $nin: loggedDevUser.likes } },
        { _id: { $nin: loggedDevUser.dislikes } }
      ]
    });
    return res.json(users);
  }
};
