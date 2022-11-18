import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rfcomponent',
  templateUrl: './rfcomponent.component.html',
  styleUrls: ['./rfcomponent.component.css']
})
export class RFComponentComponent implements OnInit {



  data1 = new FormControl();
  data2 = new FormControl();
  onClick = new FormControl();
  //form = new FormGroup();
  constructor() { }

  ngOnInit(): void {
    this.data1.valueChanges.subscribe(d1 => console.log(d1))
    this.data2.valueChanges.subscribe(d2=> console.log(d2))

  }

 submit(){
   // console.log(this.form)
 }





}
