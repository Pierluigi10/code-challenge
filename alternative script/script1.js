"use strict";
import haversine from "haversine-distance";

function initMap() {
  function generateRandomNumber() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  function generatePeople(num) {
    let people = [];
    for (let x = 0; x < num; x++) {
      people[x] = {
        name: `person ${x + 1}`,
        lat: `51.3${generateRandomNumber()}` * 1,
        lon: `12.3${generateRandomNumber()}` * 1,
      };
    }
    return people;
  }

  const people = generatePeople(100);
  // console.log(people);

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
        //   if(rounded <= 1) result.push({first: people[i], second: people[j], distance: rounded});
        if (rounded <= 1) result.push(people[i], people[j]);
        //   result.filter((distance) => distance <= 1)
      }
    }
    // console.log(result);
    return [...new Set(result)];
  };

  // // console.log(getFilteredPeople());
  // const locations = getFilteredPeople();
  /* 
  const getFilteredPeople = () => {
    let result = [];

    for (let i = 0; i < people.length; i++) {
      // combine with every "person" of people
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
  }; */

  const locations = getFilteredPeople();

  // let locations = setInterval(getFilteredPeople,3000);
  //  console.log (setInterval(getFilteredPeople,3000));
  // console.log(locations);

  // setInterval(function () {
  //   // locations;
  //   // getFilteredPeople()
  // }, 5000);

  // const locations = [
  //   { name: "person 1", lat: 51.349932, lon: 12.345204 },
  //   { name: "person 2", lat: 51.348051, lon: 12.346539 },
  //   { name: "person 3", lat: 51.34367, lon: 12.342404 },
  //   { name: "person 4", lat: 51.346595, lon: 12.34629 },
  //   { name: "person 5", lat: 51.349317, lon: 12.345876 },
  //   { name: "person 6", lat: 51.344894, lon: 12.349283 },
  //   { name: "person 7", lat: 51.346551, lon: 12.345775 },
  //   { name: "person 8", lat: 51.348841, lon: 12.348714 },
  //   { name: "person 9", lat: 51.349015, lon: 12.341089 },
  //   { name: "person 10", lat: 51.342072, lon: 12.349309 },
  // ];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.LatLng(51.33524, 12.336818),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new google.maps.InfoWindow();

  for (let i = 0; i < locations.length; i++) {
    let marker;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].lon),

      map: map,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i].name);

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
