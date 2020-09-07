import { Group, Learner } from './models';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public learners: Array<Learner>;
  public groups: Array<Group>;

  constructor() {
    this.learners = [];
    this.groups = [];
  }
}
