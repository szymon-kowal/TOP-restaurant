import './style.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

let buttonHome = document.querySelector('.buttons button:nth-child(1)');
let buttonMenu = document.querySelector('.buttons button:nth-child(2)');
let buttonContact = document.querySelector('.buttons button:nth-child(3)');
let buttons = document.querySelectorAll('button');
let content = document.querySelector('.content');

function switchUnderscore() {
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
        });
    });
}

buttonHome.addEventListener('click', function() {
    home(content);
});

buttonMenu.addEventListener('click', function() {
    menu(content);
});

buttonContact.addEventListener('click', function() {
    contact(content);
});

switchUnderscore();
