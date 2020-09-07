import { Lesson } from './lesson';

export class Subject {
  public id: number;
  public name: string;
  public lessons: Array<Lesson>;

  constructor(subject?: Partial<Subject>) {
    Object.assign(this, subject);
  }
}
