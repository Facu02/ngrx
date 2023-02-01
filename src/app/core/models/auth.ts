import { User } from "./types";

export interface LoginResult {
  accessToken: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
}

export interface ChangePasswordInput {
  password: string;
}

export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  accessToken: string | null;
  error: string | null;
  user: User |null;
}
