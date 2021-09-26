function Converter(){
  var valorElemento = document.querySelector('#valor');
  var valor = valorElemento.value
  var valorEmDolar = parseFloat(valor)
  console.log(valorEmDolar);

  var valorEmReal = valorEmDolar * 5;
  console.log(valorEmReal);

  var elementovalorConvertido = document.querySelector('#valorConvertido');
  var valorConvertido = "O valor convertido em real é R$ " + valorEmReal;
  elementovalorConvertido.innerHTML = valorConvertido;
}

var elementoMenu = document.querySelector('[data-icone-menu]');

elementoMenu.addEventListener('click', () => {
  const body = document.querySelector('.menu-container')
  body.classList.toggle('show')
})
