import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typedText: string = '';
  private textArray: string[] = ['Developer', 'Programmer'];
  private currentTextIndex: number = 0;
  private currentCharIndex: number = 0;
  private typingSpeed: number = 150; // Speed of typing in milliseconds
  private deletingSpeed: number = 75; // Speed of deleting in milliseconds
  private isDeleting: boolean = false;

  ngOnInit() {
    this.type();
  }

  private type() {
    const currentText = this.textArray[this.currentTextIndex];

    if (this.isDeleting) {
      this.typedText = currentText.substring(0, this.currentCharIndex--);
    } else {
      this.typedText = currentText.substring(0, this.currentCharIndex++);
    }

    // Check if we have completed typing the full text
    if (!this.isDeleting && this.currentCharIndex-1=== currentText.length) {
      // Pause before starting to delete
      setTimeout(() => {
        this.isDeleting = true;
        this.type(); // Start deleting
      }, 1000); // Adjust pause time as needed
    } else if (this.isDeleting && this.currentCharIndex < 0) {
      // Move to the next text after deleting
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length; // Cycle through texts
      this.currentCharIndex = 0; // Reset char index for the next word
      setTimeout(() => this.type(), 500); // Pause before typing next text
    } else {
      // Continue typing or deleting
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }

  viewResume() {
    window.open('https://drive.google.com/file/d/1zadFjTOsGdaFCNeA2-kEB0oH6_Y2lpTT/view?usp=drive_link', '_blank'); // Replace with the actual URL of your resume
  }
}
