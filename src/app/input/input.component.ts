import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as listActions from '../store/list-actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private datePipe: DatePipe, private store: Store<{list: {tasks: any}}>) { }

  add: FormGroup;

  ngOnInit(): void {
    this.add = new FormGroup({
      'task': new FormControl(null, [Validators.required])
    });
  }
  onSubmit(){
    const date = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
    const name = this.add.value.task;
    const event = {name, date}
    this.add.patchValue({
      task: ''
    })
    this.store.dispatch(new listActions.AddToDo(event));
  }
}

