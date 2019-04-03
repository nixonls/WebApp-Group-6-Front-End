import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-planner-input',
  templateUrl: './planner-input.component.html',
  styleUrls: ['./planner-input.component.scss']
})
export class PlannerInputComponent implements OnInit {
  plannerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.plannerForm = this.formBuilder.group({
      type: ['', Validators.required],
      desc: ['', Validators.required],
      date: ['', Validators.required],
      notification: ['', Validators.required]
    });
  }

  onSubmit(){

  }
}
