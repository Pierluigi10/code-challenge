"use strict";
import generatePeople from "./generatePeople.js";
import haversine from "./node_modules/haversine-distance/index.js";

const buttonElemet = document.querySelector("button");

const initMap = () => {
  const people = generatePeople(500);
  console.log("generate people", people);

  const getClosePeople = () => {
    let result = [];

    for (let i = 0; i < people.length; i++) {
      for (let j = i + 1; j < people.length; j++) {
        people[i].lat = Number(
          (people[i].lat + (Math.random() - 0.5) * 0.009).toFixed(6)
        );
        people[j].lat = Number(
          (people[j].lat + (Math.random() - 0.5) * 0.009).toFixed(6)
        );
        people[i].lon = Number(
          (people[i].lon + (Math.random() - 0.5) * 0.009).toFixed(6)
        );
        people[j].lon = Number(
          (people[j].lon + (Math.random() - 0.5) * 0.009).toFixed(6)
        );

        //   console.log(people[j].lon)

        const haversine_m = haversine(people[i], people[j]);
        // console.log(haversine_m);
        const haversine_km = haversine_m / 1000; //Results in kilometers
        const roundedString = haversine_km.toFixed(2);
        const rounded = Number(roundedString);
        //   if(rounded <= 1) result.push({first: people[i], second: people[j], distance: rounded});
        if (rounded <= 1) result.push(people[i], people[j]);
        //   result.filter((distance) => distance <= 1)
      }
    }
    // console.log(result);
    return [...new Set(result)];
  };

  buttonElemet.addEventListener("click", () => {
    // console.log("Close people", getClosePeople());
    const positions = getClosePeople();

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
  });
};
window.onload = initMap;
