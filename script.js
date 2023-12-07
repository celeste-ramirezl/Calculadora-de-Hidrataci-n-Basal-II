//Definimos las constantes a utilizar//
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLUJO = document.getElementById('flu');
const MANTENIMIENTO = document.getElementById('man');
CALCULAR.addEventListener('click', () => {
  const peso = document.getElementById('peso').value
  //validamos que se cargue un dato y definimos las fórmulas :) //
  if (peso > 0){
      ERROR.style.display = 'none'
      let flujo = calcFlujo(peso);
      let mantenimiento = flujo*1.5;
      FLUJO.innerHTML = flujo + ' cc/hr';
      MANTENIMIENTO.innerHTML = 'm+m/2 ' + mantenimiento.toFixed(2) + ' cc/hr';
      FLUJO.style.display = 'block';
      MANTENIMIENTO.style.display = 'block';
  } else {
      ERROR.style.display = 'block';
      FLUJO.style.display = 'none';
      MANTENIMIENTO.style.display = 'none';
  }
})
function calcFlujo(peso){
  let resto = peso;
  let flujo = 0;
  if (resto>20){
      let aux = resto-20;
      flujo += aux*1;
      resto -= aux;
  } 
  if (resto>10){
      let aux = resto-10;
      flujo += aux*2;
      resto -= aux;
  }
  flujo += resto*4;
  return flujo;
}
function calcFlujoBasadoEnBSA(peso) {
  // Fórmula para la Superficie Corporal//
  const bsa = ((peso * 4) + 7) / (peso + 90);

  //Fórmula para el cálculo de Flujo//
  const flujo = 2000 * bsa;

  return flujo.toFixed(2); //Para el resultado redondeamos dos decimales //
}

//Ejemplificación de uso al usuario final//
const peso = 30; // Peso en kg
const flujo = calcFlujoBasadoEnBSA(peso);
console.log("Flujo recomendado: " + flujo + " ml/min");
