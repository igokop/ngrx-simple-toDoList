import { Action } from "@ngrx/store";

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MOVE_TASK = 'MOVE_TASK';
export const DELETE_DONE = 'DELETE_DONE';
export const FIREBASE_GET = 'FIREBASE_GET';
export const SET_TODO = 'SET_TODO';
export const SET_DONE = 'SET_DONE';
export const STORE_DONE = 'STORE_DONE';
export const STORE_TODO = 'STORE_TODO';

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

export class FirebaseGet implements Action{
    readonly type = FIREBASE_GET;
    
}

export class SetToDo implements Action{
    readonly type = SET_TODO;
    
    constructor(public payload: any){}
}

export class SetDone implements Action{
    readonly type = SET_DONE;
    
    constructor(public payload: any){}
}

export class StoreToDo implements Action{
    readonly type = STORE_TODO;
}    

export class StoreDone implements Action{
    readonly type = STORE_DONE;
    
}






export type ListActions = AddToDo | DeleteToDo | MoveTask | DeleteDone | FirebaseGet | SetToDo | SetDone | StoreToDo | StoreDone