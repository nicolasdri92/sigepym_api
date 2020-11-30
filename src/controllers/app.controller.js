const State = require("../public/json/states.json");
const City = require("../public/json/cities.json");

getState = (req, res) => {
  res.status(200).send(State);
};

getCity = (req, res) => {
  const state = req.query.state;

  const city = [];
  City.cities.filter((c) => {
    if (c.provincia.id == state) {
      city.push({
        id: c.id,
        nombre: c.nombre,
      });
    }
  });
  res.status(200).send({ city: city });
};

module.exports = { getState, getCity };
