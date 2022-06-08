const express = require("express");
const AddressController = require("./controllers/AddressControler");
const UserController = require("./controllers/UserController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");
const CriaLoginController = require("./controllers/CriaLoginController");
const AutorizaLoginController = require("./controllers/AutorizaController");

const routes = express.Router();
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
routes.get("/login", AutorizaLoginController.index);

routes.post("/criar", CriaLoginController.store);

routes.post("/users", UserController.store);

routes.get("/users", verifyJWT, UserController.index);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
