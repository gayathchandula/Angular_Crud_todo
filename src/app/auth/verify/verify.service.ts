import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private login: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    //this.router.navigate(['/'])
    return new Promise((resolve, reject) => {
      const verify = this.login.verify();
      console.log(verify)
      if (verify) {
        resolve(true);
      } else {
        this.router.navigate(['/auth/login'])
        resolve(false);
      }
      //end of verify
    })
  }
}