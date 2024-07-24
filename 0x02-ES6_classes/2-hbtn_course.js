/**
 * a course class.
 */
export default class HolbertonCourse {
  /**
   * make @see {@link HolbertonCourse}.
   *
   * @param {String} name - COURSE NAME.
   * @param {Number} length - COURSE LENGTH.
   * @param {String[]} students - STUDENTS NAME.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * COURSE NAME.
   */
  get name() {
    return this._name;
  }

  /**
   * SET COURSE NAME.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * LENGTH OF COURSE.
   */
  get length() {
    return this._length;
  }

  /**
   * SET THE LENGTH OF COURSE.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * GET STUDENTS NAME.
   */
  get students() {
    return this._students;
  }

  /**
   * SET STUDENTS NAME.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
