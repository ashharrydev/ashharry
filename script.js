// ===============================
// Side Menu
// ===============================
const menuBtn = 
    document.querySelector(".menu-btn");
const sideMenu = 
    document.getElementById("sideMenu");
const closeBtn = 
    document.querySelector(".close-btn");

menuBtn.onclick = function () {
    sideMenu.classList.add("active");
}

closeBtn.onclick = function () {
    sideMenu.classList.remove("active");
}

window.onclick = function(e){
    if(e.target === sideMenu){
        sideMenu.classList.remove("active");
    }
}


// ===============================
// Loader
// ===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            setTimeout(function () {
                loader.style.display = "none";
            }, 800);

        }, 1800);

    }

});

// ===============================
// Password Show / Hide
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.querySelector(".password-box input");
    const eye = document.querySelector(".eye");

    if (passwordInput && eye) {

        eye.addEventListener("click", function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";
                eye.textContent = "🔒";

            } else {

                passwordInput.type = "password";
                eye.textContent = "👁️";

            }

        });

    }

});
// ===============================
// PHOTO GALLERY
// ===============================

const photoGrid = document.getElementById("photoGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let currentPhoto = 1;
const photosPerLoad = 40;
const totalPhotos = 45; // Abhi jitni photos upload hain

function loadPhotos() {

    if (!photoGrid) return;

    let loaded = 0;

    while (currentPhoto <= totalPhotos && loaded < photosPerLoad) {

        const img = document.createElement("img");

        const number = String(currentPhoto).padStart(3, "0");

        img.src = `ash${number}.jpg`;
        img.alt = `Nature Photo ${currentPhoto}`;
        img.loading = "lazy";

        img.onclick = function () {
            window.location.href = `photo.html?img=ash${number}.jpg`;
        };

        img.onerror = function () {
            this.remove();
        };

        photoGrid.appendChild(img);

        currentPhoto++;
        loaded++;
    }

    if (currentPhoto > totalPhotos && loadMoreBtn) {
        loadMoreBtn.style.display = "none";
    }
}

if (photoGrid && loadMoreBtn) {
    loadPhotos();

    loadMoreBtn.addEventListener("click", function () {
        loadPhotos();
    });
}
// ===============================
// GEMINI WINDOW STACK ANIMATION
// ===============================

const cards = document.querySelectorAll(".gemini-card");

if (cards.length) {

function lineView(){

cards.forEach((card,index)=>{

card.style.left=(index*170+20)+"px";
card.style.top="30px";
card.style.transform="scale(1)";
card.style.zIndex=index;

});

}

function stackView(){

cards.forEach((card,index)=>{

card.style.left="50%";
card.style.top="50%";

card.style.transform=
`translate(-50%,-50%)
translate(${index*18}px,${index*18}px)
scale(${1-index*0.05})`;

card.style.zIndex=10-index;

});

}

lineView();

setInterval(()=>{

stackView();

setTimeout(()=>{

lineView();

},3000);

},6000);

}
// ===========================
// PREMIUM LOADER
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";
    }, 100);

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 1800);

});
