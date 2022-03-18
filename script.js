"use strict";
import haversine from "./node_modules/haversine-distance/index.js";

function initMap() {
  function generateRandomNumber() {
    // const minm = 1000000;
    // const maxm = 9999999;
    const minm = 1000000;
    const maxm = 9999999;
    return Math.floor(Math.random() * (maxm - minm) + 1) + minm;
  }

  function generatePeople(num) {
    let people = [];
    for (let x = 0; x < num; x++) {
      people[x] = {
        name: `person ${x + 1}`,
        // lat: `51.3${generateRandomNumber()}` * 1,
        // lon: `12.3${generateRandomNumber()}` * 1,
        lat: `51.${generateRandomNumber()}` * 1,
        lon: `12.${generateRandomNumber()}` * 1,
      };
    }
    return people;
  }

  const people = generatePeople(500);
  console.log("generate people", people);

  const getFilteredPeople = () => {
    let result = [];

    for (let i = 0; i < people.length; i++) {
      // combine with every "person" of people
      for (let j = i + 1; j < people.length; j++) {
        const haversine_m = haversine(people[i], people[j]);
        // console.log(haversine_m);
        const haversine_km = haversine_m / 1000; //Results in kilometers
        const roundedString = haversine_km.toFixed(2);
        const rounded = Number(roundedString);
        if (rounded <= 1) result.push(people[i], people[j]);
        // if(rounded <= 1) result.push({first: people[i], second: people[j], distance: rounded});
      }
    }
    return [...new Set(result)];
  };

  // console.log("filtered people",getFilteredPeople());
  const positions = getFilteredPeople();
  console.log("positions", positions);

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(51.33524, 12.336818),
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
}
window.onload = initMap;
