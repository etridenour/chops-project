import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';
import { AppNavbarComponent } from '../navbar/app-navbar/app-navbar.component';
import { AppScreenSize } from './app-screen-sizes';
import { MobileTopbarComponent } from '../mobile/mobile-topbar/mobile-topbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    AppNavbarComponent,
    CommonModule,
    MobileTopbarComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent implements OnInit {
  @Input() configLoaded: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenSize$.next(this.getScreenSize(window.innerWidth));
  }

  sidenavMode$: Observable<MatDrawerMode>;

  sideNavOpened$ = new BehaviorSubject<boolean>(true);
  screenSize$ = new BehaviorSubject<AppScreenSize>(AppScreenSize.Desktop);

  AppScreenSize = AppScreenSize;

  ngOnInit() {
    this.screenSize$.next(this.getScreenSize(window.innerWidth));

    this.sidenavMode$ = this.observeScreenSize();
  }

  getScreenSize(innerWidth: number): AppScreenSize {
    if (innerWidth < 600) {
      return AppScreenSize.Phone;
    }
    if (innerWidth >= 600 && innerWidth < 900) {
      return AppScreenSize.Tablet;
    }
    return AppScreenSize.Desktop;
  }

  observeScreenSize(): Observable<MatDrawerMode> {
    return this.screenSize$.pipe(
      distinctUntilChanged(),
      map(size => {
        if (size === AppScreenSize.Phone) {
          this.sideNavOpened$.next(false);
          return 'over';
        }
        this.sideNavOpened$.next(true);
        return 'side';
      })
    );
  }
}
