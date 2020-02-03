class Student {
  //fields
  // classes = [];
  constructor(name) {
    this.name = name;
    this.classes = [];
    // use more memory than just ordinary declaration in fields
  }
  addClass(studentClass) {
    this.classes.push(studentClass);
  }
}

module.exports = Student;

const student = new Student("Lars");
student.addClass("React");
student.addClass("Django");

// console.log(student.classes);
