import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as listActions from './list-actions'
import * as fromApp from './list-reducer'
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class ListEffects {
    
    // firebasePost = createEffect( () => 
        
    //     this.actions.pipe(
    //     ofType(listActions.ADD_TODO),
    //     mergeMap(action => {
    //         return this.http.post('https://todolistbyme-default-rtdb.firebaseio.com/toDo.json', 'data')
    //     }),
    //     map(response =>{ 
    //         return new listActions.AddToDo({ payload: response });
    //     })
    //     )
    // );

    firebaseGet = createEffect( () => 
        this.actions.pipe(
        ofType(listActions.FIREBASE_GET),
        mergeMap(action =>{
            return this.http.get('https://todolistbyme-default-rtdb.firebaseio.com/toDo.json')
        }),
        map(response =>{
            if(response){
                return new listActions.SetToDo({ response });
            }
        })
        )
    );

    firebaseGetDone = createEffect( () => 
        this.actions.pipe(
        ofType(listActions.FIREBASE_GET),
        mergeMap(action =>{
            return this.http.get('https://todolistbyme-default-rtdb.firebaseio.com/done.json')
        }),
        map(response =>{
            if(response){
                const task = response
                return new listActions.SetDone({ response });
            }
        })
        )
    );
    firebaseStoreToDo = createEffect(() => 
        this.actions.pipe(
            ofType(listActions.ADD_TODO, listActions.DELETE_TODO, listActions.MOVE_TASK),
            withLatestFrom(this.store),
            mergeMap(([actionData, listState ]) =>{
                console.log(listState.toDo);
                return this.http.post('https://todolistbyme-default-rtdb.firebaseio.com/toDo.json', listState.toDo)
            })
        ),{ dispatch: false }
    )

    firebaseStoreDone = createEffect( () => 
        this.actions.pipe(
        ofType(listActions.MOVE_TASK, listActions.DELETE_DONE),
        mergeMap(action =>{
            return this.http.get('https://todolistbyme-default-rtdb.firebaseio.com/done.json')
        }),
        map(response =>{
            if(response){
                const task = response
                return new listActions.SetDone({ response });
            }
        })
        )
    );
    constructor(private actions: Actions, private http: HttpClient, private store: Store<fromApp.State>){}
}