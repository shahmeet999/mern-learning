import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = dummyPlaces.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
