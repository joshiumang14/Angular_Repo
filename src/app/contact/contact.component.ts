import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form Submitted!', form.value);
      // Optionally, you can reset the form
      form.reset();
    }
  }
}
