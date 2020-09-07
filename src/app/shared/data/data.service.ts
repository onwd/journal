import { Group, Learner } from './models';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public learners: Array<Learner>;
  public groups: Array<Group>;

  constructor() {
    this.learners = [];
    this.groups = [];

    const json = localStorage.getItem('data');
    if (json) {
      try {
        const data = JSON.parse(json);

        this.learners = data.learners;
        this.groups = data.groups;
      } catch (error) {
        console.error(error);
      }
    }

    setInterval(() => {
      localStorage.setItem('data', JSON.stringify({
        learners: this.learners,
        groups: this.groups
      }));
    }, 1000);
  }
}
