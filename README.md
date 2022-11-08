# DOCUMENTACIÓN 
# HTML
- para la creación de la calculadora se tuvo como referencia el codigo de la pagina: https://denisseestrada.com/calculadora-con-javascript/
- se tiene una estructura basica del html donde en el head estan conectados el CSS y JS
- el script del JS tiene el atributo 'defer' para que este cargue despues de haber procesado el html
- ![image](https://user-images.githubusercontent.com/114447994/200442141-7655350c-767a-4cb5-ba70-63fc3514a81b.png)
- en el body hay una seccion que contiene todos los elementos, dentro de ella se encuentra en dos secciones una para mostrar los numeros digitados y la otra contiene los botones de la calculadora
![image](https://user-images.githubusercontent.com/114447994/200442523-07079864-15eb-4a14-b835-4fd038d079f2.png)
![image](https://user-images.githubusercontent.com/114447994/200442577-f416de97-03dc-4ad2-af8a-f908990de1da.png)
- el boton 'AC' significa el reseteo de la pagina, el boton con el icono de '🌙' significa el modo oscuro de la calculadora y el icono '👈' para borrar los numeros.

# CSS 
- se vinculo la tipografia 'calculator' para toda la pagina. 
- ![image](https://user-images.githubusercontent.com/114447994/200443393-cc968d0c-d6b2-4380-9dff-4c0fc7ee4b62.png)
- para evitar el scroll horizontal y que los contenidos se ajusten se le dieron los siguientes comandos
- ![image](https://user-images.githubusercontent.com/114447994/200443568-650bf947-f17c-4ff0-8f1b-bdd04994a659.png)
- para aplicar el modo oscuro se le asigno la clase modoOscuro que es llamado del JS.
- ![image](https://user-images.githubusercontent.com/114447994/200443733-0dd8a6e0-3d96-4b1c-8444-0a8a51b110c9.png)
- se estruturo primero el responsive en movil y despues desktop comentados respectivamente en el css
- responsive : 320 px y 1024 px
- el posicionamiento de los botones esta por un display: grid.
- ![image](https://user-images.githubusercontent.com/114447994/200446243-c74ae3d2-0687-4864-8f02-d817d9ce2648.png)

# JavaScript
- tienes tres variables para operarlas despues
- ![image](https://user-images.githubusercontent.com/114447994/200446657-035965e4-913a-419f-9804-50eede22c040.png)
- dentro de la funcion init se crearon las variables de los botones los cuales se llaman desde el id del bonton en el html
- ![image](https://user-images.githubusercontent.com/114447994/200446943-b64bb244-af0a-4fb9-8f3e-0291b64de6b1.png)
- se llamaron los botones con un evento para que dentro de la función se pudieran visualizar y concatenar con el string correspondiente al boton 
- ![image](https://user-images.githubusercontent.com/114447994/200447221-1549ef60-15ed-42e9-8f63-451a7adf8cbc.png)
- para las opraciones se les asigno el evento y se llamanron las variables creadas desde el inicio 
- ![image](https://user-images.githubusercontent.com/114447994/200447723-fb7051f8-97ca-404b-ac44-0b863434024f.png)
- para poder reolver las opraciones se creo la función resolver con una variable 'res' para que opere dependiendo el caso si es suma, ,ultiplicación, resta ...etc
- ![image](https://user-images.githubusercontent.com/114447994/200448999-77340576-8968-4099-8cf4-c9b812336073.png)
- la función 'oscuro' es para poder agregar el modo nocturno de la calculadora, alterna entre la clase modoOscuro del css 
- ![image](https://user-images.githubusercontent.com/114447994/200449605-175a2956-480c-47ec-b927-875a6d2a4aef.png)

# Tipofrafias
- calculator
