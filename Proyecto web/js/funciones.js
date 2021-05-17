$('.checkbox').click(function(){
    if($('input.checkbox').is(':checked')){
        $('.theme').attr('href', 'css/dark.css');
    }else{
        $('.theme').attr('href', 'css/light.css');
    }
});
$(function(){
    $("#formuralito").validate({
      rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    name: "required",
                    ape: "required",
                    fecha: "required",
                    fono:"required"
                    
                }, 
            messages: {
                email: {
                    required: 'Ingresa tu correo electrónico',
                    email: 'Formato de correo no válido'
                },
                name: {
                    required: 'Ingresa tu Nombre',
                    minlength: 'Caracteres insuficientes'
                },
                ape: {
                    required: 'Ingresa tu Apellido',
                    minlength: 'Caracteres insuficientes'
                },
                fono:{
                    required: 'Ingrese un número de celular',
                    minlength: 'Cantidad de digitos insuficiente'
                },
                fecha:{
                    required: 'Seleccione una fecha válida',
                    max: 'Fecha no valida'
                }
            }
        }); 
    }); 

    $(function(){
        $("#formu").validate({
          rules: {
                        email: {
                            required: true,
                            email: true
                        },
                        nombre: "required",
                        ape: "required",
                        edad: "required",
                        resu: "required"
                    }, 
                messages: {
                    resu:{
                        required: 'Ingrese un texto valido',
                        max: 'texto no valido'
                    },
                    email: {
                        required: 'Ingresa tu correo electrónico',
                        email: 'Formato de correo no válido'
                    },
                    nombre: {
                        required: 'Ingresa tu Nombre',
                        minlength: 'Caracteres insuficientes'
                    },
                    ape: {
                        required: 'Ingresa tu Apellido',
                        minlength: 'Caracteres insuficientes'
                    },
                    edad:{
                        required: 'Ingrese una edad valida',
                        max: 'Edad no valida'
                    }
                }
            }); 
        }); 