import { Component } from '@angular/core';
import { AnimalesService } from '../api/animales.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  vmedicos: any;

	constructor(private animales: AnimalesService, 
				private navCtrl: NavController ){

	}

  medicos(){

     console.log("Este es e metodo de medicos");
     this.navCtrl.navigateForward('/medicos');

  }


 ngOnInit(){
    /*this.animales.getAnimales().subscribe(data =>{

      console.log("Hola como estas");
      
  
      this.vanimales = data.animales;
  
      console.log(this.vanimales);*/

      
     this.animales.getMedicosList().subscribe(data2 =>{

      console.log("Hola como estas");
      
  
      this.vmedicos = data2.medicos;
  
      console.log(this.vmedicos);

    });
  
  }


}


