import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../models/auth";
import { authReducer } from "./reducers/auth.reducer";

export interface AppState {
  auth: AuthState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  auth: authReducer
}