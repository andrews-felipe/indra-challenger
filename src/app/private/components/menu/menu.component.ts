import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user = {
    name: "St ツAnubis",
    rank: "Mestre",
    views: 2062,
    pts: 236,
    gcoin: 100
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser()
  }

  exit(){
    this.auth.sigOut()
    this.router.navigate(['login'])
  }


}
