import { createSelector } from '@ngrx/store';
import { AuthState } from '../../models/auth';
import { AppState } from '../app.state';

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthIsLoading = createSelector(
  selectAuth,
  (state: AuthState) => state.isLoading
);

export const selectLoggedUser = createSelector(selectAuth,(state: AuthState) => state.user);
