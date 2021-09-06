import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faCog = faCog;
  faSignOut = faSignOutAlt;
  faAngleLeft = faAngleLeft;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  onLoggout() {
    this.service.logout;
  }
}
