import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators} from '@angular/forms'
import { IncomeExpenditureService } from 'src/app/income-expenditure.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  myForm: FormGroup
  submitted:boolean = false;
  inAmmount="";
  Income= []

  constructor(private fb:FormBuilder, private myService: IncomeExpenditureService) { }

  ngOnInit() {
    this.myForm =this.fb.group({
      "ammount" : ["", Validators.required],
      "source" : ["", Validators.required],
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
getIncomeAmmount(){
  this.Income.push(this.inAmmount);
}

}

