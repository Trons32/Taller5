

const crearElemento = (tagName) => {
    return document.createElement(tagName)
}

const crearElementoContexto = (tagName, textTag) => {
    var elemento = crearElemento(tagName);
    var elemetText = document.createTextNode(textTag);
    elemento.appendChild(elemetText);
    return elemento;
}


const agregarAlBody = (elemento) => {
    document.body.appendChild(elemento);
}


const agregarHijo = (padre, child) => {
    padre.appendChild(child);
}
