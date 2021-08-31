import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { RouteConstants } from './routeconstants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advancedprac';
  constructor(public router: Router,public routeConstants: RouteConstants) {
  }
    
  ngOnInit() {
    this.router.navigateByUrl(this.routeConstants.dashboard);
  }
}
