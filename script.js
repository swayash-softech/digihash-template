function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 10) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll',scrollHeader)




  const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav  =  document.querySelector(".nav_list");
    const navLinks = document.querySelectorAll(".nav_list li");

 
    burger.addEventListener('click', ()=>{

    // toogle nav
      nav.classList.toggle('nav-active');

        // animated links
      navLinks.forEach((link, index)=>{
        if(link.style.animation) {
        link.style.animation = '';
        } else{
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
        }
    });

    // burger animation
    burger.classList.toggle('toggle');
  });


  
  }

  navSlide();




  /*=============== review SWIPER ===============*/
