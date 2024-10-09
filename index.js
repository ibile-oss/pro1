
 
const form = document.querySelector('form');

let fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function checkInput(){
    const items = document.querySelectorAll('.item');
    for(const item of items){
        if(item.value == ""){
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }
        if(items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener('keyup', () =>{
            checkEmail();
        });
        item.addEventListener('keyup', () =>{
            if(item.value != ""){
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }else{
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
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
            emailtxt.innerHTML = "Enter a valid email address";
        }else{
            emailtxt.innerHTML = "Email address can't be blank";
        }
    }
    else{
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

// function sendEmail(){
//     Email.send({
//         Host:"smtp.elasticemail.com",
//         Username:"username",
//         Password:"password",
//         To:"ibilehence@gmail.com",
//         From:"you@isp.com",
//         Subject:"This is the subject",
//         Body:"And this is the body"
//     }).then(
//         message => {
//             if(message == "OK"){
//                 Swal.fire({
//                     title:"Success!",
//                     text:"message sent successfully",
//                     icon:"success"
//                 });
//             }
//         }
//     );
// }

// scrollreaveal

function scrollreavealss(){
    ScrollReveal().reveal('.home',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:200
    });
    ScrollReveal().reveal('.fsc',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.lin',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.twi',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.text-animation',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.ttt',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.ins',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.social-icons',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.btn-group',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.services-box',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.testimonials-item',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.contact',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.footer',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.social',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.timeline-item',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.tik',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.p2',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.p3',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.html',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.css',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.javascript',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.php',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.mysql',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.bootstrap',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.jquery',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.react',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.node',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.angular',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.python',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:600
    });
    ScrollReveal().reveal('.home-img',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:500
    });
    ScrollReveal().reveal('.movement_limit',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:350
    });
    ScrollReveal().reveal('.stay1',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:200
    });
    ScrollReveal().reveal('.template__1',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:200
    });
    ScrollReveal().reveal('.minwrap',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:300
    });
    ScrollReveal().reveal('.mg_tap_tag',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.bitmaping',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.up',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.left',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.top',{
        duration:1000,
        origin:'right',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.second-section_',{
        duration:1000,
        origin:'bottom',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.second-section',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
    ScrollReveal().reveal('.stay2',{
        duration:1000,
        origin:'top',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    }); 
    ScrollReveal().reveal('.copi',{
        duration:1000,
        origin:'left',
        distance:'50px',
        intarval:200,
        reset:true,
        delay:400
    });
}
scrollreavealss();