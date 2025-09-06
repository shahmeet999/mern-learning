import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceForm.css";

const dummyPlaces = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2025-03/ESB-DarkBlueSky.webp",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng: -73.9878584 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    description: "Famous monument in New York City",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLYxUBSyZZY66XUnjDDirUB7bUt4tlOA20A&s",
    address: "Liberty Island, New York, NY 10004, United States",
    location: { lat: 40.6892494, lng: -74.0445004 },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = dummyPlaces.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />

      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />

      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
