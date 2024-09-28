import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  onSubmit(form: NgForm) { // Accept the form parameter
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      form.reset(); // Optionally reset the form
    }
  }
}
