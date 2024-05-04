import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-headrer-front',
  templateUrl: './headrer-front.component.html',
  styleUrls: ['./headrer-front.component.scss']
})
export class HeadrerFrontComponent implements OnInit {

  constructor( private service: JwtService, private router: Router){}

  isLoggedIn: boolean = false;
  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      
      this.isLoggedIn = true;
  }
}
  title = 'jwt-angular';

  logout():void {
    this.service.logout();
    this.router.navigateByUrl("")
  }
}