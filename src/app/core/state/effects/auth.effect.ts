import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastService } from 'angular-toastify';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import  * as authActions  from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private notification: ToastService
  ) {}

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      exhaustMap(({ password, email }) =>
        this.authService.logIn({ password, email }).pipe(
          map((loginResult) => {
            return authActions.loginSuccess({
              accessToken: loginResult.accessToken,
            });
          }),
          catchError((error: Error) => {
            this.notification.error(error.message);
            return of(authActions.loginFailure({ error: error.message }));
          })
        )
      )
    )
  );

  logInSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginSuccess),
      exhaustMap(({ accessToken }) => {

        localStorage.setItem('accessToken', accessToken);
        this.router.navigate(['/home']);

        return this.authService.getUserLogged().pipe(
          map((user) => {
            return authActions.setLoggedUser(user);
          }),
          catchError((error: Error) => {
            this.notification.error(error.message);
            return of(authActions.loginFailure({ error: error.message }));
          })
        );

      })
    ) 
  );

  logOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.logout),
        tap(() => {
          this.authService.logOut();
          this.router.navigate(['/login']);
        })
      );
    },
    { dispatch: false }
  );
}
