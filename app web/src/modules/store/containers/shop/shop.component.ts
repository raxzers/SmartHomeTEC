import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';



@Component({
    
    selector: 'sb-shop',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './shop.component.html',
    styleUrls: ['shop.component.scss'],
})
export class ShopComponent implements OnInit {
    ImagePath: string;
    constructor() {
        this.ImagePath = '/assets/img/f.png'

    }
    ngOnInit() {}
    cards = [
        {
          title: 'Card Title 1',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
        {
          title: 'Card Title 2',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
        {
          title: 'Card Title 3',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
        {
          title: 'Card Title 4',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
        },
    
      ];
}