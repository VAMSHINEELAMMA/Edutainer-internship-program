const student = {
  name: "Vamshi",
  usn: "1AI22DS001",
  course: "AI and Data Science",
  semester: 4,
  marks: 85,

  showDetails: function () {
    console.log("Student Name:", this.name);
    console.log("USN:", this.usn);
    console.log("Course:", this.course);
    console.log("Semester:", this.semester);
  },

  checkResult: function () {
    if (this.marks >= 40) {
      console.log("Result: Pass");
    } else {
      console.log("Result: Fail");
    }
  }
};

student.showDetails();
student.checkResult();