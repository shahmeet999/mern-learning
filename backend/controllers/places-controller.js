const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const getCordsForAddress = require("../util/Location");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world!",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }
  res.json({ places: place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });
  if (!places || places.length === 0) {
    const error = new HttpError(
      "Could not find a places for the provided user id.",
      404
    );
    return next(error);
  }
  res.json({ places });
};

const createPlace = (req, res, next) => {
  const { title, description, address, creator } = req.body;
  const results = validationResult(req);
  if (!results.isEmpty()) {
    console.log(results);
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  let coordinates = getCordsForAddress();

  const createdPlace = {
    id: uuidv4(), // Temporary ID, will be replaced by the database ID
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(createdPlace); // This won't work in a real app, of course!
  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const results = validationResult(req);
  if (!results.isEmpty()) {
    console.log(results);
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  if (placeIndex === -1) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }
  const updatedPlace = { ...DUMMY_PLACES[placeIndex] };
  updatedPlace.title = title;
  updatedPlace.description = description;
  DUMMY_PLACES[placeIndex] = updatedPlace;
  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  if (placeIndex === -1) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }
  DUMMY_PLACES.splice(placeIndex, 1);
  res.status(200).json({ message: "Deleted place." });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
