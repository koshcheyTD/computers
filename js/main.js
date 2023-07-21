const
iconMenu=document.querySelector('.nav_icon_menu');
iconBtn=document.querySelector('.icon_menu');
navMenu=document.querySelector('.nav_menu');


//icon menu
iconBtn.addEventListener('click', () =>{
    if(iconMenu.classList.contains('disp')==true){
        iconMenu.classList.remove('disp');
    } else{
        iconMenu.classList.add('disp');
    }
})

navMenu.addEventListener('click', menuClose)
    function menuClose(){
        if(iconMenu.classList.add('disp')==true){
            iconMenu.classList.remove('disp');
        } 
    }

iconBtn.addEventListener('click', menuTransform)
function menuTransform(e) {
    if (e.preventDefault() !== 'undefined'){};
    iconBtn.classList.toggle('active');
    }

