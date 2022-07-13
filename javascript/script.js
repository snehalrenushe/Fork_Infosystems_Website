"use strict";

Placement();
carousel();

// Gallary Section
function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
  
}

// Placement Section


function Placement() {
  let carouselSliderplacement = document.querySelector(".carousel-slider-placement");
  let listplacement = document.querySelector(".carousel-list-placement");
  let item = document.querySelectorAll(".carousel-list-placement");
  let listplacement2;

  const speedplace = 1;

  const widthplace = listplacement.offsetWidth;
  let p = 0;
  let p2 = widthplace;

  function clone() {
    listplacement2 = listplacement.cloneNode(true);
    carouselSliderplacement.appendChild(listplacement2);
    listplacement2.style.left = `${widthplace}px`;
  }

  function moveFirst() {
    p -= speedplace;

    if (widthplace >= Math.abs(p)) {
      listplacement.style.left = `${p}px`;
    } else {
      p = widthplace;
    }
  }

  function moveSecond() {
    p2 -= speedplace;

    if (listplacement2.offsetWidth >= Math.abs(p2)) {
      listplacement2.style.left = `${p2}px`;
    } else {
      p2 = widthplace;
    }
  }

  function hover() {
    clearInterval(m);
    clearInterval(n);
  }

  function unhover() {
    m = setInterval(moveFirst, 10);
    n = setInterval(moveSecond, 10);
  }

  clone();

  let m = setInterval(moveFirst, 10);
  let n = setInterval(moveSecond, 10);

  carouselSliderplacement.addEventListener("mouseenter", hover);
  carouselSliderplacement.addEventListener("mouseleave", unhover);
}

function SubmitForm()
{
  alert("form Submitted, Will connect you soon!!");
}