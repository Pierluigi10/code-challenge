import haversine from "haversine-distance";


/* let demo = [1,2,3,4,5,6,7,8,9,10];

const interval = setInterval(function(){
    console.log(demo.shift());
    if(demo.length == 0) clearInterval(interval);
},1000);
 */
// console.log(interval)

/* const data = {
    timer: {
      "num": 0.0,
      "perfection": 0
    }
  }
  

  const maxValue = 10;
  const intervalId = setInterval(loop, 20000) 
  
  function loop() {
    data.timer.num += 0.1
    data.timer.perfection += 1
    if (data.timer.perfection >= maxValue) {
      clearInterval(intervalId);
      console.log(data)
    }
    console.log(data)
  }
  console.log(data)
 */

//   function generateRandomNumber() {
//     const minm = 100000;
//     const maxm = 999999;
//     return Math.floor(Math.random() * (maxm - minm) + 1) + minm;
//   }

//   console.log(generateRandomNumber())

//   setInterval (() => {
//     const now = new Date();
//     console.log(now);
//   }, 3000);

//


/* 
const obj = {
  num: 1,
};

// Using dot notation
obj.num = obj.num + 1 || 1;
console.log(obj.num);

// Using bracket notation
obj["num"] = obj["num"] + 1 || 1;
console.log(obj.num);

console.log(obj);
 */
/* 

const array = [
  {
    num: 1,
  },
  {
    num: 4,
  },
  {
    num: 8,
  },
];

console.log(array[1].num);
console.log(array[1].num + 1);

console.log(array[1].num);
console.log((array[1].num = array[1].num + 1));
console.log(array[1].num);

const arrayMap = array.map((m) => {
  return m.num + 1;
});

console.log(arrayMap);
console.log(array);
 */

const people = [
  // { name: "person 1", lat: 51.349932, lon: 12.345204 },
  // { name: "person 2", lat: 51.348051, lon: 12.346539 },
  // { name: "person 3", lat: 51.34367, lon: 12.342404 },
  // { name: "person 4", lat: 51.346595, lon: 12.34629 },
  { name: "person 1", lat: 51.34932, lon: 12.34932 },
  { name: "person 2", lat: 51.34932, lon: 12.34932 },
];

/* const arrayPeople = people.map((m) => {
    const latIncr = m.lat + 1;
    const lonIncr = m.lon + 1;

  return  `${latIncr}, ${lonIncr}`;
});

console.log(arrayPeople);
console.log(people);

console.log(people[1].lat);
people[1].lat = people[1].lat + 3;
console.log(people[1].lat);

 */

// const randomNumber = Math.random() + (0.3 - 0.09) - 1;
// console.log(randomNumber);

// console.log(typeof randomNumber);

// const roundedRandomNumber = randomNumber.toFixed(2);
// console.log(roundedRandomNumber);
const randomNumber = Number(
  ((Math.random() + (6 - 3) - 0.6) * 0.001).toFixed(4)
);
console.log(randomNumber);

const getFilteredLocations = () => {
  let result = [];

  for (let i = 0; i < people.length; i++) {
    // combine with every "person" of people
    for (let j = i + 1; j < people.length; j++) {
      // console.log(randomNumber);

      // console.log(typeof randomNumber);

      // const roundedRandomNumber = Number(randomNumber.toFixed(2));
      // console.log(roundedRandomNumber);
      // console.log(people[j].lat);
      // const latIncrI = people[i].lat + 1;
      // const latIncrJ = people[j].lat + 1;
      // const lonIncrI = people[i].lon + 1;
      // const lonIncrJ = people[j].lon + 1;
      // console.log(people[j].lat);

      /*  people[i].lat = (people[i].lat + roundedRandomNumber).toFixed(6);
    people[j].lat = (people[j].lat + roundedRandomNumber).toFixed(6);
    people[i].lon = (people[i].lon + roundedRandomNumber).toFixed(6);
    people[j].lon = (people[j].lon + roundedRandomNumber).toFixed(6); */

      /*    people[i].lat = Number((people[i].lat + randomNumber).toFixed(6));
    people[j].lat = Number((people[j].lat + randomNumber).toFixed(6));
    people[i].lon = Number((people[i].lon + randomNumber).toFixed(6));
    people[j].lon = Number((people[j].lon + randomNumber).toFixed(6));
 */

      people[i].lat = Number(
        (people[i].lat + (Math.random() + (6 - 3) - 3) * 0.001).toFixed(6)
      );
      people[j].lat = Number(
        (people[j].lat + (Math.random() + (6 - 3) - 3) * 0.001).toFixed(6)
      );
      people[i].lon = Number(
        (people[i].lon + (Math.random() + (6 - 3) - 3) * 0.001).toFixed(6)
      );
      people[j].lon = Number(
        (people[j].lon + (Math.random() + (6 - 3) - 3) * 0.001).toFixed(6)
      );

      // console.log(people[j].lat);
      // console.log(people[i], people[j]);

      const haversine_m = haversine(people[i], people[j]);
      const haversine_km = haversine_m / 1000; //Results in kilometers
      // console.log(typeof haversine_km);
      //   console.log(haversine_m);
      //   console.log(haversine_km);
      const roundedString = haversine_km.toFixed(2);
      const rounded = Number(roundedString);
      // console.log(typeof rounded);
      //   if(rounded <= 1) result.push({first: people[i], second: people[j], distance: rounded});
      result.push({ first: people[i], second: people[j], distance: rounded });
      // if (rounded <= 1) result.push(people[i], people[j]);
      //   result.filter((distance) => distance <= 1)
    }
    console.log(result.length);
    return result;
  }
};

console.log(getFilteredLocations());
