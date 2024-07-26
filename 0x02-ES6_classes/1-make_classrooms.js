import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const crooms = [];
  crooms.push(new ClassRoom(19));
  crooms.push(new ClassRoom(20));
  crooms.push(new ClassRoom(34));

  return crooms;
}
