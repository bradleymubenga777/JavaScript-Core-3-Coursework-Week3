let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

//Task 1
function Gryffindor(witchesAndWizards){
  let [a, b, c, , , , , , i, j] = witchesAndWizards;
  console.log(`${a.firstName} ${a.lastName}`);
  console.log(`${b.firstName} ${b.lastName}`);
  console.log(`${c.firstName} ${c.lastName}`);
  console.log(`${i.firstName} ${i.lastName}`);
  console.log(`${j.firstName} ${j.lastName}`);
}
Gryffindor(hogwarts);

//Task 2
function findPetTeacher(witchesAndWizards){
  let [, , , , , , , , , j] = witchesAndWizards;

  console.log(`${j.firstName} ${j.lastName}`);
}

findPetTeacher(hogwarts);