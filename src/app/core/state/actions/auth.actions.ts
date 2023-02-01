import { createAction, props } from '@ngrx/store';
import { LoginInput } from '../../models/auth';
import { User } from '../../models/types';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ accessToken: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction(
  '[Auth] Logout'
);

export const login = createAction(
  '[Auth] Login',
  props<LoginInput>()
);

export const setLoggedUser = createAction(
  '[Auth] Set logged User',
  props<User>()
);
