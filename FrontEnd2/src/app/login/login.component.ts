import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  form: FormGroup;
  
  constructor(
     private fb: FormBuilder,
     private router: Router,
     private Login: LoginService,) {

    this.form = fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(valid: any) {

    if (valid) {
      const input = this.form.value;
      const Logindata = {
        user: input.user,
        pass: input.password,
      };
      this.Login.login(Logindata).subscribe(
        (res: any) => {
          this.Login.setTokenAndRole(res.token, res.role);
          this.router.navigate(['/container/main']);
        })
    }

  }

}
