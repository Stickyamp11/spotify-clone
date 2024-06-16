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

 artistsImgs: string[] = ["https://i.scdn.co/image/ab67616100005174d1e399fd6729a5751e1f4331",
  "https://i2o.scdn.co/image/ab67706c0000cfa3dcb8ef732832610f83d74e51",
  "https://i.scdn.co/image/ab67616100005174c6f1d44557a4c7fe7518f29a",
  "https://i.scdn.co/image/ab6761610000517470f08f633c78d37071b55f7a",
  "https://i.scdn.co/image/ab676161000051744293b81686e67e3041aec80c",
  "https://i.scdn.co/image/ab67616100005174d1e399fd6729a5751e1f4331",
  "https://i.scdn.co/image/ab67616100005174632866253c99e4531985aa1a",
  "https://i.scdn.co/image/ab67616100005174f9c6ecc851bd73b3c174442e",
  "https://i.scdn.co/image/ab6761610000517465ed0931e30be68065fd1a61",
  "https://i.scdn.co/image/ab67616100005174afdf17286a0d7a23ad388587",
  "https://i.scdn.co/image/ab67616100005174c4c77549095c86acb4e77b37",
  "https://i.scdn.co/image/ab6761610000517466465185373d360ded208ecb",
  "https://i.scdn.co/image/ab67616100005174635985238f600767e711a3de",
  "https://i.scdn.co/image/ab67616100005174d7bb678bef6d2f26110cae49"
 ];
 mixImgs: string[] = ["https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9ad50e478a469448c6f369df/2/es/default",
  "https://dailymix-images.scdn.co/v2/img/ab67616d0000b2738fce8401809f131f2987d924/3/es/default",
  "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf9c6ecc851bd73b3c174442e/1/es/default",
  "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb00bfcedce3845ae969c8277a/2/es/default",
  "https://mosaic.scdn.co/640/ab67616d00001e0209cdd2dd467e32be9f88a0faab67616d00001e0245797cb4fd32836b08208a1aab67616d00001e02bfd9529b9525565e385ecde5ab67616d00001e02c740623963c8b91e82ca3780",
  "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/WClOP8V-GW89qSUhg4j6Ug==/c2VzZXNlc2VzZXNlc2VzZQ==",
  "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5ebe82c62cc8cf019aecfd71ee8/es",
  "https://i2o.scdn.co/image/ab67706c0000cfa3f152c266269c29cf4f6b6268",
  "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4zpGxqF6oI1h3f6Md2v42T/es",
  "https://i.scdn.co/image/ab67616d00001e02519266cd05491a5b5bc22d1e",
  "https://i.scdn.co/image/ab67616d00001e02c1ee165914cc91a59c1b1437",
  "https://i.scdn.co/image/ab67706f000000022ce93f53685e5918ab929338",
  "https://i.scdn.co/image/ab67706f000000026b4b678f986cf118081ec13f",
  "https://i.scdn.co/image/ab67706f0000000253913a4a92c3a2f2cfc154e1",
  "https://i.scdn.co/image/ab67656300005f1f3c9d6d20d89103bcde0b7961",
  "https://i.scdn.co/image/82596e01be49911d439f938255bc566cd4d77ba3",
  "https://i.scdn.co/image/d8c20e22d9910796e67afb52680661edf04a0ba4",
  "https://i.scdn.co/image/ab67656300005f1f5756ac6b3105054273f2f8fc",
  "https://i.scdn.co/image/ab67656300005f1f8af248f14ffefea12358514a"
 ];
 loadedImgSelected: number = 0;
 artistImgSelected: number = 0;
 loadedImgs: string[] = [];
 ngOnInit(){
    this.isArtist = this.elementType == "Artist" ? true : false;
    this.loadedImgs = this.elementType == "Artist" ? this.artistsImgs : this.mixImgs
    this.loadedImgSelected = getRandomInt(this.loadedImgs.length);
 }


}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
