import { User } from "./user";

export interface Action {
  type: string;
  payload: User | string | null;
}

export interface State {
  user: User | null;
  theme: string;
}
