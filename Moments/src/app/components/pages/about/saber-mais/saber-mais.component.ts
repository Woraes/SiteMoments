import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-saber-mais',
  templateUrl: './saber-mais.component.html',
  styleUrls: ['./saber-mais.component.css']
})
export class SaberMaisComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/naruto/naruto1.jpg',
    thumbImage: 'assets/naruto/naruto1.jpg',
    alt: 'img naruto',
    title: 'Naruto 1',
    order: 1
}, {
  image: 'assets/naruto/naruto (2).jpg',
  thumbImage: 'assets/naruto/naruto (2).jpg',
  alt: 'img naruto',
  title: 'Naruto 2',
  order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/naruto/naruto (3).jpg',
  thumbImage: 'assets/naruto/naruto (3).jpg',
  alt: 'img naruto',
  title: 'Naruto 3',
  order: 3 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/naruto/naruto (4).jpg',
  thumbImage: 'assets/naruto/naruto (4).jpg',
  alt: 'img naruto',
  title: 'Naruto 4',
  order: 4 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/naruto/naruto (5).png',
  thumbImage: 'assets/naruto/naruto (5).png',
  alt: 'img naruto',
  title: 'Naruto 5',
  order: 5 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/naruto/naruto (2).jpg',
  thumbImage: 'assets/naruto/naruto (2).jpg',
  alt: 'img naruto',
  title: 'Naruto 6',
  order: 6 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];

videosObject: Array<object> = [{
  video: 'https://www.youtube.com/watch?v=fieqge7aYJM',
  title: 'Shipudem'
},
{video: 'https://www.youtube.com/watch?v=eoMPubmo2OE',
title: 'Shipudem'
},
{video: 'https://www.youtube.com/watch?v=Sm_KgD0_P5I',
title: 'Shipudem'
},
{video: 'https://www.youtube.com/watch?v=L0TdV4Iq7_Q',
title: 'Shipudem'
},
{video: 'https://www.youtube.com/watch?v=D4uz5dY2iV8',
title: 'Shipudem'
},
{video: 'https://www.youtube.com/watch?v=-oYMo8k22Vw',
title: 'Shipudem'
},]
  constructor() { }

  ngOnInit(): void {
  }

}
