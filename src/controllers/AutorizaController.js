const Login = require("../models/Login");
// const jwt = require("../Middleware/AutorizaJWTMiddleware");

// var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(token, "70conectar", function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

module.exports = {
  async index(req, res) {
    const { email, senha } = req.body;

    const login = await Login.findOne({ where: { email, senha } });
    if (!login)
      res.status(500).json({ auth: false, message: "Login inválido!" });

    const token = jwt.sign({ email }, "70conectar", {
      expiresIn: 300, // expires in 5min
    });

    res.json({ auth: true, token: token });
  },
};
