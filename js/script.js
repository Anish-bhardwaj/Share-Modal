function activeclasses(){
    let modal=document.querySelector('#profile-modal');
    modal.classList.add('model-active');
    let overlay=document.querySelector('#overlay');
    overlay.classList.add('overlay-active');
}
function deactiveclasses(){
    let modal=document.querySelector('#profile-modal');
    modal.classList.remove('model-active');
    let overlay=document.querySelector('#overlay');
    overlay.classList.remove('overlay-active');
}
function activeFollow(){
    let modal=document.querySelector('#follow-modal');
    modal.classList.add('model-active');
    let overlay=document.querySelector('#overlay');
    overlay.classList.add('overlay-active');
}
function deactiveFollow(){
    let modal=document.querySelector('#follow-modal');
    modal.classList.remove('model-active');
    let overlay=document.querySelector('#overlay');
    overlay.classList.remove('overlay-active'); 
}
