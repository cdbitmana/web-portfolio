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

/* ColorPallete */
var ColorPalleteIsOpened = false;
document.getElementById('btn-color').addEventListener('click', function () {
  if( ColorPalleteIsOpened == false ){
    document.getElementById('color-pallete').style.transform = 'translateX(0)';
    document.getElementById('btn-color').style.transform = 'translateX(-50px)';
    ColorPalleteIsOpened = true;
    return;
  }
  if( ColorPalleteIsOpened == true ){
    document.getElementById('color-pallete').style.transform = 'translateX(50px)';
    document.getElementById('btn-color').style.transform = 'translateX(0)';
    ColorPalleteIsOpened = false;
    return;
  }
})

window.addEventListener('click', function ($event) {
  if($event.target.id != 'btn-color' && $event.target.id != 'btn-color-icon'){
    if( ColorPalleteIsOpened == true ){
      document.getElementById('color-pallete').style.transform = 'translateX(50px)';
      document.getElementById('btn-color').style.transform = 'translateX(0)';
      ColorPalleteIsOpened = false;
      return;
    }
  }
})
/* ColorPallete */

/* 글자 타이핑되는 애니메이션 (배열에 있는 텍스트가 순서대로 타이핑되고 지워짐) 
let i = 0,
  j = 0;

const textArray = ["HTML", "CSS", "Javascript"],
  Typingspeed = 100, // 이 수치를 변경하면 타이핑되는 속도가 변경됨
  deleteSpeed = 50, // 이 수치를 변경하면 지워지는 속도가 변경됨
  repeatSpped = 3000, // 이 수치를 변경하면 타이핑 완료되고 다시 지워기지기까지의 시간이 변경됨
  target = document.getElementById("type");

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

/* Theme Color 일괄적으로 변경하기 */
document.getElementById('colorbox-yellow').addEventListener('click', function () {
  var classList1 = document.getElementsByClassName('bg-theme');
  for (var i = 0; i < classList1.length; i++) {
    var classElement1 = classList1.item(i);
    classElement1.style.backgroundColor = 'var(--bg-yellow)'
  }
})

document.getElementById('colorbox-orange').addEventListener('click', function () {
  var classList1 = document.getElementsByClassName('bg-theme');
  for (var i = 0; i < classList1.length; i++) {
    var classElement1 = classList1.item(i);
    classElement1.style.backgroundColor = 'var(--bg-orange)'
  }
})
/* Theme Color 일괄적으로 변경하기 */

/* ScrollTop Button 
gsap.from( '#scrollTop' , {
  scrollTrigger: {
    trigger: ".section-2",
    markers: true,
    start: "top 100%-=100",
    end: "bottom 100%-=200",
    scrub: true
  },
  y: 100,
  opacity: 0
})
/* ScrollTop Button */