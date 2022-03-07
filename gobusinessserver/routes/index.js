const mongoose  = require("mongoose");

const authController = require("../controllers/auth.controller");
const salesController = require("../controllers/sales.controller")

module.exports = app => {
    app.post('/api/register',
    authController.signup)

    app.post('/api/login',
    authController.login)

    app.post('/api/addSales',
    salesController.addSales)

    app.post('/api/getSales',
    salesController.getSales)
}