function Converter(){
  var valorElemento = document.querySelector('#valor');
  var valor = valorElemento.value
  var elementovalorConvertido = document.querySelector('#valorConvertido');

  if((valor === '') || (valor < 0)){
    var valorConvertido = "Por favor, digite um valor válido";
    elementovalorConvertido.innerHTML = valorConvertido;
    return;
  }

  var valorEmDolar = parseFloat(valor)
  console.log(valorEmDolar);

  var valorEmReal = valorEmDolar * 5;
  console.log(valorEmReal);

  var valorConvertido = "O valor convertido em real é R$ " + valorEmReal;
  elementovalorConvertido.innerHTML = valorConvertido;
}

var elementoMenu = document.querySelector('[data-icone-menu]');

elementoMenu.addEventListener('click', () => {
  const body = document.querySelector('.menu-container')
  body.classList.toggle('show')
})
