import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'mobile-topbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './mobile-topbar.component.html',
  styleUrl: './mobile-topbar.component.scss',
})
export class MobileTopbarComponent {
  @Output() openMobileSidenav = new EventEmitter();
}
