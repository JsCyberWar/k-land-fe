import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isCorrectForm='white';
  checkoutForm;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: ''
    });
   }

  ngOnInit(): void {
  }

 faEnvelope = faEnvelope;
 faMapMarkerAlt = faMapMarkerAlt;
 faPhone = faPhone;

 readonly ROOT_URL: string = 'http://localhost:3000/subcriber'; 
validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
 sendData(data){
   if(this.validateEmail(data))
    this.http.post(this.ROOT_URL,data).subscribe(() => {
      window.location.reload();
    });
    else {
      this.isCorrectForm='red'
    }
 }

}
