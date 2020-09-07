export class Learner {
  public id: number;
  public name: string;
  public gender: 'male' | 'female';
  public birthDate: string;
  public personalFileNumber: string;
  public address: string;
  public parentsName: string;
  public parentsInfo: string;
  public attendance: { [year: string]: { [month: string]: { [day: string]: string } } };

  constructor(learner?: Partial<Learner>) {
    Object.assign(this, learner);
  }
}
