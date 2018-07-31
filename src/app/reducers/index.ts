import {
    ActionReducerMap,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as fromFighters from './fighters/fighters.reducer';

  export interface State {
    fighters: fromFighters.FighterState;
  }

  export const reducers: ActionReducerMap<State> = {
    fighters: fromFighters.reducer,
  };

  // fighters
  export const selectFighterState = (state: State) => state.fighters;
  
    export const selectFighterEntities = createSelector(
      selectFighterState,
      fromFighters.selectFightersEntities
    );

    export const selectAllFighters = createSelector(
      selectFighterState,
      fromFighters.selectAllFighters
    );

    // select single fighter
    export const selectFighterIds = createSelector(
      selectFighterState,
      fromFighters.selectSectionIds
    );
     

    export const selectedFighterId = createSelector(
      selectFighterState,
      fromFighters.getSelectedFighterId
    );

    export const selectCurrentFighter = createSelector(
      selectFighterEntities,
      selectedFighterId ,
      (fighterEntities, fighterId) => fighterEntities[fighterId]
    );

  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
