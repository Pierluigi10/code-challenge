import haversine from "haversine-distance";

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

const people = generatePeople(10);
// console.log(people);

const giveRandomMovement = (coordinatesPeople) => {
    coordinatesPeople = Number((coordinatesPeople + (Math.random() - 0.5) * 0.009).toFixed(6));
};


console.log(Math.random() + 0.5 )
console.log(Math.random() - 0.5 )

console.log((Math.random() - 0.5 ) * 0.009)
console.log((Math.random() - 0.5 ) * 0.009)

const getFilteredPeople = () => {
  let result = [];

  for (let i = 0; i < people.length; i++) {
    // combine with every "person" of people
    for (let j = i + 1; j < people.length; j++) {
        // giveRandomMovement(people[i].lat)
        // console.log(people[i].lat)
        // giveRandomMovement(people[i].lon)
        // giveRandomMovement(people[j].lat)
        // giveRandomMovement(people[j].lon)
      people[i].lat = Number(
        (people[i].lat + (Math.random() - 0.5) * 0.009).toFixed(6))
      ;
      people[j].lat = Number(
        (people[j].lat + (Math.random() - 0.5) * 0.009).toFixed(6));
      people[i].lon = Number(
        (people[i].lon + (Math.random() - 0.5) * 0.009).toFixed(6));
      people[j].lon = Number(
        (people[j].lon + (Math.random() - 0.5) * 0.009).toFixed(6));

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

//   console.log(getFilteredPeople());
//   const locations = getFilteredPeople();

/* const interval = setInterval(function(){
console.log(getFilteredPeople());
},5000);
console.log(interval)
 */