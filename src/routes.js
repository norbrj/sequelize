const express = require("express");
const AddressControler = require("./controllers/AddressControler");
const UserController = require("./controllers/UserController");

// const { routes } = require("express/lib/application");

const routes = express.Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.get("/users/:user_id/addresses", AddressControler.index);
routes.post("/users/:user_id/addresses", AddressControler.store);

module.exports = routes;
