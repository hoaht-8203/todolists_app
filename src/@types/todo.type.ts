export interface Todo {
  id: string;
  name: string;
  done: boolean;
  date: Date;
}

export interface TodoStorage {
  id: string;
  name: string;
  done: boolean;
  date: string;
}
