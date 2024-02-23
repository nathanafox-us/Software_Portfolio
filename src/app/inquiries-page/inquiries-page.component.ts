import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-inquiries-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inquiries-page.component.html',
  styleUrl: './inquiries-page.component.scss'
})
export class InquiriesPageComponent {
  fromEmail = "";
  subject = "";
  message = "";

  submitForm() {
    
  }
}
