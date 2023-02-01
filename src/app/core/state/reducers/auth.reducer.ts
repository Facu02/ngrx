import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../models/auth';
import { login, loginFailure, loginSuccess, logout, setLoggedUser } from '../actions/auth.actions';

export const initialState: AuthState = {
  isLoggedIn: false,
  isLoading:false,
  accessToken: null,
  error: null,
  user: null
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { accessToken }) => ({
    ...state,
    isLoggedIn: true,
    isLoading: false,
    accessToken,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
    token: null,
    error,
    user: null,
  })),
  on(logout, (state) => ({
    ...state,
    isLoggedIn: false,
    isLoading: false,
    accessToken: null,
    error: null,
    user: null,
  })),
  on(login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(setLoggedUser, (state, payload) => ({
    ...state,
    user: payload
  }))
);
