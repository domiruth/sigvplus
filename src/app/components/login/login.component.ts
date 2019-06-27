import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import * as  crypto from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensajeCifrado: string;

  LoginObj: any = {
    User : '',
    Password: ''
  };

  
  constructor(private service: LoginService, private router: Router) {}

  ngOnInit() {
  }

  ValidateLogin() {
    let Errors = 0;
    if (this.LoginObj.User === '') {
      Errors++;
    }
    if (this.LoginObj.Password === '') {
      Errors++;
    }
    if (Errors === 0) {
      this.Login();
    } else {
      alert('Faltan ingresar datos');
    }
  }

  Login() {
    this.LoginObj.Password = this.cifrarSHA256(this.LoginObj.Password);
    this.service.LoginServices(this.LoginObj).subscribe(data => {
      if (data === null) {
        alert('Usuario incorrecto');
      } else {
        alert('Usuario ok');
        this.router.navigate(['/hotel']);
      }
  });
  }


  cifrarSHA256(texto) {
    console.log(texto);
    return crypto.SHA256(texto).toString();

 }

 /*
    str2ab(str) {
    const escstr = encodeURIComponent(str);
    const ua = new Uint8Array(escstr.length);
// tslint:disable-next-line: only-arrow-functions
    Array.prototype.forEach.call(escstr, function(ch, i) {
        ua[i] = ch.charCodeAt(0);
    });
    return ua;
 }

 ab2str(buffer) {
    const digestView = new Uint8Array(buffer);
    let hash = '';
    for (let i = 0; i < digestView.byteLength; i++) {
// tslint:disable-next-line: no-construct
        let hex = new Number(digestView[i]).toString(16);
        if (hex.length === 1) { hex = '0' + hex; }
        hash += hex;
    }
    return hash;
 }
*/

}
