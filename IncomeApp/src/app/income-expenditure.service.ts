import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Income} from './income';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpenditureService {
  base_url:string = 'http://localhost:3000';

  option={
    header:new HttpHeaders({

    })
  }

  constructor(private http: HttpClient) { }


}
