import { Action } from '@ngrx/store';
import { Fighter } from '../../fighter';
// import each action you created for the specific action type
import * as fromFighters from '../../actions/fighters/fighters.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// State with Entity extension
export interface FighterState extends EntityState<any> {
  selectedFighterId: number | null;
  loading: boolean;
}

// Entity Adapter
export const adapter: EntityAdapter<any> = createEntityAdapter<any>({

});

// Initial state - adding keys of ids and entities
export const initialState: FighterState = adapter.getInitialState({
    selectedFighterId: null,
    loading: false
});


export function reducer(state = initialState, action: fromFighters.FightersActions): FighterState {

  switch (action.type) {
    case fromFighters.FightersActionTypes.GET:
      return {
        ...state,
        loading: true
      };
    case fromFighters.FightersActionTypes.GET_COMPLETE:
      return adapter.addMany(action.payload, {
        ...state,
        loading: false,
      });
    case fromFighters.FightersActionTypes.GET_SELECTED_FIGHTER:
      return {
        ...state,
        selectedFighterId: action.payload,
      }
    case fromFighters.FightersActionTypes.GET_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }

}

export const {
  selectEntities: selectFightersEntities,
  selectAll: selectAllFighters,
  selectIds: selectSectionIds,
} = adapter.getSelectors();


export const getSelectedFighterId = (state: FighterState) => state.selectedFighterId;
