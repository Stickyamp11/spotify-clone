import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MusicListElementComponent } from './music-list-element/music-list-element.component';
import { RelatedElementComponent } from './related-element/related-element.component';
import { MixItemComponent } from './mix-item/mix-item.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { ResponsiveNoneBreak1Directive } from './responsive-none-break-1.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MusicListElementComponent, RelatedElementComponent,MixItemComponent,FooterMainComponent,ResponsiveNoneBreak1Directive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spotify-clone';
}

