import { Subject } from './subject';

export class Group {
  public id: number;
  public name: string;
  public learnersIds: Array<number>;
  public subjects: Array<Subject>;

  constructor(group?: Partial<Group>) {
    Object.assign(this, group);
  }
}
