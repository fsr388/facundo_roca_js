
    let imput_email = document.getElementById ("exampleFormControlInput1").value;
    let imput_mensajeEmail = document.getElementById ("exampleFormControlTextarea1").value;
    let nuevo_mensaje = new Array();

    




let clickMensaje = document.getElementById("enviar");
clickMensaje.addEventListener ("click",()=>{
    nuevo_mensaje.innerHTML="";
   if (validar_mensaje()){

    sweetalert();
    }

})

function enviar(){


    let mail = document.getElementById ("exampleFormControlInput1").value;
    let mensaje = document.getElementById ("exampleFormControlTextarea1").value;

  
    let menssaje = new Datosmensajeria(mail,mensaje);
  
    nuevo_mensaje.push(menssaje); 
      localStorage.setItem("mensajeCliente",JSON.stringify(nuevo_mensaje));
      
  
  }
  


  function resetear_mensajeria(){

    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("exampleFormControlTextarea1").value = "";
   
  }
  resetear_mensajeria(); 

function validar_mensaje(){

    let email = document.getElementById ("exampleFormControlInput1").value;
    let mensaje_mail = document.getElementById ("exampleFormControlTextarea1").value;

    let mensajeUsuario = new Array ();

    if (email == "" ){
        mensajeUsuario.push ("Ingrese su email");
        return false

      }
    
    
      if (mensaje_mail =="" ){
        mensajeUsuario.push ("Ingrese su mensaje");
    
        return false

      }
      return true
}

function sweetalert (){
Swal.fire({
    title: '<Estas Seguro>',
    text: "Este mensaje sera respondido dentro de las 24 hs",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, enviar mensaje!'
  }).then((result) => {
    if (result.isConfirmed) {
        enviar();

        
      
    }
  })
}