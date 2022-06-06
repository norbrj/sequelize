const express = require("express");
const AddressController = require("./controllers/AddressControler");
const UserController = require("./controllers/UserController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");
const LoginController = require("./controllers/LoginController");

// const { routes } = require("express/lib/application");

const routes = express.Router();

routes.get("/criar", LoginController.index);
routes.post("/criar", LoginController.store);

routes.post("/users", UserController.store);

routes.get("/users", UserController.index);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
