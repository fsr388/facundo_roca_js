const producto1 = new Producto ("1","set herramientas", "manual"); 
const producto2 = new Producto ("2","taladro inalambrico","bateria")
const producto3 = new Producto ("3","motocultivador","explosion")
const producto4 = new Producto ("4","gop","electrica")
const producto5 = new Producto ("5","pistola calor","electrica")
const producto6 = new Producto ("6","disco amoladora","electrica")
const producto7 = new Producto ("7","ingletadora",  "electrica" )
const producto8 = new Producto ("8","lijadora",  "electrica")
const producto9 = new Producto ("9","rotomartillo","electrica")

const herramientas = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];

localStorage.setItem("productos",herramientas);