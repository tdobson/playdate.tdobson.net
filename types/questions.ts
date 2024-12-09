export interface Question {
  q: string;
  a: string;
}

export interface PlayDate {
  date: string;
  time: string;
  type: 'regular' | 'dads';
}
