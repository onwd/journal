export class Lesson {
  public id: number;
  public year: string;
  public month: string;
  public day: string;
  public topic: string;
  public hoursAndLessons: string;

  constructor(lesson?: Partial<Lesson>) {
    Object.assign(this, lesson);
  }
}
