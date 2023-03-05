import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

alldetails:any=[]
x=""
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getdetails()
    .subscribe((x:any)=>{
      this.alldetails=x.users
      console.log(x)
    })

    
  }

}
