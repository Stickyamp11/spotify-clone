import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-element',
  standalone: true,
  imports: [],
  templateUrl: './related-element.component.html',
  styleUrl: './related-element.component.scss'
})
export class RelatedElementComponent implements OnInit {
  relatedImgs: string[] = ["https://i.scdn.co/image/ab6761610000e5eb97082f87e85bdf96ef65e07e"];

  ngOnInit(){
 }
}
