const propertyController = require("./property");
const provinceController = require("./provinceAndCity");
const tenantController = require("./tenant");
const roomController = require("./room");
const specialPriceController = require("./specialPrice");
const unavailableRoomsController = require("./unavailableRooms");
const orderController = require("./order");
module.exports = {
  propertyController,
  tenantController,
  provinceController,
  roomController,
  specialPriceController,
  unavailableRoomsController,
  orderController,
};
