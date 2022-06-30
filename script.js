var ScrollTopBtn = document.getElementById('scrollTop');
window.onscroll = function(){scrollFunction();}


function scrollFunction(){
   if(document.documentElement.scrollTop > 60 || document.body.scrollTop > 60){
      ScrollTopBtn.classList.add('d-block');
      ScrollTopBtn.classList.remove('d-none');
   }else{
    ScrollTopBtn.classList.remove('d-block');
    ScrollTopBtn.classList.add('d-none');
   }
}
function scrollToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function changeMode(){
    lightIcon = document.getElementById('lightIcon');
    lightIcon.classList.toggle('fa-regular');
    lightIcon.classList.toggle('fa-solid');
}

// different ways to add class for even and odd (.project) div. below shown:-

// first way
// document.querySelectorAll('.project')[0].classList.add('hhhhhhhhhhhhhhhhhhh');
// document.querySelector('.project:nth-child(even)').classList.add('hhhhhhhhhhhhhhhhhhh');
// document.querySelector('.project:nth-child(odd)').classList.add('tttttttttttttttttttttt');

// second way:
//  .forEach() tag of NodeList....
   document.querySelectorAll('.project > .row').forEach((tag,idx) =>
    idx % 2 === 0 ?
    // ... addd .black and .even+index classes... 0,2,4 are evens
     tag.classList.add('flex-row','even'+idx):
     //otherwise, add .white and .odd+index classes 1,3,5... are odds
     tag.classList.add('flex-row-reverse','odd'+idx)
   );

// third way
// for (const project of document.querySelectorAll('.project:nth-child(even)')) {
//   project.classList.add('EvenProject');
// }
// for (const project of document.querySelectorAll('.project:nth-child(odd)')) {
//   project.classList.add('OddProject');
// }


// document.getElementById('about-info').addEventListener('mouseover',function(){
//     document.getElementById('about-info').classList.add('bg-light')
// })
// document.getElementById('about-info').addEventListener('mouseout',function(){
//     document.getElementById('about-info').classList.remove('bg-light')
// })

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top','bg-dark','navbar-dark');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top','bg-dark','navbar-dark');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  