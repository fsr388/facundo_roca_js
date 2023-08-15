

class Producto {
    constructor(id,nombre, tipo){
  
        this.id = id;
        this.nombre = nombre; 
        this.tipo = tipo; 
        
        localStorage.setItem("productos",herramientas);
       
    }
  
  
    getId(){
        return this.id;
    }
    getnombre(){
  
        return this.nombre ;
        
    
      }
      
      getTipo(){
      
        return this.tipo ;
      }
      
      getDatos(){
        return  this.id + "-" + this.nombre + "-" + this.tipo ;
      }
      
      setNombre(nuevo_nombre){
      
        return this.nombre = nuevo_nombre;
      
      }
      
      setTipo(cambio_tipo){
      
        return this.tipo = cambio_tipo ;
      }
      
     
      }
     
      
      
    


 