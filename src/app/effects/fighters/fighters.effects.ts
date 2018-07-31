import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { State } from '../../reducers';
import {
  FightersActions,
  FightersActionTypes,
  Get,
  GetComplete,
  GetError
  } from '../../actions/fighters/fighters.actions';

import {
  map,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { errorHandler } from '../errorHandler';


@Injectable()
export class FightersEffects {

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<State>,
    private router: Router,
  ) {}

  // @Effect()
   // add effect code here
   @Effect()
   getAll$: Observable<Action> = this.actions$.pipe(
     ofType<Get>(FightersActionTypes.GET),
     switchMap((action) => {
       return this.api.get20Fighters()
         .pipe(
           map((res: object) => new GetComplete(res)),
           catchError(errorHandler(GetError))
         );
     }),
   );

} // end Fighter Effects
