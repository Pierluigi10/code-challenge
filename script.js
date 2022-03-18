"use strict";
import generatePeople from "./generatePeople.js";
import haversine from "./node_modules/haversine-distance/index.js";

const initMap = () => {
  const people = generatePeople(500);
  console.log("generate people", people);

  const getClosePeople = () => {
    let result = [];
    for (let i = 0; i < people.length; i++) {
      for (let j = i + 1; j < people.length; j++) {
        const haversineDistanceInMeters = haversine(people[i], people[j]);
        const haversineDistanceInKm = haversineDistanceInMeters / 1000;
        const roundedHaversineDistance = Number(
          haversineDistanceInKm.toFixed(2)
        );
        if (roundedHaversineDistance <= 1) result.push(people[i], people[j]);
        // if (rounded <= 1)
        //   result.push({
        //     first: people[i],
        //     second: people[j],
        //     distance: rounded,
        //   });
      }
    }
    return [...new Set(result)];
  };

  // console.log("Close people", getClosePeople());
  const positions = getClosePeople();
  console.log("positions", positions);

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(51.33524, 12.3368),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new google.maps.InfoWindow();

  for (let i = 0; i < positions.length; i++) {
    let marker;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(positions[i].lat, positions[i].lon),
      map: map,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(positions[i].name);

          infowindow.setOptions({ maxWidth: 200 });
          infowindow.setContent(
            new google.maps.Circle({
              center: marker.getPosition(),
              radius: 1000,
              map: map,
              fillColor: "#F00",
              fillOpacity: 0.4,
              strokeWeight: 0.4,
            })
          );
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
};
window.onload = initMap;
