import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-magasins',
  templateUrl: './magasins.component.html',
  styleUrls: ['./magasins.component.css']
})
export class MagasinsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  images=[
    { 
      id:1,
     src:"assets/img/books/action-thriller-book-cover-.jpg",
    },
    {
     id:2,
     src:"assets/img/books/contemporary-fiction-night-time-book-cover-design-.jpg",
 
    },
    {
     id:3,
     src:"assets/img/books/b1_only_words_72l.jpg",
 
    },
    {
     id:4,
     src:"assets/img/books/action-thriller-book-cover-.jpg",
 
    }
  ];
  currantImage="";
  para;
  ngOnInit() {
    const param=this.route.snapshot.params['id'];
    
    this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.route.params.subscribe(routeParams => {
      this.para=routeParams.id;
    });


switch (param) {
  
  case 1:
      this.currantImage=this.images[0].src;
      this.para=1;
   console.log("waz",this.currantImage)
    break;
  case 2:
    this.currantImage=this.images[1].src;
    console.log("waz",this.currantImage)
    this.para=2;
    break;
  case 3:
    this.currantImage=this.images[2].src;
    console.log("waz",this.currantImage)
    this.para=3;
    break;
    case 4:
    this.currantImage=this.images[3].src;
    console.log("waz",this.currantImage)
    this.para=1;
    break;
}


  }
  

}
