import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    t2: Object = [];
    
    constructor(private route:Router,private http:HttpClient) {}
    ngOnInit() {}
    selectedCountry: String = "--Choose Country--";
  
	Regiones: Array<any> = [
        
        {name:'África', paises:['Angola ','Argelia ','Benín ','Botsuana ','Burkina Faso ','Burundi ','Cabo Verde ','Camerún ','Chad ','Comoras ','Costa de Marfil ','Egipto ','Eritrea ','Etiopía ','Gabón ','Gambia ','Ghana ','Guinea ','Guinea-Bissau ','Guinea Ecuatorial ','Kenia ','Lesoto ','Liberia ','Libia ','Madagascar ','Malaui ','Malí ','Marruecos ','Mauricio ','Mauritania ','Mayotte|local ','Mozambique ','Namibia ','Nigeria ','Níger ','Puntlandia ','República Centroafricana ','República del Congo ','República Democrática del Congo ','Reunión|local ','Ruanda ','Sahara Occidental ','Santa Elena ',' Ascensión y Tristán de Acuña ','Santo Tomé y Príncipe ','Senegal ','Seychelles ','Sierra Leona ','Somalilandia ','Somalía ','Suazilandia ','Sudáfrica ','Sudán ','Sudán del Sur ','Tanzania ','Togo ','Túnez ','Uganda ','Yibuti ','Zambia ','Zimbabue']},

        {name:'América Central', paises:['Belice  ','Costa Rica  ','El Salvador  ','Guatemala  ','Honduras  ','Nicaragua  ','Panamá']},

        {name:'América Central-Caribe', paises:['Anguila  ','Antigua y Barbuda  ','Aruba  ','Bahamas  ','Barbados  ','Caribe Neerlandés  ','Bonaire  ','Saba  ','San Eustaquio  ','Cuba  ','Curazao  ','Dominica  ','Granada  ','Guadalupe ','Haití  ','Islas Caimán  ','Islas Turcas y Caicos  ','Islas Vírgenes Británicas  ','Islas Vírgenes de los Estados Unidos  ','Jamaica  ','Martinica|local  ','Montserrat  ','Puerto Rico  ','República Dominicana  ','San Bartolomé|local  ','San Cristóbal y Nieves  ','San Martín  ','San Vicente y las Granadinas  ','Santa Lucía  ','Sint Maarten  ','Trinidad y Tobago']},

        {name:'América del Norte', paises:
        ['Bermudas  ','Canadá  ','Estados Unidos  ','Groenlandia  ','México  ','San Pedro y Miquelón']},

        {name:'América del Sur', paises:
        ['Argentina  ','Bolivia  ','Brasil  ','Chile  ','Colombia  ','Ecuador  ','Guayana Francesa  ','Guyana  ','Paraguay  ','Perú  ','Surinam  ','Uruguay  ','Venezuela']},

        {name:'Asia', paises:['Afganistán ','Arabia Saudita ','Armenia ','Azerbaiyán ','Bangladés ','Baréin ','Birmania ','Brunéi ','Bután ','Camboya ','Catar ','China ','Corea del Norte ','Corea del Sur ','Emiratos Árabes Unidos ','Estado de Palestina ','Filipinas ','Hong Kong ','India ','Indonesia ','Irak ','Irán ','Israel ','Japón ','Jordania ','Kazajistán ','Kirguistán ','Kuwait ','Laos ','Líbano ','Macao ','Malasia ','Maldivas ','Mongolia ','Nepal ','Omán ','Pakistán ','República de China ','República de Nagorno Karabaj ','Singapur ','Siria ','Sri Lanka ','Tailandia ','Tayikistán ','Turkmenistán ','Turquía ','Uzbekistán ','Vietnam ','Yemen']
        },

        {name:'Europa', paises:['Acrotiri y Dhekelia  ','Albania  ','Alemania  ','Andorra  ','Austria  ','Bielorrusia  ','Bélgica  ','Bosnia y Herzegovina  ','Bulgaria  ','Ciudad del Vaticano  ','Chipre  ','Croacia  ','Dinamarca  ','Eslovaquia  ','Eslovenia  ','España  ','Estonia  ','Finlandia  ','Francia  ','Georgia  ','Gibraltar  ','Grecia  ','Guernsey  ','Hungría  ','Irlanda  ','Islandia  ','Italia  ','Kosovo  ','Letonia  ','Liechtenstein  ','Lituania  ','Luxemburgo  ','Malta  ','Macedonia del Norte  ','Moldavia  ','Noruega  ','Países Bajos  ','Polonia  ','Portugal  ','Gales  ','Inglaterra  ','Escocia  ','Irlanda del Norte  ','República Checa  ','Rumania  ','Rusia  ','San Marino  ','Serbia  ','Suecia  ','Suiza  ','Ucrania  ','Abjasia  ','República Popular de Donetsk  ','Nueva Rusia  ','Osetia del Sur  ','Transnistria  ','República Popular de Lugansk  ','República Turca del Norte de Chipre']},

        {name:'Oceanía', paises:['Australia  ','Islas Cook  ','Isla de Navidad  ','Islas Marshall  ','Islas Pitcairn  ','Islas Salomón  ','Estados Federados de Micronesia  ','Fiyi  ','Guam  ','Kiribati  ','Nauru  ','Niue  ','Norfolk  ','Nueva Zelanda  ','Palaos  ','Papúa Nueva Guinea  ','Pitcairn  ','Polinesia Francesa  ','Samoa  ','Samoa Americana  ','Tonga  ','Tuvalu  ','Vanuatu  ','Wallis y Futuna  ','Rapa Nui']

        }


        
		
	];
  
    
	paises: Array<any> = []; //Angular 11
    

	get( url: string){
        this.t2=new Object;
        this.http.get(url).subscribe((data)=>{
          
        
        console.log(data);
         
        this.t2= data;
      })
          
      }
      
	
	changeCountry(Regiones: any) { 
		this.paises = this.Regiones.find((rgion: any) => rgion.name == Regiones.target.value).paises; //Angular 11
	}
   
	addMasDescr(){
        var direcion= document.createElement("textarea");
        direcion.classList.add("form-control");
        direcion.classList.add("py-4");
        direcion.setAttribute('name','direccion');
        direcion.setAttribute('ngModel','');
        
        document.getElementById("descripcion")?.appendChild(direcion);
    }
    go(f: NgForm){
        console.log(f.value);
        var  ts=false;
        if (ts){this.route.navigate(['/dashboard']);}
             else
         {
           alert("usuario y/o contraseña equivocado, Por favor intentar de nuevo")
           
        }
        }
}
