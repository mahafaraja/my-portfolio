    function toggleMenu()
    {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
                // STYLE THE DOWNLOAD & CV BUTTONS
 function buttonHover(){
    const buttons = document.querySelectorAll('.btn-color1','.btn-color2');

    buttons.forEach( button => {
        button.addEventListener( 'mouseenter' , () => {
            buttons.forEach(otherButton => {
                if (otherButton !== button){
                    otherButton.style.backgroundColor = 'white';
                    otherButton.style.color = 'black';
                }
            });
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
        });
    });

 }
