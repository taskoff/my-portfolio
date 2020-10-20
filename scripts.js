import { firstSliderInit } from './scripts/slider.js';
import { checkPosition, addClickListener } from './scripts/categories.js';

// import {host, username, password} from './scripts/email-info.js';
import {showWork }from './scripts/show_work.js';




window.addEventListener('scroll', checkPosition);

firstSliderInit();
showWork()
const button = document.querySelector('.footer-form-button');
console.log(button)
button.addEventListener('click', sendEmail)
// addClickListener(button, sendEmail)


function sendEmail() {

    const elements = {
        name : document.querySelector('.footer-input.name'),
        email : document.querySelector('.footer-input.f-email'),
        text : document.querySelector('.footer-textarea.text')
    }

    Email.send({
        Host : `${host}`,
        Username : `${username}`,
        Password : `${password}`,
        To : 'tasmanian7403@abv.bg',
        From : `tasmanian7403@abv.bg`,
        Subject : "Test email",
        Body : `<html><h2>${elements.name.value}</h2><strong>${elements.text.value}</strong><br></br><em>${elements.email.value}</em></html>`
    }).then(
        message => alert(message)
        );
        elements.name.value = '';
        elements.text.value = '';
        elements.email.value = '';

    }


