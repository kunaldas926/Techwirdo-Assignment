import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';
import { NgForm } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tech-weirdo',
  templateUrl: './tech-weirdo.component.html',
  styleUrls: ['./tech-weirdo.component.css']
})
export class TechWeirdoComponent implements OnInit {

  constructor(private cs: ControlService) { }

  mod_company = []
  // submitForm: FormGroup;

  ngOnInit() {

    this.mod_company = this.cs.mod_comapny()

    // this.submitForm = this._formBuilder.group({

    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });

  }

  onSubmit(data: NgForm) {
    // console.log(data.value)

    this.cs.sendData(data.value)
  }
}
