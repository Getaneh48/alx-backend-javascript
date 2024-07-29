function getListStudentIds(objects) {
  if (!Array.isArray(objects)) {
    return [];
  }

  return objects.map((obj) => obj.id);
}

export default getListStudentIds;
