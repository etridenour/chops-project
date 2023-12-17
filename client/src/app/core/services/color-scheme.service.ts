import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  renderer: Renderer2;
  colorScheme: string = '';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setColorScheme(scheme: string) {
    this.colorScheme = scheme;
    localStorage.setItem('chops-theme', scheme);
  }

  getColorScheme() {
    const localStorageColorScheme = localStorage.getItem('chops-theme');
    this.colorScheme = localStorageColorScheme || 'dark';
  }

  update(scheme: string) {
    const previousTheme = this.colorScheme;
    this.setColorScheme(scheme);
    this.renderer.removeClass(document.body, `${previousTheme}-theme`);
    this.renderer.addClass(document.body, `${scheme}-theme`);
  }

  load() {
    this.getColorScheme();
    this.renderer.addClass(document.body, `${this.colorScheme}-theme`);
  }
}
