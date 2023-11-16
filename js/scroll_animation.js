let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        } else {
            box.target.style.opacity = 0;
        }
    })
})

const div = document.querySelectorAll(".content-animation")
div.forEach((el) => observer.observe(el));