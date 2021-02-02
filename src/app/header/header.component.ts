import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  images = [
    {
      id: 1,
      src: "assets/img/books/action-thriller-book-cover-.jpg",
    },
    {
      id: 2,
      src: "assets/img/books/contemporary-fiction-night-time-book-cover-design-.jpg",

    },
    {
      id: 3,
      src: "assets/img/books/b1_only_words_72l.jpg",

    },
    {
      id: 4,
      src: "assets/img/books/action-thriller-book-cover-.jpg",

    },
    {
      id: 5,
      src: "assets/img/books/b1_only_words_72l.jpg",

    }

  ];

  im=[...this.images];
  image2 = [...this.im.splice(0, 4)];
  i = 3;
  j=3;
  constructor(private router: Router) { }
  arrow() {
    this.i++;
    if (this.i > this.images.length-1) {
      this.i = 0;
    }
    this.image2.splice(0, 1);
    this.image2.splice(4, 1, this.images[this.i]);
  }
  arrowRight(){
    this.j++;
    if (this.j > this.images.length-1) {
      this.j = 0;
    }
    this.image2.splice(3, 1);
    console.log(this.image2);
    this.image2.splice(0, 0, this.images[this.j]);
    console.log(this.image2);

  }

  ngOnInit() {
    console.log("daw");
  }
  navigate(id) {
    this.router.navigate(['/magasins', 5]);

  }

}
