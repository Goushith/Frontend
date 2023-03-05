import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addtable(fname: any, lname: any, job: any, number: any) {
    const user = {
      fname,
      lname,
      job,
      number
    }
    return this.http.post('http://localhost:3000/addtable', user)
  }


getdetails(){
  return this.http.get('http://localhost:3000/getdetails')
}


}



