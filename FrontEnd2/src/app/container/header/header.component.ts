import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbMenuService } from '@nebular/theme';
import { LoginService } from 'src/app/services/login.service';
interface ProfileMenu {
  title: string;
  icon: Icon;
  target: string;
}

interface Icon {
  icon: string;
  pack: string;
}

interface UserInfo {
  nombre: string;
  username: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public rolActive: string = '';
  public profileMenu: ProfileMenu[] = [
    /*  {
        title: 'Profile',
        icon: { icon: 'user-circle', pack: 'fa' },
        target: 'main/profile',
      },*/
    {
      title: 'Log Out',
      icon: { icon: 'sign-out-alt', pack: 'fa' },
      target: 'login',
    },
  ];
  constructor(private menuService: NbMenuService, private router: Router,
    private Login: LoginService,) { }

  ngOnInit(): void {
    this.rolActive = this.Login.getRole();
    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'menu-action'),
        map(({ item: { target } }) => target)
      )
      .subscribe((target) => {

        switch (target) {
          case 'login':
            this.Login.logout();
            this.router.navigate([target]);
            break;

          default:
            this.router.navigate([target]);
            break;
        }
      });

  }

}
