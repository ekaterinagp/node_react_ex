const faker = require("faker");

const Student = require("../student");
// console.log(studentFile);
let students = [];

for (let i = 0; i < 10; i++) {
  const student = new Student(
    faker.name.firstName() + " " + faker.name.lastName()
  );
  students.push(student.name);

  // console.log(
  //   faker.name.firstName(),
  //   faker.name.lastName(),
  //   faker.name.jobType(),
  //   faker.name.suffix(),
  //   faker.name.jobTitle(),
  //   faker.address.city(),
  //   faker.address.country()
  // );
}

console.log(students);
