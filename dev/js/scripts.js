const hamburger = document.getElementById('hamburger')


hamburger.addEventListener('click', ()=>{
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo-img')
    header.classList.toggle('active')

    if (header.classList.contains("active")) {
        logo.src = "./assets/icons/logo-open.svg";
    } else {
       
        logo.src = "./assets/icons/logo.svg";
    }

})

window.addEventListener('load',()=>{
    const preloader = document.querySelector('.section-loader')
  setTimeout(()=>{
      preloader.classList.add('finish')
},1300)

  
})