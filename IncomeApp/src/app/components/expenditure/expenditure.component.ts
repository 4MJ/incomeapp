import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators} from '@angular/forms'
import {IncomeExpenditureService} from 'src/app/income-expenditure.service';
@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {
  myForm: FormGroup
  submitted:boolean = false;
  expAmmount="";
   eXpammount= [];

  constructor(private fb:FormBuilder, private myService: IncomeExpenditureService) { }

  ngOnInit() {
    this.myForm =this.fb.group({
      "ammount" : ["", Validators.required],
      "item" : ["", Validators.required],
      "details" : ["", Validators.required],
      "date": ["", Validators.required],
    })
  }
  get f(){
    return this.myForm.controls
  }
  onSubmit(){
    this.submitted=true
    if (this.myForm.invalid){
      return;
    }
  }
  getAmount(){
    this.eXpammount.push(this.expAmmount);
    console.log(this.eXpammount);
  }
}
