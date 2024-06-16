import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-element',
  standalone: true,
  imports: [],
  templateUrl: './related-element.component.html',
  styleUrl: './related-element.component.scss'
})
export class RelatedElementComponent implements OnInit {
  relatedImgs: string[] = ["https://i.scdn.co/image/ab6761610000e5eb97082f87e85bdf96ef65e07e",
    "https://i.scdn.co/image/ab67616d000011eb5f27de84527a58e85e1e11b5",
    "https://i.scdn.co/image/ab67616d000011eb0fde79bfa5e23cb9cbdcd142",
    "https://i.scdn.co/image/ab67616d000011eb769d132c924d3f47390c3642",
    "https://mosaic.scdn.co/60/ab67616d00001e021569c79a0690bb0a9e2a86afab67616d00001e022986b9df1ccdfb9eecb7b6f3ab67616d00001e0249d97a374c711aaafa1115b9ab67616d00001e02a986f83417e718dfd4579824",
    "https://misc.scdn.co/your-episodes/SE-64.png",
    "https://misc.scdn.co/liked-songs/liked-songs-64.png",
    "https://i.scdn.co/image/ab6761610000101f6bb66110d5f3ba0e4ef4774f",
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
  titleArray: string[] = ["Bad Bunny",
    "Nicky nicole",
     "AC/DC",
    "Metallica",
     "Los chunguitos",
      "Billie Eillish",
     "Nicky nicole",
     "AC/DC",
    "Metallica",
     "Los chunguitos",
      "Billie Eillish",
      "Nicky nicole",
      "AC/DC",
     "Metallica",
      "Los chunguitos",
       "Billie Eillish",
      "Nicky nicole",
      "AC/DC",
     "Metallica",
      "Los chunguitos",
       "Billie Eillish",
       "Nicky nicole",
       "AC/DC",
      "Metallica",
       "Los chunguitos",
        "Billie Eillish",
       "Nicky nicole",
       "AC/DC",
      "Metallica",
       "Los chunguitos",
        "Billie Eillish"
             ]

  randomSelected: number = 0;
  ngOnInit(){
    this.randomSelected = getRandomInt(this.relatedImgs.length)
 }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
