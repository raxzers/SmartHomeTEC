import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private route:Router) { }

  ngOnInit(): void {
  }
  go(){
    var  ts=false;
    if (ts){this.route.navigate(['/dashboard']);}
		 else{alert("usuario y/o contraseña equivocado, Por favor intentar de nuevo")}
	}

}
