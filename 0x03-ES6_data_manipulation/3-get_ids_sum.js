function getStudentIdsSum(students) {
  return students.reduce((acc, val) => acc + val.id, 0);
}

export default getStudentIdsSum;
