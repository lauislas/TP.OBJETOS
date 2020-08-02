cli-chart:
Se me asigno la Liberia ‘cli-chart’. Esta permite crear gráficos de barras en la consola usando node.js
Cli-chart permite darles ajustes al gráfico, como darle nombres a los ejes X e Y, ajustarle el ancho,altura,orientación, margen, color y distancia entre las barras y en algunos casos textos a cada barra del gráfico. 
Utilicé la Liberia para un pequeño programa que tiene un registro de vendedores(cargado desde un archivo txt) y sus ventas en la semana (lunes a viernes). El programa carga los vendedores y da la opción de graficar las ventas pidiendo el nombre del vendedor. En el grafico se pueden ver los días de trabajo y sus ventas, además de mostrar su registro.
Otra opción que permite el programa es dar de alta un nuevo vendedor.
Utilice dos clases para el programa: clase Vendedor la cual me permite obtener los datos de los vendedores y sus ventas semanales. Y la clase registro la cual permite la carga los registros de los vendedores, graficar sus ventas semanales y  dar de alta alta un nuevo vendedor.
Tambien usé la liberia readline-sync para pedir al usuario el ingreso de nombre y @types/node para poder leer archivos de texto.
