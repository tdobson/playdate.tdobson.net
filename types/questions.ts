export interface Question {
  q: string;
  a: string;
}

export interface EventDate {
  date: string;
  time: string;
}

export interface Event {
  id: string;
  type: 'regular' | 'dads';
  title: string;
  hosts: string[];
  dates: EventDate[];
  location: {
    address: string;
    postcode: string;
    parking: string;
    mapsUrl: string;
  };
  contact: {
    email: string[];
    facebook: string;
  };
  details: {
    ageRange: string;
    cost: string;
    description: string;
  };
}
