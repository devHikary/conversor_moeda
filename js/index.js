function Converter(){
  const dolar = 5.34;
  const euro = 6.26;
  const iene = 0.048;

  var valorElemento = document.querySelector('#valor');
  var valor = valorElemento.value
  var elementovalorConvertido = document.querySelector('#valorConvertido');

  if((valor === '') || (valor < 0)){
    var valorConvertido = "Por favor, digite um valor válido";
    elementovalorConvertido.innerHTML = valorConvertido;
    return;
  }

  var valorInput = parseFloat(valor)

  var select = document.querySelector('[data-moeda]')
  console.log(select.value);

  var valorEmReal
  switch(select.value){
    case "dolar":
      valorEmReal = valorInput * dolar;
      break;
    case "euro":
      valorEmReal = valorInput * euro;
      break;
    case "iene":
      valorEmReal = valorInput * iene;
      break;
  }
  
  console.log(valorEmReal);

  var valorConvertido = "O valor convertido em real é R$ " + valorEmReal.toFixed(2).replace('.',',');
  elementovalorConvertido.innerHTML = valorConvertido;
}

var elementoMenu = document.querySelector('[data-icone-menu]');

elementoMenu.addEventListener('click', () => {
  const body = document.querySelector('.menu-container')
  body.classList.toggle('show')
})
