/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var paragraaf = document.getElementsByClassName('foutmelding')[0];
var button = document.querySelector('form button');

function Toggle(e) {
    e.preventDefault();
    paragraaf.classList.toggle('active');
    paragraaf.innerHTML = 'Helaas zijn we momenteel nog niet online, volg ons op Instagram TravelGuideNL voor de laatste updates!';
}


button.addEventListener('click', Toggle);
