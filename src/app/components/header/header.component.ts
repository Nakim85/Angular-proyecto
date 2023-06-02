import { Component } from '@angular/core';




@Component({
  selector: 'apheaderp-',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

titleLogin = 'Login';
emailUser = 'Correo electronico';
passwordUser = 'Contraseña';
inUser = 'Ingresar';
rememberUser = 'Recordarme';


nombre: string = '';
password: string='';
texto: string='';


messages_error_field:string='';
messages_error_field_2:string='';
messages_error_field_3:string='';


show:boolean=false;
show2:boolean=false;
show3:boolean=false;


userCredentials={
  userName: 'Camilo',
  password: '123456789'
}





Mostrar(){
  if(this.nombre=='' || this.nombre==null || this.nombre==undefined ){
    this.messages_error_field='El campo "Email" no puede estar vacio';
    this.show=true;
  }else{
    this.validateEmail(this.nombre);
    this.show = false;
  }


  if(this.password=='' || this.nombre==null || this.nombre==undefined){
    this.messages_error_field_3='El campo "Password" no puede estar vacio';
    this.show3=true;
  }else{
    this.show3=false;
  }


  this.emailUser


}


validateEmail(texto:string){
  let emailField= texto;
  let validEmail =  /^\w+([. -_+] ? \w+) *@\w+ ( [ . - ] ? \w+)*(\. \w{2,10})+$/;


  if(validEmail.test(emailField)){
    this.show2=false;
    return true;
  }else{
    this.messages_error_field_2="El dato no es valido";
    this.show2=true;
    return false;
  }
}





}

