import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  loginInfo: {username: string, password: string} = {username: '', password: ''};

  login(): Observable<any> {
    return new Observable((subscriber) => {

      if(this.loginInfo.username === environment.credentials.username 
        && this.loginInfo.password === environment.credentials.password) {
        subscriber.next({ message: 'Login successfully' });
      } else {
        subscriber.error({error: { message: 'We cannot find your credentials' }});
      }

    });
  }
}