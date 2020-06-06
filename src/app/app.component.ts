import { Component } from '@angular/core';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private loc: Location, private router: Router) {
    router.events
      .pipe(filter(e => e instanceof Scroll || e instanceof NavigationEnd))
      .subscribe(e => {
        console.log(e);
      });
     window.scrollTo(0, 0)

  }

  locationBack() {
    window.history.back();
  }

  locationBackAngular() {
    this.loc.back();
  }
}
