console.log("Snack 1");

// Creare oggetti con 2 prorpietà: nome e peso

// const bike1 = {
//   name: "SuperSix Evo",
//   weightInLbs: 16.1,
// };

// const bike2 = {
//   name: "Specialized S-Works Tarmac",
//   weightInLbs: 14.72,
// };

// const bike3 = {
//   name: "Domane AL 4 Gen 4",
//   weightInLbs: 22.8,
// };

// Creare array di oggetti
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

// Paragonare valore della proprietà peso di ciascun oggetto

const weight1 = bikeList[0].weightInLbs;
const weight2 = bikeList[1].weightInLbs;
const weight3 = bikeList[2].weightInLbs;

// Stampare il nome della bici con peso minore
