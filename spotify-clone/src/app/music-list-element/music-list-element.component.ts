import { Component, OnInit } from '@angular/core';
import { ResponsiveNoneBreak1Directive } from '../responsive-none-break-1.directive';
import { ResponsiveNoneBreak1Directive750 } from '../responsive-none-break-750.directive';

@Component({
  selector: 'music-list-element',
  standalone: true,
  imports: [ResponsiveNoneBreak1Directive,ResponsiveNoneBreak1Directive750],
  templateUrl: './music-list-element.component.html',
  styleUrl: './music-list-element.component.scss'
})
export class MusicListElementComponent implements OnInit{
  musicImgs: string[] = ["https://i.scdn.co/image/ab67616d000011ebf2930cf472e6e830b8119740"];

  ngOnInit(){
 }
}
