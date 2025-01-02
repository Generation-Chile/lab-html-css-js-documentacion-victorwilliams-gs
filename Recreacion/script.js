

function OnFocus(id){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function OnSubmit(){
    let nombre = document.getElementById('form-name').value;
    let email = document.getElementById('form-email').value;
    let mensaje = document.getElementById('form-message').value;
    

    if(nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    alert('Gracias por enviar tu mensaje, revisa la consola por favor');
    console.log({nombre, email, mensaje});

    document.getElementById('form-name').value = '';
    document.getElementById('form-email').value = '';
    document.getElementById('form-message').value = '';
}