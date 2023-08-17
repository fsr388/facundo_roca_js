class BuscadorProductos {

    iniciar() {

        productos = [

            {
                "id": 1,
                "nombre": "Set Herramientas",
                "descripcion": "Total Set Herramientas",
                "precio": 20000,
                "stock": 50,
                "img": "Set Herramientas.webp ",
                "destacado": 0
            },
            {
                "id": 2,
                "nombre": "Total Taladro inalambrico",
                "descripcion": "20 Volts",
                "precio": 35000,
                "stock": 10,
                "img": "taladro inalambrico.webp",
                "destacado": 1
            },

            {
                "id": 3,
                "nombre": "Total Motocultivador",
                "descripcion": "Motocultivador",
                "precio": 100000,
                "stock": 5,
                "img": "motocultivador.webp",
                "destacado": 0
            },
            {
                "id": 4,
                "nombre": "Omaha GOP",
                "descripcion": "GOP Multiproposito",
                "precio": 15000,
                "stock": 60,
                "img": "GOP.webp",
                "destacado": 1
            }

        ]


        let productosDestacados = productos.filter(prod => prod.destacado == 1);

        this.cargarProductos(productosDestacados);
    }



    cargarProductos(productos) {

        //const divProductos = document.getElementById("productos");
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        if (productos.length == 0) {

            this.mostrarHeader("No se han encontrado productos");
            return false;
        } else {

            productos.forEach((producto) => {


              /*  let id = producto.id;
                let nombre = producto.nombre;
                let img = producto.img;
                let descripcion = producto.descripcion;
                let precio = producto.precio;*/

                const {id,nombre,precio,img,cantidad,descripcion} = producto

                let prod = document.createElement("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.id = "row_"+id;
                prod.innerHTML = `<div class="w-20">
                                        <img src="./assets/img/${img}" alt="" width="150" height="150" >
                                  </div>

                                  <div class="p-3 d-flex flex-column w-60 h-150">
                                  <h3>${nombre}</h3>                                            
                                  <p>${descripcion.substring(0,120)}</p>
                              </div>

                                  <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                  <p class="precio">$${precio}</p>
                                  <a href="javascript:addCarrito(${id})" class="btn btn-primary">Agregar al carrito</a>
                                 </div>


                                `;


                divProductos.appendChild(prod);



            });


        }




    }


    mostrarHeader(msg) {


        const headerProductos = document.querySelector("#headerProductos");
        headerProductos.innerHTML = msg;

    }


    buscar(valor) {

        let resultado = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
            producto.descripcion.toLowerCase().includes(valor.toLowerCase()));
        this.cargarProductos(resultado);


    }

    addCart(item){


        const existe = carrito.some(producto => producto.id === item.id) ;

        if (existe){


            console.log("ya existe");

        }else{


            carrito.push(item);

        }


        this.actualizarCarrito();





    }



    actualizarCarrito(){


        this.mostrarCarrito();


    }


    mostrarCarrito(){

        let detalleCarrito = document.querySelector("#idCarrito");
        detalleCarrito.innerHTML = "" ;
        let total = 0 ;

        carrito.forEach ((producto) =>{


            const { id, nombre, precio, img, cantidad  } = producto;

            const row = document.createElement("div");
            row.classList.add("row");
            total += parseInt(precio);

            row.innerHTML= `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${nombre}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${precio}
                        </div>            
            
                        `;



               detalleCarrito.append(row);         





        })


    }




}