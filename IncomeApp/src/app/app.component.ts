import { Component } from '@angular/core';

export type EditorType = 'income' | 'expenditure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IncomeApp';

  editor: EditorType= 'income';

  get showIncome(){
    return this.editor === 'income';
  }
  get showExpenditure(){
    return this.editor ==='expenditure';
  }
  toggleEditor(type: EditorType){
    this.editor=type;
  }
}
