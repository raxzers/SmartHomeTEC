import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'sb-client-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  go(){
    var  ts=false;
    if (ts){this.route.navigate(['/dashboard']);}
		 else{alert("usuario y/o contraseña equivocado, Por favor intentar de nuevo")}
	}

}
