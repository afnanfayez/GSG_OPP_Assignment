function isValidGrade(grade) {
  return grade === "A" || grade === "F";
}

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  if (isValidGrade(grade)) {
    this._grade = grade;
  } else {
    this._grade = "F";
  }

  this.getGrade = function () {
    return this._grade;
  };

  this.setGrade = function (newGrade) {
    if (isValidGrade(newGrade)) {
      this._grade = newGrade;
    } else {
      console.log("Invalid Grade");
    }
  };
}

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${
      this.age
    } years old, and I’m in grade ${this.getGrade()}.`
  );
};

const student1 = new Student("Afnan", 22, "A");
student1.introduce();
const student2 = new Student("Omar", 25, "B");
student2.introduce();
student2.setGrade("A");
student2.introduce();

console.log(student1.grade);//undefined => student1.getGrade()
