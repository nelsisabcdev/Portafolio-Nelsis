const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const rootStyle = document.documentElement.style;

const textsToChange = document.querySelectorAll('[data-section]');


// Simula el tiempo que tarda en cargar la página (puedes quitar esto en producción)
window.addEventListener('load', function () {
    setTimeout(removeLoader, 2000); // 2000 milisegundos = 2 segundos
});

function removeLoader() {
    document.querySelector('.loader-wrapper').style.display = 'none';
}


toggleTheme.addEventListener('click', () =>{
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes('A.png')) {
        toggleIcon.src='assets/img/A.png';
        toggleText.textContent = '💡';
    }else{
        toggleIcon.src='assets/img/A.svg';
        toggleText.textContent = "💡";
    }
});

toggleColors.addEventListener('click', (e) =>{
    rootStyle.setProperty('--primary-color', e.target.dataset.color);
});
