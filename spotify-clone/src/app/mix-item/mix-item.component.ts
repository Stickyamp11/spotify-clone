import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mix-item.component.html',
  styleUrl: './mix-item.component.scss'
})
export class MixItemComponent implements OnInit{
 @Input() elementType: string = "Mix";

 isArtist: boolean = false;

 artistsImgs: string[] = ["https://i.scdn.co/image/ab67616100005174d1e399fd6729a5751e1f4331"];
 mixImgs: string[] = ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9ad50e478a469448c6f369df/2/es/default"];
 loadedImgs: string[] = [];
 ngOnInit(){
    this.isArtist = this.elementType == "Artist" ? true : false;
    this.loadedImgs = this.elementType == "Artist" ? this.artistsImgs : this.mixImgs
 }
}
