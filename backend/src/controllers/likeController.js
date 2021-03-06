const Dev = require('../models/devModel');

module.exports = {
  async store(req, res) {
    //Pegar os IDs dos usuários dos parametros e headers da requisição
    const { id: loggedDev } = req.params;
    const { id: targetDev } = req.headers;

    // Selecionar os usuários no banco de dados
    const loggedDevUser = await Dev.findById(loggedDev);
    const targetDevUser = await Dev.findById(targetDev);

    // Se o usuário que recebeu o like for inválido, retornar um erro
    if (!targetDevUser) {
      return res.status(400).json({ error: "dev doesn't exists" });
    }

    // Se o usuário alvo já deu like no usuário logado, deu match!
    if (targetDevUser.likes.includes(loggedDev)) {
      console.log('Deu match!');
    }

    // Se o usuário logado já tiver dado like no usuário alvo, retonar um erro
    if (loggedDevUser.likes.includes(targetDevUser._id)) {
      return res.status(409).json({ error: 'You already liked this user' });
    }

    // Se o usuário logado já tiver dado dislike no usuário alvo, retornar um erro
    if (loggedDevUser.dislikes.includes(targetDevUser._id)) {
      return res
        .status(400)
        .json({ error: "you've disliked this user, so you can't like it" });
    }

    // Adicionar o ID do usuário alvo na lista de likes do usuário logado
    loggedDevUser.likes.push(targetDevUser._id);
    await loggedDevUser.save();

    return res.json({ loggedDevUser });
  }
};
