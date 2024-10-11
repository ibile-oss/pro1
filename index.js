
function SScrollreaveal(){
    let sections = querySelectorAll('section');
    let icons = querySelectorAll('.itags');
    for(let x = 0; x < icons.length; x++){
        if(icons[x].getBoundingClientRect().top <= window.innerHeight / 1.3){
            icons[x].classList.add('active');
        }else{
            icons[x].classList.remove('active');
        }

        if(icons[x].getBoundingClientRect().bottom <= window.innerHeight / 10){
            icons[x].classList.remove('active');
        }else{
            icons[x].classList.add('active');
        }
    }
    sections.forEach((sec, index) =>{
        if(sec.getBoundingClientRect().top <= window.innerHeight / 1.3){
            sec.classList.add('active');
        }else{
            sec.classList.remove('active');
        }
    })
}

// window.onscroll = () =>{
//     SScrollreaveal();
// }
const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const locat = document.getElementById("location");
const phone = document.getElementById("number");
const mess = document.getElementById("subject");
let err1 = querySelectorAll('.error-txt');


function checkInput(){
    const items = document.querySelectorAll('.item');
    for(const item of items){
        if(item.value == ""){
            item.classList.add('error');
        }
        if(items[1].value != ""){
            checkEmail();
        }
        if(items[0].value == ""){
            name_check();
        }
        items[1].addEventListener('keyup', () =>{
            checkEmail();
        });
        items[0].addEventListener('keyup', () =>{
            name_check();
        });
        items[2].addEventListener('keyup', () =>{
            location_check();
        });
        items[3].addEventListener('keyup', () =>{
            phone_number_check();
        });
        if(items[2].value == ""){
            location_check();
        }
        if(items[3].value == ""){
            phone_number_check();
        }
        item.addEventListener('keyup', () =>{
            if(item.value != ""){
                item.classList.remove('error');
            }else{
                item.classList.add('error');
            }
        });
    }
    
}
function location_check(){
    let errr = querySelector('.error-txt.locat');
    if(locat.value == ""){
        errr.classList.add('active');
        errr.innerHTML = "Field can't be empty";
    }else{
        errr.classList.remove('active');
    }
}
function phone_number_check(){
    let err = querySelector('.error-txt.phone');
    if(phone.value == ""){
        err.classList.add('active');
        err.innerHTML = "Field can't be empty";
    }else{
        err.classList.remove('active');
    }
}
function name_check(){
    let err = querySelector('.error-txt.name');
    if(fullname.value == ""){
        err.classList.add('active');
        err.innerHTML = "Field can't be empty";
    }else{
        err.classList.remove('active');
    }
}
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInput();
})
function checkEmail(){
    const emailtxt = document.querySelector('.error-txt.email')
    const email_check = /^([a-z\d\.-]+)@([a-z\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(!email.value.match(email_check)){
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if(email.value != ""){
            emailtxt.innerHTML = "Enter valid email address";
            emailtxt.classList.add('active');
        }else{
            emailtxt.innerHTML = "Field can't be empty";
            emailtxt.classList.add('active');
        }
    }
    else{
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// //    
// }


// 'use strict';

 
// function tawsomeTUMBLE(){
//     let a = querySelectorAll('.like-options span');
//     a.forEach((ar, index) =>{
//         ar.addEventListener('click', function(){
//             alert(ar.tagName);
//         })
//     })
//  }
//  tawsomeTUMBLE();

// return document.x;
function querySelector(x){
    return document.querySelector(x);
}
function querySelectorAll(x){
    return document.querySelectorAll(x);
}
function creatElement(x){
    return document.createElement(x)
}
// return document.x;

//add event on element;
const addEventOnElem = function(elem, type, callback){
    if(elem.length > 1){
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }else{
        elem.addEventListener(type, callback);
    }
}
// navbar toggle;
const navbar = querySelector("[data-navbar]");
const navbarlink = querySelectorAll("[data-navbar-link]");
const navbartogler = querySelector("[data-nav-toggle]");

const togglNavbar = function(){
    navbar.classList.toggle("active");
    navbartogler.classList.toggle("active");
    document.body.classList.toggle("active");
}
addEventOnElem(navbartogler, "click", togglNavbar);

const closNavbar = function(){
    navbar.classList.toggle("active");
    navbartogler.classList.toggle("active");
    document.body.classList.toggle("active");
}
addEventOnElem(navbarlink, "click", closNavbar);

// header active;


// window.addEventListener('scroll', ()=>{
// const header = querySelector(".header");
//     if(window.scrollY >20){
//         header.classList.add('scrolled');
//     }else{
//         header.classList.remove('scrolled');
//     }
// })

// scrollreaveal

function scrollreavealss(){
    ScrollReveal().reveal('.hesh',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:200
    });
    ScrollReveal().reveal('.form-data',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.pt2',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.home-img',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.twi',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:200
    });
    ScrollReveal().reveal('.fsc',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.lin',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.ins',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:300
    });
    ScrollReveal().reveal('.home',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:200
    });
    ScrollReveal().reveal('.fedu',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:100
    });
    ScrollReveal().reveal('.sedu',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:200
    });
    ScrollReveal().reveal('.tedu',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.fpro',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:250
    });
    ScrollReveal().reveal('.spro',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:300,
        reset:true,
        delay:200
    });
}
scrollreavealss();