import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { LoginService } from '../services/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ToastrModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(protected loginService: LoginService, private toastr: ToastrService, private router: Router) {}

  onLoginButtonClick() {
    this.loginService.login().subscribe({
      next: ({message}) => {
        this.toastr.success(message).onHidden.subscribe({
          next: () => {
            this.router.navigateByUrl('/flight-form');
          }
        });
      },
      error: ({error}) => {
        this.toastr.error(error.message, 'Invalid credentials');
        console.error(error);
      },
    });
  }

  shouldButtonDisabled() {
    return (
      this.loginService.loginInfo.username == '' ||
      this.loginService.loginInfo.password == ''
    );
  }
}
