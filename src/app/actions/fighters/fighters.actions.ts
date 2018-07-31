import { Action } from '@ngrx/store';
import { Fighter } from '../../fighter';

export enum FightersActionTypes {
// example declare action types
    GET = '[Fighters] GET',
    GET_COMPLETE = '[Fighters] GET_COMPLETE',
    GET_ERROR = '[Fighters] GET_ERROR',
    GET_SELECTED_FIGHTER = '[Fighters] GET_SELECTED_FIGHTER'
}

// example action class
export class Get implements Action {
    readonly type = FightersActionTypes.GET;
}

export class GetComplete implements Action {
    readonly type = FightersActionTypes.GET_COMPLETE;

    constructor(public payload: any) {}
}

export class GetSelectedFighter implements Action {
    readonly type = FightersActionTypes.GET_SELECTED_FIGHTER;

    constructor(public payload: any) {}
}

export class GetError implements Action {
    readonly type = FightersActionTypes.GET_ERROR;

    constructor(public payload: any) {}
}




export type FightersActions
=
// export action
| Get
| GetComplete
| GetSelectedFighter
| GetError
;
