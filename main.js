const nombres = document.querySelector('.nombres'); //Capturamos los nombres
const email = document.querySelector('.email'); //Capturamos el email
const n_materia = document.querySelector('.n-materia'); //Capturamos el numero de materias reprobadas

const materias = document.querySelector('.materias'); //Capturamos el contenedor de materias

const btn_enviar = document.querySelector('.enviar'); //Capturamos el boton



function validarNombres() {
    if (nombres.value.length < 5 || nombres.value.length > 40) {
        alert('Nombres invalidos');
    } else {
        email.classList.remove('disabled');
        email.removeAttribute('disabled');
    }
}
function validarEmail() {
    if (email.value.includes('@') && email.value.includes('.com')) {
        n_materia.classList.remove('disabled');
        n_materia.removeAttribute('disabled');
    } else {
        alert('Email invalido');
    }
}

function validarCursos() {
    const materia = [];
    switch (parseInt(n_materia.value)) {
        case 1:
            materia[0] = `<input type="text" placeholder="Ingrese materia 1" class="materia" required=""></input>`
            break;
        case 2:
            for (let i = 0; i < 2; i++) {
                materia[i] = `<input type="text" placeholder="Ingrese materia ${i + 1}" class="materia" required=""></input>`;
            }
            break;
        case 3:
            for (let i = 0; i < 3; i++) {
                materia[i] = `<input type="text" placeholder="Ingrese materia ${i + 1}" class="materia" required=""></input>`;
            }
            break;
    }
    materias.innerHTML = materia;

}


btn_enviar.addEventListener('click', (e) => {
    e.preventDefault();

    const __nombres = nombres.value;
    const __email = email.value;

    const __cursos = document.querySelectorAll('.materia');
    console.log(__nombres);
    console.log(__email);

    const arrayCursos = [];
    for (let i = 0; i < __cursos.length; i++) {
        arrayCursos[i] = __cursos[i].value;
    }
    console.log(arrayCursos);
})