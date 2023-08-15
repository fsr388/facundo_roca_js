

let input_nombre = document.getElementById ("registerName").value;
let input_mail = document.getElementById ("registerEmail").value;
let input_contraseña = document.getElementById ("registerPassword").value;

let nuevo_usuario = new Array();

let manejoError = document.getElementById("manejoError");

let clickRegistrate = document.getElementById("clickRegistrate");
clickRegistrate.addEventListener ("click",()=>{
   manejoError.innerHTML="";
   if (validar_formulario()){
      generarUsuario();

    }

})

let clickInicio = document.getElementById("loginButton");
clickInicio.addEventListener ("click",()=>{
    
 login();
})


let clickBorrar = document.getElementById("clickBorrar");

clickBorrar.addEventListener("click",()=>{

  resetear_form();
})





function validar_formulario(){

  let input_nombre = document.getElementById ("registerName").value;
  let input_mail = document.getElementById ("registerEmail").value;
  let input_contraseña = document.getElementById ("registerPassword").value;



let arreglo_mensaje = new Array ();

  if (input_nombre == "" ){
    arreglo_mensaje.push ("Ingrese su nombre");
  }


  if (!input_mail ){
    arreglo_mensaje.push ("Ingrese su mail");

  }

  if (!input_contraseña ){
    arreglo_mensaje.push ("Ingrese su contraseña");
    
  }


  if (arreglo_mensaje.length>0){
    manejoError.innerHTML="";
    let lista = document.createElement ("ul");
    lista.textContent = "No es posible cargar los datos"

    arreglo_mensaje.forEach(Element => {
      lista.appendChild(crear_li(Element));

     
    });
    manejoError.appendChild(lista);
  }
    
   
    return arreglo_mensaje.length == 0;
 
}



function crear_li (mensaje){

  let li = document.createElement("li");
  li.textContent = mensaje;
  return li;

}






function generarUsuario(){


  let nombre = document.getElementById("registerName").value;
  let mail = document.getElementById("registerEmail").value;
  let contraseña = document.getElementById("registerPassword").value;

  let usuario = new DatosLogin(nombre,mail,contraseña);

    nuevo_usuario.push(usuario); 
    localStorage.setItem("usarioRegistrado",JSON.stringify(nuevo_usuario));

}


    


function resetear_form(){

  document.getElementById("registerName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";
  
}
resetear_form(); 


function login(){
  let errorLogin = document.getElementById ("errorLogin");
  let input_nombre = document.getElementById ("nombre").value;
  let input_password = document.getElementById ("loginPassword").value;
  const ur = localStorage.getItem ("usarioRegistrado");
  const usuariosRegistrados = JSON.parse(ur);
  console.log(usuariosRegistrados);
  const validaUsuario = usuariosRegistrados.find((u)=>u.nombre === input_nombre)
  const validaPassword = validaUsuario.contraseña === input_password;
  if (validaUsuario && validaPassword)
  {
    errorLogin.innerHTML = "Bienvenido " + input_nombre; 
    console.log("verdadero")
  } 
  else {
    errorLogin.innerHTML = "Usuario o Password Incorrecto"
  console.log("fasle")}
}








