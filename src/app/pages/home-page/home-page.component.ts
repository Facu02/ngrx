import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/types';
import { AuthService } from 'src/app/core/services/auth.service';
import { setLoggedUser } from 'src/app/core/state/actions/auth.actions';
import { AppState } from 'src/app/core/state/app.state';
import { selectAuth, selectLoggedUser } from 'src/app/core/state/selectors/auth.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store<AppState>, private auth: AuthService) { }

  user: User|null= null

  ngOnInit(): void {
    this.store.select(selectLoggedUser).subscribe(res=> this.user = res)

    
    if(this.user === null){

      this.auth.getUserLogged().subscribe(res => {
        this.store.dispatch(setLoggedUser(res))
      })

    }
  }

}
