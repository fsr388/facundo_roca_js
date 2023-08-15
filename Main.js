
function mostrarMenu() {
    let opcion =  prompt ("1. Producto \n 2. Random \n 3. Filtrar \n 4. Salir");
    return opcion;
}

function menuPrincipal() {
    var opcion;
  
    do {
     
      opcion = mostrarMenu();
  
      switch (opcion) {
        case "1":
          mostrarHerramientas();
          break;
        case "2":
          obtenerHerramientaAleatoria();
          break;
        case "3":
          filtrar();
          break;
          case "4":
          alert("¡Gracias por visitarnos!");
          break;
        default:
          alert("Opción inválida.");
          break;
      }
    } while (opcion !== "3");
  
    
    }


    function mostrarHerramientas(){
        let text = "Herramientas\n";
        for (var i = 0; i < herramientas.length; i++) {
        text +="-"+herramientas[i].getDatos()+"\n";
    }
        alert (text);
        
    }

    function obtenerHerramientaAleatoria() {
        var indiceAleatorio = Math.floor(Math.random() * herramientas.length);
        var herramientaAleatoria = herramientas[indiceAleatorio];
        alert ("Herramienta aleatoria seleccionada: " + herramientaAleatoria.getDatos());
      }

      function filtrar (){
        let tipo = prompt ("ingrese tipo de herramientas \n electrica \n manual");
        if (tipo == "electrica"|| tipo == "manual" ){ 
            let herramientaSelecionada = herramientas.filter(her=>her.getTipo()===tipo);
            let text = "herramientas Selecionadas\n";
            for (var i = 0; i < herramientaSelecionada.length; i++) {
            text +="-"+herramientaSelecionada[i].getDatos()+"\n";
            
            }
            alert (text);
        } else{ 
            alert ("opcion incorrecta");
            menuPrincipal();

        }
        
    }



    menuPrincipal();







