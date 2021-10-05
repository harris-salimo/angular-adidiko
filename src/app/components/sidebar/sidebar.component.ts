import { Component, OnInit } from '@angular/core';
import { faEnvelopeOpen, faMapMarkerAlt, faTachometerAlt, faUserAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faTachometer = faTachometerAlt;
  faUser = faUserAlt;
  faUsers = faUsers;
  faEnvelope = faEnvelopeOpen;
  faMap = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {
  }
}
