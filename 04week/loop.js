'use strict';


const carsInReverse = ['porsche', 'camaro', 'mustang', 'corvette', 'barracuda'];

for (let i = 0; i < carsInReverse.length; i++) {

  console.log(carsInReverse[i]);
}


const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan. 5,1925",
  gender: "female"
};

for (const x in person) {
  console.log(x);
}

for (const y in person) {
  if (y === 'birthDate') {
    console.log(person[y]);
  }
}

let z = 1;
while (z <= 1000) {
  console.log(z);
  z += 1;
}  

let b = 1;
do {
  console.log(b);
  b += 1;
} while (b <= 1000);
