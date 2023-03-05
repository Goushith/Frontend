import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  fname: string = ''
  lname: string = ''
  job: string = ''
  number: string = ''

  constructor(private data: DataService, private fb: FormBuilder) { }

  addtableform = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    job: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    number: ['', [Validators.required, Validators.pattern("[0-9]*")]]
  })




  ngOnInit(): void {
  }





  addtotable() {
    // console.log("hai");

    var fname = this.addtableform.value.fname
    var lname = this.addtableform.value.lname
    var job = this.addtableform.value.job
    var number = this.addtableform.value.number
    if (this.addtableform.valid) {
      this.data.addtable(fname, lname, job, number)
        .subscribe((result: any) => {
          alert(result.message)

        },
          result => {
            alert(result.error.message)
          })

    }
  }

}
