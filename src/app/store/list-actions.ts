import { Action } from "@ngrx/store";

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MOVE_TASK = 'MOVE_TASK';
export const DELETE_DONE = 'DELETE_DONE';

export class AddToDo implements Action{
    readonly type = ADD_TODO;
    
    constructor(public payload: any){}
}

export class DeleteToDo implements Action{
    readonly type = DELETE_TODO;

    constructor(public payload: number){};
}

export class MoveTask implements Action{
    readonly type = MOVE_TASK;

    constructor(public payload: any){};
}

export class DeleteDone implements Action{
    readonly type = DELETE_DONE;

    constructor(public payload: number){};
}



export type ListActions = AddToDo | DeleteToDo | MoveTask | DeleteDone;