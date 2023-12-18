import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-logout-btn',
  template: `<div class="mt-2">
  <button type="button" class="btn btn-danger" (click)="logOut()">Log Out</button>
</div>`,
  standalone: true
})

export class LogoutBtnComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit() { }

  logOut() {
    this.auth.logOut()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
