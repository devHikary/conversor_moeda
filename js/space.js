function Converter(){
  var valorElemento = document.querySelector('#valor');
  var valor = valorElemento.value
  var elementovalorConvertido = document.querySelector('#valorConvertido');

  if(valor === ''){
    var valorConvertido = "Por favor, digite um valor";
    elementovalorConvertido.innerHTML = valorConvertido;
    return;
  }
  
  var valorEmDolar = parseFloat(valor)
  console.log(valorEmDolar);

  var valorEmReal = valorEmDolar * 9.461e+12;
  console.log(valorEmReal);

  var valorConvertido = "A estrela está localizada a " + valorEmReal + " km";
  elementovalorConvertido.innerHTML = valorConvertido;
}

var elementoMenu = document.querySelector('[data-icone-menu]');

elementoMenu.addEventListener('click', () => {
  const body = document.querySelector('.menu-container')
  body.classList.toggle('show')
})
