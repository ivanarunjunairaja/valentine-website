document.addEventListener("DOMContentLoaded", function(){

  let current = 0;
  const pages = document.querySelectorAll(".page");

  /* Loader fade */
  setTimeout(()=>{
    const loader=document.getElementById("loader");
    loader.style.opacity="0";
    setTimeout(()=>loader.style.display="none",800);
  },2000);

  window.nextPage=function(){
    if(current < pages.length - 1){
      pages[current].classList.remove("active");
      current++;
      pages[current].classList.add("active");
    }
  };

  window.restart=function(){
    pages[current].classList.remove("active");
    current=0;
    pages[current].classList.add("active");
  };

});

/* YES BUTTON */
function showYes(){
  const msg=document.getElementById("yesMsg");
  msg.style.display="block";
}


document.addEventListener("DOMContentLoaded", function(){

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.querySelector(".yes-btn");
  const area = document.querySelector(".valentine-area");

  let scale = 1;       // No button scale
  let yesScale = 1;    // Yes button scale

  let messages = [
    "No 😜",
    "Are you sure? 😏",
    "Think again 😈",
    "Wrong choice 😂",
    "You can't catch me 😝",
    "Say Yes ❤️"
  ];

  let msgIndex = 0;

  noBtn.addEventListener("mouseover", function() {

      const areaRect = area.getBoundingClientRect();

      const maxX = areaRect.width - noBtn.offsetWidth;
      const maxY = areaRect.height - noBtn.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      noBtn.style.position = "absolute";
      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";

      /* 🔥 NO BUTTON SHRINK */
      if(scale > 0.5){
          scale -= 0.05;
          noBtn.style.transform = `scale(${scale})`;
      }

      /* 💖 YES BUTTON GROW */
      yesScale += 0.08;
      yesBtn.style.transform = `scale(${yesScale})`;

      /* 😈 CHANGE TEXT */
      noBtn.innerText = messages[msgIndex];
      msgIndex = (msgIndex + 1) % messages.length;

  });

});






/* SECRET KEY */
document.addEventListener("keydown", function(e){
  if(e.key.toLowerCase() === "s"){
    const hidden = document.getElementById("hiddenMsg");
    if(hidden){
      hidden.style.display="block";
    }
  }
});


/* POPUP */
function openPopup(img){
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popupImg");

    popup.style.display = "flex";
    popupImg.src = img.src;

    setTimeout(() => {
        popup.classList.add("show");
    }, 10);
}

function closePopup(){
    const popup = document.getElementById("popup");
    popup.classList.remove("show");

    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
}

function openRing(){
    document.getElementById("ring").style.display = "block";
    document.getElementById("foreverText").style.display = "block";
}

function restart(){
    location.reload();
}

function openLetter(envelope){

    const page = envelope.closest(".page");
    const letter = page.querySelector(".letter-content");

    envelope.style.display = "none";
    letter.classList.add("show");
}







/* HEART BUBBLES */
function createHearts(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="❤";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=Math.random()*3+3+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}

setInterval(createHearts,400);

