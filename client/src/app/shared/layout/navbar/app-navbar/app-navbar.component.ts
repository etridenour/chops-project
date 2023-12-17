import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { ColorSchemeService } from 'src/app/core/services/color-scheme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss',
})
export class AppNavbarComponent {
  constructor(private colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.load();
  }

  onTheme(theme: string) {
    this.colorSchemeService.update(theme);
  }
}
