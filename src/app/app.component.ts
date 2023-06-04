import {Component} from '@angular/core'
import {Router} from "@angular/router";
import {RouterExtensions} from "@nativescript/angular";

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions
  ) {
  }

  onSelectedIndexChanged(args: any) {
    console.log('onSelectedIndexChanged: ', args.newIndex);
    const selectedIndex = args.newIndex;
    switch (selectedIndex) {
      case 0:
        this.routerExtensions.navigate([
          {outlets: {homeTab: ['home']}}
        ]);
        break;
      case 1:
        this.routerExtensions.navigate([
          {outlets: {exploreTab: ['explore']}},
        ]);
        break;
      case 2:
        this.routerExtensions.navigate([
          {outlets: {notificationsTab: ['notifications']}},
        ]);
        break;
      case 3:
        this.routerExtensions.navigate([
          {outlets: {profileTab: ['profile']}},
        ]);
        break;
    }
  }
}
