const form = document.querySelector('form');
eField = form.querySelector('.email'),
eInput = eField.querySelector('input'),
pField = form.querySelector('.password'),
pInput = pField.querySelector('input');


form.onsubmit = (e)=>{
    e.preventDefault();

    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPassword();

    setTimeout(() => {
        eField.classList.remove('shake');
        pField.classList.remove('shake');
    }, 500);

    eInput.onkeyup = ()=>{checkEmail();}
    pInput.onkeyup = ()=>{checkPassword();}

    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector('.error-txt');
            (eInput.value != "") ? errorTxt.innerText = "fadlan  email address iska sax!" : errorTxt.innerText = "meel banaan lama ogala"
        }else{
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPassword(){
        if(pInput.value == ""){
            pField.classList.add('error');
            pField.classList.remove('valid');
        }else{
            pField.classList.remove('error');
            pField.classList.add('valid');
        }
    }

    if(!eField.classList.contains('error') && !pField.classList.contains('error')){
        window.location.href = form.getAttribute('action') //redirecting user to the specified url which is inside action attribute of form tag
    }
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});