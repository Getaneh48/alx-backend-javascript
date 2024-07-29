function updateStudentGradeByCity(students, city, newGrades) {
  const result = students.filter((student) => student.location == city).map((student) => {
    student.grade = 'N/A';
    for (const grade of newGrades) {
      if (student.id == grade.studentId){
        student.grade = grade.grade;
      }
    }
    return student;
  });

  return result;
}

export default updateStudentGradeByCity;
