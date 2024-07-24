import ClassRoom from './0-classroom';

/**
 * array {@link ClassRoom} with a specific size.
 * @returns An array of {@link ClassRoom}.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
