import { cloneDeep, range } from 'lodash';
import { Group, Learner, Lesson } from './models';
import { Injectable } from '@angular/core';
import { Subject } from './models/subject';

@Injectable()
export class DataService {
  public learners: Array<Learner>;
  public groups: Array<Group>;

  constructor() {
    const attendance = {};

    for (const year of range(19, 24 + 1)) {
      attendance[year] = {};

      for (const month of range(1, 12 + 1)) {
        attendance[year][month] = {};

        for (const day of range(1, 31 + 1)) {
          attendance[year][month][day] = '';
        }
      }
    }

    this.learners = [
      new Learner({
        id: 1,
        name: 'Вася Пупкин',
        gender: 'male',
        attendance: cloneDeep(attendance)
      }),
      new Learner({
        id: 2,
        name: 'Швед',
        gender: 'male',
        attendance: cloneDeep(attendance)
      }),
      // ...range(3, 30).map((id) => {
      //   return new Learner({
      //     id,
      //     name: 'Швед',
      //     gender: 'male',
      //     attendance: cloneDeep(attendance)
      //   });
      // })
    ];

    this.groups = [
      new Group({
        id: 1,
        name: 'Группа 1 Подгруппа 1',
        subjects: [
          new Subject({
            id: 1,
            name: 'ФЭМП',
            lessons: [
              new Lesson({
                id: 1,
                year: '19',
                month: '9',
                day: '10',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 2,
                year: '19',
                month: '9',
                day: '13',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 3,
                year: '19',
                month: '9',
                day: '15',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '10',
                day: '17',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 5,
                year: '19',
                month: '10',
                day: '19',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 6,
                year: '19',
                month: '10',
                day: '21',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 7,
                year: '19',
                month: '11',
                day: '23',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 8,
                year: '19',
                month: '11',
                day: '25',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 9,
                year: '19',
                month: '11',
                day: '27',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 10,
                year: '19',
                month: '12',
                day: '21',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 11,
                year: '19',
                month: '12',
                day: '24',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 12,
                year: '19',
                month: '12',
                day: '26',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 13,
                year: '20',
                month: '1',
                day: '20',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 14,
                year: '20',
                month: '1',
                day: '22',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 15,
                year: '20',
                month: '1',
                day: '24',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 16,
                year: '20',
                month: '2',
                day: '11',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 17,
                year: '20',
                month: '2',
                day: '13',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 18,
                year: '20',
                month: '2',
                day: '15',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 19,
                year: '20',
                month: '3',
                day: '15',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 20,
                year: '20',
                month: '4',
                day: '13',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 21,
                year: '20',
                month: '5',
                day: '16',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 22,
                year: '20',
                month: '6',
                day: '18',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 23,
                year: '20',
                month: '6',
                day: '21',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 24,
                year: '20',
                month: '7',
                day: '15',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 25,
                year: '20',
                month: '8',
                day: '9',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '7',
                day: '19',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '7',
                day: '20',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '7',
                day: '21',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              })
            ]
          }),
          new Subject({
            id: 1,
            name: 'Окружающий мир',
            lessons: [
              new Lesson({
                id: 1,
                year: '19',
                month: '9',
                day: '10',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 2,
                year: '19',
                month: '9',
                day: '13',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 3,
                year: '19',
                month: '9',
                day: '15',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '10',
                day: '23',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '6',
                day: '15',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '6',
                day: '16',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              }),
              new Lesson({
                id: 4,
                year: '19',
                month: '6',
                day: '17',
                topic: 'Свойства предметов (цвет)',
                hoursAndLessons: '0,5ч'
              })
            ]
          })
        ],
        learnersIds: [1, 2]
      }),
      new Group({
        id: 2,
        name: 'Группа 1 Подгруппа 2',
        subjects: [],
        learnersIds: []
      }),
      new Group({
        id: 3,
        name: 'Группа 2 Подгруппа 1',
        subjects: [],
        learnersIds: []
      }),
      new Group({
        id: 4,
        name: 'Группа 2 Подгруппа 2',
        subjects: [],
        learnersIds: []
      })
    ];
  }
}
