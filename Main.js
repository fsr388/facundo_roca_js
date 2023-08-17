let carrito = [] ;
let productos =new Array () ;

let gestor ;


const key_carrito = "carrito";


document.addEventListener("DOMContentLoaded",()=>{

    
    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [] ;

    gestor = new GestionarProductos() ;
    gestor.iniciar();


})



document.querySelector("#buscar").addEventListener("keyup",()=>{


   let q = document.querySelector("#buscar").value ;

   if (q.length >= 2){

    gestor.buscar(q);



   }else{

    gestor.mostrarHeader("Todos los productos en stock");
    gestor.cargarProductos(productos);


   }






})



function addCarrito(id){

    const prod = document.querySelector("#row_"+id);

    let titulo = prod.querySelector('h3').textContent;
    let precio = prod.querySelector(".precio").textContent;
    let img =  prod.querySelector("img").src;

    let producto = new Producto (id,titulo,precio,img);

    gestor.addCart(producto);




}





