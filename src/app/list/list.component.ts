import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as listActions from '../store/list-actions'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: any[]=[];
  dones: any[]=[];
  doneOpened = false;
  toDoOpened = true
  constructor(private store: Store<{list: {toDo: any, done: any}}>) { }
  
  ngOnInit(): void {
    this.store.dispatch(new listActions.FirebaseGet());
    this.store.select('list').subscribe(data=>{
      this.tasks = data.toDo;
      this.dones = data.done;
    })

    
  }
  openToDo(){
    this.toDoOpened = !this.toDoOpened;
  }

  openDone(){
    this.doneOpened = !this.doneOpened;
  }

  deleteDone(i){
    this.store.dispatch(new listActions.DeleteDone(i));
  }

  deleteToDo(i){
    this.store.dispatch(new listActions.DeleteToDo(i));
  }
  
  moveToDone(i){
    this.store.dispatch(new listActions.MoveTask(this.tasks[i]));
    this.store.dispatch(new listActions.DeleteToDo(i));
  }
}
