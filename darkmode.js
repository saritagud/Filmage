const bodyDarkmode = document.querySelector('.body');
const buttonDarkMode = document.querySelector('.button-darkmode');

saved();

buttonDarkMode.addEventListener('click', e =>{
    bodyDarkmode.classList.toggle('darkmode');
    save(bodyDarkmode.classList.contains('darkmode'));
});

function saved(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        save('false');
    }else if(darkmode === 'true'){
        bodyDarkmode.classList.add('darkmode');
    }
}

function save(value){
    localStorage.setItem('darkmode', value)
}