import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';



@Component({
    
    selector: 'sb-shop',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './shop.component.html',
    styleUrls: ['shop.component.scss'],
})
export class ShopComponent implements OnInit {
    Carrus: string;
    

    constructor() {
        this.Carrus = '/assets/img/f.png'
        

    }
    ngOnInit() {}
    cards = [
        {
          title: 'Card Title 1',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          precio: 30000,
          img: '/assets/img/amazonecho.png',
          stars:5
        },
        {
          title: 'Card Title 2',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          precio: 30000,
          img: '/assets/img/enchfe-.png',
          stars:4
        },
        {
          title: 'Card Title 3',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          precio: 30000,
          img: '/assets/img/hue.png',
          stars:3
        },
        {
          title: 'Card Title 4',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          precio: 30000,
          img: '/assets/img/regleta.png',
          stars:6
        },
        {
          title: 'Card Title 5',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          precio: 30000,
          img: '/assets/img/switch wifi.png',
          stars:2
        },
        {
          title: 'Card Title 6',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          precio: 30000,
          img: '/assets/img/google-home-mini.png',
          stars:5
        },

    
      ];

      counter(i: number) {
        return new Array(i);
    }
}
