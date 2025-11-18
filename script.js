const buttonHeight = 300 ;
const buttonWidth = 50 ;

const maxWidth = 750 - buttonWidth;
const maxHeight =  600- buttonHeight;
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buttton');
    
    button.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;

       
        
       
    });
});