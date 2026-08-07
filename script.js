/* ==========================================
   مهرجان مسرتي فيك 2026
   أسرة البابا أثناسيوس القانونية
========================================== */


/* ===========================
   فتح الـ Modal
=========================== */

function openModal(id){

    const modal = document.getElementById(id);

    if(modal){

        modal.style.display = "block";

        document.body.style.overflow = "hidden";

    }

}



/* ===========================
   غلق الـ Modal
=========================== */

function closeModal(id){

    const modal = document.getElementById(id);

    if(modal){

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

}



/* ===========================
   غلق عند الضغط خارج النافذة
=========================== */

window.addEventListener("click", function(event){

    const modals = document.querySelectorAll(".modal");

    modals.forEach(function(modal){

        if(event.target === modal){

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    });

});



/* ===========================
   زر ESC للإغلاق
=========================== */

document.addEventListener("keydown",function(event){

    if(event.key === "Escape"){

        document.querySelectorAll(".modal").forEach(function(modal){

            modal.style.display="none";

        });

        document.body.style.overflow="auto";

    }

});



/* ===========================
   ظهور العناصر أثناء النزول
=========================== */

const observer = new IntersectionObserver(
    
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold:0.15
    }

);



document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});



/* ===========================
   حركة صور القديسين
=========================== */

const saints = document.querySelectorAll(".saint");


saints.forEach((saint,index)=>{


    saint.addEventListener("mouseenter",()=>{

        saint.style.animation="none";

    });



    saint.addEventListener("mouseleave",()=>{

        saint.style.animation="pulse 3s infinite";

    });


});



/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



/* ===========================
   زر العودة للأعلى
=========================== */


const topBtn = document.createElement("button");


topBtn.innerHTML="⬆";


topBtn.id="topBtn";


document.body.appendChild(topBtn);



Object.assign(topBtn.style,{

    position:"fixed",

    bottom:"25px",

    left:"25px",

    width:"55px",

    height:"55px",

    borderRadius:"50%",

    border:"none",

    background:"#FFD700",

    color:"#003366",

    fontSize:"25px",

    cursor:"pointer",

    display:"none",

    zIndex:"9999",

    boxShadow:"0 5px 20px rgba(0,0,0,.3)"

});



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});



topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



console.log("✨ مهرجان مسرتي فيك 2026 جاهز للعمل");