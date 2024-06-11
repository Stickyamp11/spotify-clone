import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-list-element',
  standalone: true,
  imports: [],
  templateUrl: './music-list-element.component.html',
  styleUrl: './music-list-element.component.scss'
})
export class MusicListElementComponent implements OnInit{
  musicImgs: string[] = ["https://i.scdn.co/image/ab67616d000011ebf2930cf472e6e830b8119740"];

  ngOnInit(){
 }
}
