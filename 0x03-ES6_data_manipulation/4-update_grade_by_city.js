export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // filter to get students by specified city
  const studentByCity = studentList.filter((student) => student.location === city);

  // use map to update grades
  const updatedStudents = studentByCity.map((student) => {
    // find the grade for the student in newGrades array
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // If grade is found update it, update else set N/A
    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';

    // Return a new array object with updated grade
    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedStudents;
}
