import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Fighter } from '../../fighter';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FightersActionTypes, GetSelectedFighter, Get } from '../../actions/fighters/fighters.actions';
import * as fromRoot from '../../reducers';



@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class FightersComponent implements OnInit {

  selectedFighter$: Observable<any>;

  fighters$: Observable<Fighter[]>; 

  constructor(private fighterService: ApiService,
    private store: Store<fromRoot.State>) { }
  
  
  onSelect(fighterId): void {
    console.dir(this.store.select(fromRoot.selectCurrentFighter));
    this.selectedFighter$ = this.store.select(fromRoot.selectCurrentFighter);
    this.store.dispatch(new GetSelectedFighter(fighterId));
  }

  // getFighters(): void {
  //   this.fighterService.get20Fighters()
  //   .subscribe(fighters => this.fighters = fighters);
  // }

  ngOnInit() {
    this.store.dispatch(new Get());
    this.fighters$ = this.store.select(fromRoot.selectAllFighters);
  }

}
