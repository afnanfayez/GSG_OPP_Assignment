function isValidGrade(grade) {
  return grade === "A" || grade === "F";
}

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  let _grade = isValidGrade(grade) ? grade : "F";

  Object.defineProperty(this, "grade", {
    get: function () {
      return _grade;
    },
    set: function (newGrade) {
      if (isValidGrade(newGrade)) {
        _grade = newGrade;
      } else {
        console.log("Invalid Grade");
      }
    },
    enumerable: true
  });
}

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this.grade}.`
  );
};

const student1 = new Student("Afnan", 22, "A");
student1.introduce();
const student2 = new Student("Omar", 25, "B");
student2.introduce();
student2.grade = "A";
student2.introduce();
console.log(student1.grade);//undefined => student1.getGrade()
