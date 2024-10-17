import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form:FormGroup=this.fb.group({
  from_name:'',
  to_name:'Umang Joshi',
  from_email:'',
  message:''
  });
  constructor(private fb: FormBuilder){

  }

  async send(){
    emailjs.init('K6qk74DBp4DyJvviA');
    let response=await emailjs.send("service_3m2pkga","template_cnalpy2",{
  from_name:this.form.value.from_name,
  to_name: this.form.value.to_name,
  from_email: this.form.value.from_email,
  message: this.form.value.message,
  });
  alert('Message has been sent.');
  this.form.reset();
  }
  
   //onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     // Handle form submission logic here
  //     console.log('Form Submitted!', form.value);
  //     // Optionally, you can reset the form
  //     form.reset();
  //   }
  // }
}
