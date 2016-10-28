function newList(){
	//Creando el div que tentra
	var divLista = document.createElement("form");
	divLista.setAttribute("id", "divLista");

	var inputTitulo =document.createElement("input");
	inputTitulo.setAttribute("placeholder", "Añadir lista...");
	inputTitulo.setAttribute("type", "text");
	inputTitulo.setAttribute("id", "inputTitulo")

	var btnGuardar = document.createElement("button");
	btnGuardar.setAttribute("class", "btn btn-success");
	btnGuardar.setAttribute("id", "guardar")
	var texto = document.createTextNode("Guardar");
	btnGuardar.appendChild(texto);

	var eliminar = document.createElement("button");
	eliminar.setAttribute("class", "btn");
	var cerrar = document.createTextNode("X");
	eliminar.appendChild(cerrar);
	
	var lista = document.getElementById("inicioLista");
	lista.appendChild(divLista);
	lista.appendChild(inputTitulo).onfocus; //agrega mi input
	lista.appendChild(btnGuardar);
	lista.appendChild(eliminar);

	guardar.addEventListener("click", function(e){
		//Guarda el nombre de la lista
		var nombreLista = document.createElement("h4");
	  	var inputValue = document.getElementById("inputTitulo").value;
	  	var t = document.createTextNode(inputValue);
	  	nombreLista.appendChild(t);
	  	if (inputValue === '') {
	    	alert("Debe escribir un titulo");
	  	} else {
    	document.getElementById("divLista").appendChild(nombreLista);

    	//Textarea
    	var textarea = document.createElement("textarea");
    	textarea.setAttribute("placeholder", "Añadir tarjeta...");
    	textarea.setAttribute("id", "textarea");
    	divLista.appendChild(textarea);
    	var añadir = document.createElement("button");
    	//btn Añadir
    	var btnañadir = document.createElement("button");
  		btnañadir.setAttribute("class", "btn btn-success");
  		btnañadir.setAttribute("id", "añadir");
  		var textañadir = document.createTextNode("Añadir");
  		btnañadir.appendChild(textañadir);
  		divLista.appendChild(btnañadir);
  		}
  		document.getElementById("inputTitulo").value = "";
	});
	
	eliminar.onclick=function(){
		inputTitulo.parentNode.removeChild(inputTitulo);
		btnGuardar.parentNode.removeChild(btnGuardar);
		eliminar.parentNode.removeChild(eliminar);
	}
}
