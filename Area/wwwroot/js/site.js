const jsAdp2 = document.getElementById("js-adp2");
const offcanvasE1 = document.getElementById("offcanvasTop");
const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasE1);
const offcanvasInst = offcanvas || new bootstrap.Offcanvas(offcanvasE1);

let offcanvasState = false;
function verificarTamanhoTela() {
    const largura = window.innerWidth;
    const jsAdp1 = document.getElementById("js-adp1");
    const jsMnlk = document.getElementById("js-mnlk");

    if (largura < 800 && offcanvasState == false) {
        jsAdp2.style.display = "block";
        jsAdp1.style.display = "none";
        jsMnlk.style.display = "none";
     
    } else if (offcanvasState == false) {
        jsAdp1.style.display = "block";
        jsAdp2.style.display = "none";
        jsMnlk.style.display = "flex";
    }

    if (largura > 800 && offcanvasState == true) { offcanvasInst.hide(); }
}

verificarTamanhoTela();

window.addEventListener("resize", verificarTamanhoTela);


const header = document.getElementById("header");
const jsAdp3 = document.getElementById("js-adp3");


offcanvasE1.addEventListener('show.bs.offcanvas', () => {
    offcanvasState = true;
    setTimeout(() => {
        header.classList.remove('css-hda');
        header.classList.add('css-test');
        jsAdp2.style.display = "none";
        jsAdp3.style.display = "block";
        
    }, 200);
});

offcanvasE1.addEventListener('hide.bs.offcanvas', () => {
    offcanvasState = false;
    setTimeout(() => {
        header.classList.add('css-hda');
        header.classList.remove('css-test');
        jsAdp2.style.display = "block";
        jsAdp3.style.display = "none";
        
    }, 200);
});


const boxes = document.querySelectorAll('.list-group');
let activeIndex = 0;

boxes.forEach((box, index) => {
    box.addEventListener('mouseenter', () => {
        boxes.forEach(b => b.classList.remove('css-liact'));
        box.classList.add('css-liact');
    });

    box.addEventListener('mouseleave', () => {
        if (![...boxes].some(b => b.matches(':hover'))) {
            boxes.forEach(b => b.classList.remove('css-liact'));
            boxes[activeIndex].classList.add('css-liact');
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const fadeItem = document.querySelectorAll(".fade-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4, rootMargin: "0px 0px -40px 0px" });
    fadeItem.forEach(item => observer.observe(item));
});