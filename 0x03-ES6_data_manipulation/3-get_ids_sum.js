function getStudentIdsSum(students) {
	const sum = students.reduce((acc, val) => acc + val.id, 0);
	return sum;
}

export default getStudentIdsSum;
