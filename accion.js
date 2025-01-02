

let form = document.getElementById('cta-form');

form.addEventListener('click', function() {
  let formElement = document.getElementById('form');
formElement.scrollIntoView({ behavior: 'smooth' });
});

  function presionarBoton() {
    // capturar los valores de los inputs
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    // enviar los valores en un objeto a la consola
    

    if(nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    // mostrar un mensaje de alerta
    alert('Gracias por enviar tu mensaje, revisa la consola por favor');
    console.log({nombre, email, mensaje});
    // limpiar los inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  