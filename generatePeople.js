const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

const generatePeople = (num) => {
  let people = [];
  for (let x = 0; x < num; x++) {
    people[x] = {
      name: `person ${x + 1}`,
    //   lat: `51.3${generateRandomNumber(100000, 999999)}` * 1,
    //   lon: `12.3${generateRandomNumber(100000, 999999)}` * 1,
      lat: `51.${generateRandomNumber(1000000, 9999999)}` * 1,
      lon: `12.${generateRandomNumber(1000000, 9999999)}` * 1,
    };
  }
  return people;
};

export default generatePeople;
