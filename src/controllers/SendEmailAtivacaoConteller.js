module.exports = {
  //   async index(req, res) {},
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: "techs",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    // if (!user) {
    //   return res.status(400).json({ error: "user not found" });
    // }
    return res.json(user.techs);
  },
};

const SendEmailAtivacao = (objeto) => {
  const { email, nome } = objeto;

  console.log(objeto);
};
