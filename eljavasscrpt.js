/*Creació de la marquesina */
const misLogos = [
    'blender.png', 
    'gimp.png', 
    'inkscape.png', 
    'html.png', 
    'javas.png', 
    'git.png', 
    'python.png', 
    'unity.png', 
    'mysql.png',
    'office.png'
];

const contenedor = document.getElementById('exposicio-imatges');

function inicializarMarquesina() {
    const fragmentoLogos = misLogos.map(nombre => {
        return `<img src="img/${nombre}" alt="Logo ${nombre}">`;
    }).join('');

    contenedor.innerHTML = fragmentoLogos + fragmentoLogos;
}

document.addEventListener('DOMContentLoaded', inicializarMarquesina);

