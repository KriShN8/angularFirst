export interface Istudent1 {
  name: string;
  age: number;
}

export interface Iprod2 {
  id: number;
  name: string;
}

export interface Iusers {
  id: number;
  username: string;
}

export interface Itasks {
  task: string;
  completed: boolean;
}

export interface Ibooks1 {
  title: string;
  author: string;
}

export interface Iposts {
  id: number;
  title: string;
}

export interface Iemployees1 {
  name: string;
  dept: string;
}
export interface Iorders1 {
  orderId: number;
  item: string;
}

export interface Iflights1 {
  flightNo: string;
  destination: string;
}

export interface IExpences {
  category: string;
  amount: number;
}

export interface Iproducts {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface Iemployees2 {
  id: number;
  name: string;
  department: string;
  experience: number;
}

export interface Istudent {
  id: number;
  name: string;
  subjects: Array<string>;
  grades: Array<number>;
}

export interface Iteams {
  teamId: number;
  project: string;
  members: Array<string>;
}
export interface Icategories {
  id: number;
  name: string;
  subcategories: Array<string>;
}

export interface Ibooks {
  id: number;
  title: string;
  author: string;
  genre: string;
}

export interface Imovies {
  id: number;
  title: string;
  rating: number;
  duration: number;
}

export interface IworkoutPlans {
  id: number;
  day: string;
  activities: Array<string>;
}

export interface Ievents {
  id: number;
  event: string;
  attendees: Array<string>;
}

export interface Iclients {
  id: number;
  name: string;
  phone: string;
  company: string;
}





export interface Isuppliers {
  id: number;
  name: string;
  location: string;
  rating: number;
}

export interface IRestaurant {
  id: number;
  name: string;
  menus: string[];
}
export interface Idepartments {
  id: number;
  department: string;
  manager: string;
  employees: string[];
}

export interface Itransactions {
  id: number;
  amount: number;
  date: string;
  status: string;
}
export interface Icourses {
  id: number;
  title: string;
  instructor: string;
  hours: number;
}
export interface Ipets {
  id: number;
  name: string;
  species: string;
  age: number;
}
export interface Iflights {
  id: number;
  from: string;
  to: string;
  duration: string;
}
export interface Iproduct {
  name: string;
  qty: number;
}

export interface Iorders {
  orderId: number;
  products: Iproduct[];
}
