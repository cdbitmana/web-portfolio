/* 텍스트 하나씩 나타나는 애니메이션 (GSAP)
var t1 = gsap.timeline({
  repeat:-1,
  repeatDelay:1
});

t1.from('.box-1 > .text', {
  opacity: 0,
  x: 100,
  duration: 0.1,
  stagger:0.1
});
텍스트 하나씩 나타나는 애니메이션 (GSAP) */

/* 글자 타이핑되는 애니메이션 (배열에 있는 텍스트가 순서대로 타이핑되고 지워짐) */
let i = 0,
  j = 0;

const textArray = ["DEVELOPER", "WEB", "APPLICATION"],
  Typingspeed = 100, // 이 수치를 변경하면 타이핑되는 속도가 변경됨
  deleteSpeed = 50, // 이 수치를 변경하면 지워지는 속도가 변경됨
  repeatSpped = 3000, // 이 수치를 변경하면 타이핑 완료되고 다시 지워기지기까지의 시간이 변경됨
  target = document.getElementById("typing");

function txtnum() {
  j == textArray.length - 1 ?
    j = 0 :
    j++
}

function type() {
  i < textArray[j].length ?
    (target.innerHTML += textArray[j].charAt(i), i++, setTimeout(type, Typingspeed)) :
    setTimeout(remove, repeatSpped)
}

function remove() {
  0 <= i ?
    (target.innerHTML = target.innerHTML.slice(0, i), i--, setTimeout(remove, deleteSpeed)) :
    setTimeout((type(), txtnum()), repeatSpped)
}

type();
/* 글자 타이핑되는 애니메이션 (배열에 있는 텍스트가 순서대로 타이핑되고 지워짐) */

/* GSAP ScrollTrigger (스크롤로 특정 태그 위치로 이동 시 요소 나타나게 하기) 
gsap.registerPlugin(ScrollTrigger);

gsap.from('.section-2 > div > .box-1', {
  scrollTrigger: {
    trigger: ".section-2",
    // markers: true,
    start: "top 100%-=200",
    end: "bottom 100%-=300",
    scrub: true
  },
  x: -500,
  opacity: 0
});

gsap.from('.section-2 > div > .box-2', {
  scrollTrigger: {
    trigger: ".section-2",
    // markers: true,
    start: "top 100%-=200",
    end: "bottom 100%-=300",
    scrub: true
  },
  x: 500,
  opacity: 0
});
/* GSAP ScrollTrigger (스크롤로 특정 태그 위치로 이동 시 요소 나타나게 하기) */

/* ColorPallete 열고 닫기 */
var ColorPalleteIsOpened = false;
document.getElementById('btn-side-menu').addEventListener('click', function () {
  if (ColorPalleteIsOpened == false) {
    document.getElementById('side-menu').style.transform = 'translate(0,-50%)';
    document.getElementById('btn-side-menu').style.transform = 'translate(-260px,-50%)';
    ColorPalleteIsOpened = true;
    return;
  }
  if (ColorPalleteIsOpened == true) {
    document.getElementById('side-menu').style.transform = 'translate(260px,-50%)';
    document.getElementById('btn-side-menu').style.transform = 'translate(0,-50%)';
    ColorPalleteIsOpened = false;
    return;
  }
})

window.addEventListener('click', function ($event) {
  if ($event.target.parentNode.className.includes('click-check',0) == false && $event.target.className.includes('click-check',0) == false && $event.target.id != 'btn-side-menu' ) {
    if (ColorPalleteIsOpened == true) {
      document.getElementById('btn-side-menu').style.transform = 'translate(0,-50%)';
      document.getElementById('side-menu').style.transform = 'translate(260px,-50%)';
      ColorPalleteIsOpened = false;
      return;
    }
  }
})
/* ColorPallete 열고 닫기 */

/* Theme Color 일괄적으로 변경하기 */
document.getElementById('btn-bg-red').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#ff3d4f'); // CSS의 변수값 설정
})

document.getElementById('btn-bg-orange').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#f7971c'); // CSS의 변수값 설정
})

document.getElementById('btn-bg-brown').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#c79864'); // CSS의 변수값 설정
})

document.getElementById('btn-bg-green').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#6b9839'); // CSS의 변수값 설정
})

document.getElementById('btn-bg-blue').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#4d74e6'); // CSS의 변수값 설정
})

document.getElementById('btn-bg-purple').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#8a2be2'); // CSS의 변수값 설정
})

document.getElementById('btn-bg-yellow').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#f1df44'); // CSS의 변수값 설정
})

document.getElementById('btn-bg-rose').addEventListener('click', function () {
  document.documentElement.style.setProperty('--bg-theme', '#e350b8'); // CSS의 변수값 설정
})
/* Theme Color 일괄적으로 변경하기 */

/* ScrollTop Button */
gsap.from('#scrollTop', {
  scrollTrigger: {
    trigger: "#scrollTopPoint",
    // markers: true, 
    start: "top 100%",
    end: "bottom 100%",
    scrub: true
  },
  y: 100,
  opacity: 0
})
/* ScrollTop Button */