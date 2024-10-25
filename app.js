console.log("Snack 1");

// Creare array di oggetti con 2 proprietà: nome e peso
const bikeList = [
  (bike1 = {
    name: "SuperSix Evo",
    weightInLbs: 16.1,
  }),
  (bike2 = {
    name: "Specialized S-Works Tarmac",
    weightInLbs: 14.72,
  }),
  (bike3 = {
    name: "Domane AL 4 Gen 4",
    weightInLbs: 22.8,
  }),
];

console.log(bikeList);

// Paragonare valore della proprietà peso di ciascun oggetto

const weight1 = bikeList[0].weightInLbs;
const weight2 = bikeList[1].weightInLbs;
const weight3 = bikeList[2].weightInLbs;

const lightestWeight = Math.min(weight1, weight2, weight3);
console.log(lightestWeight);

// Stampare il nome della bici con peso minore

for (let i = 0; i < bikeList.length; i++) {
  if (bikeList[i].weightInLbs === lightestWeight) {
    console.log(bikeList[i].name);
  }
}
