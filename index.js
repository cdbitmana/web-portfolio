gsap.registerPlugin(ScrollTrigger);

/* 텍스트 하나씩 나타나는 애니메이션 (GSAP) section-1 nametext */
gsap.from('#section-2 .container .txt-main div span span', {
  scrollTrigger: {
    trigger: "#section-2",
    //markers: true,
    start: "top 100%-=300",
    end: "bottom+=150 0%",
    //scrub: true
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  duration: 1,
  stagger: 0.3
});
/* 텍스트 하나씩 나타나는 애니메이션 (GSAP) section-1 nametext */

/* 헤더 배경색 */
gsap.to('#header', {
  scrollTrigger: {
    trigger: '#section-1 .txt-group',
    //markers: true,
    start: "top 25%",
    end: "bottom+=150 0%",
    scrub: true
  },
  backgroundColor: '#1d1e20'
});
/* 헤더 배경색 */

/* 헤더 오버레이 효과 */

var section1height = document.getElementById('section-1').getBoundingClientRect().height -78;
var section2height = section1height + document.getElementById('section-2').getBoundingClientRect().height -78;
var section3height = section2height + document.getElementById('section-3').getBoundingClientRect().height -78;
var section4height = section3height + document.getElementById('section-4').getBoundingClientRect().height -78;
var section5height = section4height + document.getElementById('section-5').getBoundingClientRect().height -78;

if (document.body.offsetWidth <= 960) {
  section1height = document.getElementById('section-1').getBoundingClientRect().height - 135;
  section2height = section1height + document.getElementById('section-2').getBoundingClientRect().height -135;
  section3height = section2height + document.getElementById('section-3').getBoundingClientRect().height -135;
  section4height = section3height + document.getElementById('section-4').getBoundingClientRect().height -135;
  section5height = section4height + document.getElementById('section-5').getBoundingClientRect().height -135;
}

window.addEventListener('resize', function () {
  if (document.body.offsetWidth <= 960) {
    section1height = document.getElementById('section-1').getBoundingClientRect().height - 135;
    section2height = section1height + document.getElementById('section-2').getBoundingClientRect().height -135;
    section3height = section2height + document.getElementById('section-3').getBoundingClientRect().height -135;
    section4height = section3height + document.getElementById('section-4').getBoundingClientRect().height -135;
    section5height = section4height + document.getElementById('section-5').getBoundingClientRect().height -135;
    setOverlay;
  }

  if (document.body.offsetWidth > 960) {
    section1height = document.getElementById('section-1').getBoundingClientRect().height -78;
    section2height = section1height + document.getElementById('section-2').getBoundingClientRect().height -78;
    section3height = section2height + document.getElementById('section-3').getBoundingClientRect().height -78;
    section4height = section3height + document.getElementById('section-4').getBoundingClientRect().height -78;
    section5height = section4height + document.getElementById('section-5').getBoundingClientRect().height -78;
    setOverlay;
  }
})

window.addEventListener('scroll', setOverlay);

function setOverlay () {
  var curpoint = document.documentElement.scrollTop;
  
  if( curpoint < section1height ) {
    document.getElementById('menu-overlay-1').classList.add('color-theme','overlay-sel');
    document.getElementById('menu-overlay-2').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-3').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-4').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-5').classList.remove('color-theme','overlay-sel');
  }
  else if( curpoint >= section1height && curpoint <  section2height) {
    document.getElementById('menu-overlay-1').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-2').classList.add('color-theme','overlay-sel');
    document.getElementById('menu-overlay-3').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-4').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-5').classList.remove('color-theme','overlay-sel');
  }
  else if( curpoint >= section2height && curpoint <  section3height) {
    document.getElementById('menu-overlay-1').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-2').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-3').classList.add('color-theme','overlay-sel');
    document.getElementById('menu-overlay-4').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-5').classList.remove('color-theme','overlay-sel');
  }
  else if( curpoint >= section3height && curpoint <  section4height) {
    document.getElementById('menu-overlay-1').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-2').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-3').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-4').classList.add('color-theme','overlay-sel');
    document.getElementById('menu-overlay-5').classList.remove('color-theme','overlay-sel');
  }
  else if( curpoint >= section4height && curpoint <  section5height) {
    document.getElementById('menu-overlay-1').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-2').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-3').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-4').classList.remove('color-theme','overlay-sel');
    document.getElementById('menu-overlay-5').classList.add('color-theme','overlay-sel');
  }
}
/* 헤더 오버레이 효과 */

/* 헤더 Right 네비게이션 */
document.getElementById('menu-overlay-1').addEventListener('click', function () {
  var scrollPoint = document.getElementById('section-1');
  var offSet = 78;

  window.scrollTo({
    top: scrollPoint.offsetTop - offSet
  })
})

document.getElementById('menu-overlay-2').addEventListener('click', function () {
  var scrollPoint = document.getElementById('section-2');
  var offSet = 50;

  window.scrollTo({
    top: scrollPoint.offsetTop - offSet
  })
})

document.getElementById('menu-overlay-3').addEventListener('click', function () {
  var scrollPoint = document.getElementById('section-3');
  var offSet = 78;

  window.scrollTo({
    top: scrollPoint.offsetTop - offSet
  })
})

document.getElementById('menu-overlay-4').addEventListener('click', function () {
  var scrollPoint = document.getElementById('section-4');
  var offSet = 78;

  window.scrollTo({
    top: scrollPoint.offsetTop - offSet
  })
})

document.getElementById('menu-overlay-5').addEventListener('click', function () {
  var scrollPoint = document.getElementById('section-5');
  var offSet = 78;

  window.scrollTo({
    top: scrollPoint.offsetTop - offSet
  })
})
/* 헤더 Right 네비게이션 */

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

/* section-1 btn-mouse */
document.getElementById('btn-mouse').addEventListener('click', function () {
  var scrollPoint = document.getElementById('section-2');
  var offSet = 78;

  window.scrollTo({
    top: scrollPoint.offsetTop - offSet
  })

})
/* section-1 btn-mouse */

/* GSAP ScrollTrigger (스크롤로 특정 태그 위치로 이동 시 요소 나타나게 하기) 


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

/* 메뉴 버튼 */
document.getElementById('btn-menu').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'none'; // 메뉴 버튼 숨기기
  document.getElementById('btn-menu-close').style.display = 'flex'; // 메뉴 닫기 버튼 보이기
})

document.getElementById('btn-menu-close').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'block'; // 메뉴 버튼 보이기
  document.getElementById('btn-menu-close').style.display = 'none'; // 메뉴 닫기 버튼 숨기기
})
/* 메뉴 버튼 */

/* 메뉴 Overlay,Right 전환 */
document.getElementById('btn-menu-right').addEventListener('click', function () {
  var curpoint = document.documentElement.scrollTop;

  document.getElementById('btn-menu').style.display = 'none';
  document.getElementById('btn-menu-close').style.display = 'none';
  document.getElementById('menu-right').style.display = 'flex';

  setOverlay;
  
})

document.getElementById('btn-menu-overlay').addEventListener('click', function () {
  document.getElementById('menu-right').style.display = 'none';
  document.getElementById('btn-menu').style.display = 'block';
})
/* 메뉴 Overlay,Right 전환 */

/* 메뉴 버튼 클릭 효과 */
document.getElementById('btn-menu').addEventListener('click', function () {
  document.getElementById('menu-effect-open').style.zIndex = 55; // 메뉴 여는 이펙트 보이기
  
  // 메뉴 페이지 보이기 (1초 후에)
  setTimeout(function () {
    document.getElementById('menu-page').style.zIndex = 49;
  }, 1000)

  // 메뉴 여는 이펙트 숨기기 (1초 후에)
  setTimeout(function () {
    document.getElementById('menu-effect-open').style.zIndex = -1;
  }, 1000)

  // 메뉴 여는 이펙트 연출 (1초 동안)
  gsap.from('#menu-effect-open', {
    transform: 'scale(0)',
    duration: 1
  })

  // 메뉴 페이지 나타나기 (1초 동안)
  gsap.from('#menu-page', {
    opacity: 0,
    duration: 1,
  })

})

document.getElementById('btn-menu-close').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'block'; // 메뉴 버튼 보이기
  document.getElementById('btn-menu-close').style.display = 'none'; // 메뉴 닫기 버튼 숨기기
  document.getElementById('menu-effect-close').style.zIndex = 55; // 메뉴 닫는 이펙트 보이기
  
  // 메뉴 닫는 이펙트, 메뉴 페이지 숨기기
  setTimeout(function () {
    document.getElementById('menu-effect-open').style.zIndex = -1;
    document.getElementById('menu-effect-close').style.zIndex = -1;
    document.getElementById('menu-page').style.zIndex = -1;
  }, 1000)

  // 메뉴 닫는 이펙트 연출 (1초 동안)
  gsap.from('#menu-effect-close', {
    transform: 'scale(0)',
    duration: 1
  })
})
/* 메뉴 버튼 클릭 효과 */

/* 메뉴 네비게이션 버튼 */
document.getElementById('move-01').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'block'; // 메뉴 버튼 보이기
  document.getElementById('btn-menu-close').style.display = 'none'; // 메뉴 닫기 버튼 숨기기
  document.getElementById('menu-effect-close').style.zIndex = 55; // 메뉴 닫는 이펙트 보이기
  
  // 메뉴 이펙트, 메뉴 페이지 숨기기, 선택 위치로 페이지 스크롤 이동
  setTimeout(function () {
    document.getElementById('menu-effect-open').style.zIndex = -1;
    document.getElementById('menu-effect-close').style.zIndex = -1;
    document.getElementById('menu-page').style.zIndex = -1;
    
    var scrollPoint = document.getElementById('section-1');
    var offSet = 78;

    window.scrollTo({
      top: scrollPoint.offsetTop - offSet
    })

  }, 1000)

  // 메뉴 닫기 이펙트 연출 (1초 동안)
  gsap.from('#menu-effect-close', {
    transform: 'scale(0)',
    duration: 1
  })
})

document.getElementById('move-02').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'block'; // 메뉴 버튼 보이기
  document.getElementById('btn-menu-close').style.display = 'none'; // 메뉴 닫기 버튼 숨기기
  document.getElementById('menu-effect-close').style.zIndex = 55; // 메뉴 닫는 이펙트 보이기
  document.getElementById('top').style.height = 'initial'; // 원래 화면 보이기
  document.getElementById('top').style.overflow = 'visible'; // 원래 화면 보이기
  
  // 메뉴 이펙트, 메뉴 페이지 숨기기, 선택 위치로 페이지 스크롤 이동
  setTimeout(function () {
    document.getElementById('menu-effect-open').style.zIndex = -1;
    document.getElementById('menu-effect-close').style.zIndex = -1;
    document.getElementById('menu-page').style.zIndex = -1;
    
    var scrollPoint = document.getElementById('section-2');
    var offSet = 78;

    window.scrollTo({
      top: scrollPoint.offsetTop - offSet
    })

  }, 1000)

  // 메뉴 닫기 이펙트 연출 (1초 동안)
  gsap.from('#menu-effect-close', {
    transform: 'scale(0)',
    duration: 1
  })
})

document.getElementById('move-03').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'block'; // 메뉴 버튼 보이기
  document.getElementById('btn-menu-close').style.display = 'none'; // 메뉴 닫기 버튼 숨기기
  document.getElementById('menu-effect-close').style.zIndex = 55; // 메뉴 닫는 이펙트 보이기
  document.getElementById('top').style.height = 'initial'; // 원래 화면 보이기
  document.getElementById('top').style.overflow = 'visible'; // 원래 화면 보이기
  
  // 메뉴 이펙트, 메뉴 페이지 숨기기, 선택 위치로 페이지 스크롤 이동
  setTimeout(function () {
    document.getElementById('menu-effect-open').style.zIndex = -1;
    document.getElementById('menu-effect-close').style.zIndex = -1;
    document.getElementById('menu-page').style.zIndex = -1;
    
    var scrollPoint = document.getElementById('section-3');
    var offSet = 78;

    window.scrollTo({
      top: scrollPoint.offsetTop - offSet
    })

  }, 1000)

  // 메뉴 닫기 이펙트 연출 (1초 동안)
  gsap.from('#menu-effect-close', {
    transform: 'scale(0)',
    duration: 1
  })
})

document.getElementById('move-04').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'block'; // 메뉴 버튼 보이기
  document.getElementById('btn-menu-close').style.display = 'none'; // 메뉴 닫기 버튼 숨기기
  document.getElementById('menu-effect-close').style.zIndex = 55; // 메뉴 닫는 이펙트 보이기
  document.getElementById('top').style.height = 'initial'; // 원래 화면 보이기
  document.getElementById('top').style.overflow = 'visible'; // 원래 화면 보이기
  
  // 메뉴 이펙트, 메뉴 페이지 숨기기, 선택 위치로 페이지 스크롤 이동
  setTimeout(function () {
    document.getElementById('menu-effect-open').style.zIndex = -1;
    document.getElementById('menu-effect-close').style.zIndex = -1;
    document.getElementById('menu-page').style.zIndex = -1;
    
    var scrollPoint = document.getElementById('section-4');
    var offSet = 78;

    window.scrollTo({
      top: scrollPoint.offsetTop - offSet
    })

  }, 1000)

  // 메뉴 닫기 이펙트 연출 (1초 동안)
  gsap.from('#menu-effect-close', {
    transform: 'scale(0)',
    duration: 1
  })
})

document.getElementById('move-05').addEventListener('click', function () {
  document.getElementById('btn-menu').style.display = 'block'; // 메뉴 버튼 보이기
  document.getElementById('btn-menu-close').style.display = 'none'; // 메뉴 닫기 버튼 숨기기
  document.getElementById('menu-effect-close').style.zIndex = 55; // 메뉴 닫는 이펙트 보이기
  document.getElementById('top').style.height = 'initial'; // 원래 화면 보이기
  document.getElementById('top').style.overflow = 'visible'; // 원래 화면 보이기
  
  // 메뉴 이펙트, 메뉴 페이지 숨기기, 선택 위치로 페이지 스크롤 이동
  setTimeout(function () {
    document.getElementById('menu-effect-open').style.zIndex = -1;
    document.getElementById('menu-effect-close').style.zIndex = -1;
    document.getElementById('menu-page').style.zIndex = -1;
    
    var scrollPoint = document.getElementById('section-5');
    var offSet = 78;

    window.scrollTo({
      top: scrollPoint.offsetTop - offSet
    })

  }, 1000)

  // 메뉴 닫기 이펙트 연출 (1초 동안)
  gsap.from('#menu-effect-close', {
    transform: 'scale(0)',
    duration: 1
  })
})
/* 메뉴 네비게이션 버튼 */

/* ColorPallete 열고 닫기 */
var ColorPalleteIsOpened = false;
document.getElementById('btn-side-menu').addEventListener('click', function () {
  if (ColorPalleteIsOpened == false) {
    document.getElementById('side-menu').style.transform = 'translate(0,-50%)';
    document.getElementById('btn-side-menu').style.transform = 'translate(-240px,-50%)';
    ColorPalleteIsOpened = true;
    return;
  }
  if (ColorPalleteIsOpened == true) {
    document.getElementById('side-menu').style.transform = 'translate(240px,-50%)';
    document.getElementById('btn-side-menu').style.transform = 'translate(0,-50%)';
    ColorPalleteIsOpened = false;
    return;
  }
})

window.addEventListener('click', function ($event) {
  if (  $event.target.parentNode.className.includes('click-check',0) == false 
  && $event.target.className.includes('click-check',0) == false 
  && $event.target.id != 'btn-side-menu' ) {
    if (ColorPalleteIsOpened == true) {
      document.getElementById('btn-side-menu').style.transform = 'translate(0,-50%)';
      document.getElementById('side-menu').style.transform = 'translate(260px,-50%)';
      ColorPalleteIsOpened = false;
      return;
    }
  }
})

window.addEventListener('click', function ($event) {
  if (  $event.target.tagName == 'svg' ) {
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
gsap.from('#btn-scrollTop', {
  scrollTrigger: {
    trigger: "#section-2",
    //markers: true, 
    start: "top+=100 100%",
    end: "bottom-=350 100%",
    scrub: true
  },
  y: 100,
  opacity: 0
})
/* ScrollTop Button */

/* contact email send */
document.getElementById('btn-submit').addEventListener('click', function () {


  var userName = document.getElementById('username').value;
  var userEmail = document.getElementById('useremail').value;
  var userPhone = document.getElementById('userphone').value;
  var userMsg = document.getElementById('usermsg').value;

  var emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  var phoneCheck = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]{4})([0-9]{4})/;
  if (emailCheck.test(userEmail) == false){
    document.getElementById('emailCheck').style.display = 'block';
    return;
  } else {
    document.getElementById('emailCheck').style.display = 'none';
  }

  if (phoneCheck.test(userPhone) == false){
    document.getElementById('phoneCheck').style.display = 'block';
    return;
  } else {
    document.getElementById('phoneCheck').style.display = 'none';
  }

  if (userMsg.length <= 0){
    document.getElementById('msgCheck').style.display = 'block';
    return;
  } else {
    document.getElementById('msgCheck').style.display = 'none';
  }
  
  var templateParams = { 
   name: userName,
   email: userEmail,
   phone: userPhone,
   message: userMsg
   };

  document.getElementById('msg-sent').style.display = 'flex';

  emailjs.send('portfolio', 'template_tw9djs9', templateParams) 
  .then(
    function(response) { 
      document.getElementById('loading').style.display = 'none';
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('msg-sent').innerText = '메시지 전송!';
      document.getElementById('msg-sent').style.display = 'block';
      document.getElementById('msg-sent').style.backgroundColor = 'rgb(55, 152, 59)';
    }, 
    function(error) { 
      document.getElementById('loading').style.display = 'none';
      console.log('FAILED...', error);
      document.getElementById('msg-sent').innerText = '전송 실패!';
      document.getElementById('msg-sent').style.display = 'block';
      document.getElementById('msg-sent').style.backgroundColor = 'var(--bg-red)';
    });
})
/* contact email send */

/* copyright 올해연도 구하기 */
var now = new Date();
var year = now.getFullYear();
document.getElementById('cr-year').innerText = year;
/* copyright 올해연도 구하기 */

/* kakao map api */
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(36.296223, 127.342619), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
  disableDoubleClick : true,
  disableDoubleClickZoom : true
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

map.setZoomable(false);  
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(36.296223, 127.342619); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
  setCenter();
});

window.addEventListener('resize', function () {
  var center = new kakao.maps.LatLng(36.296223, 127.342619); //지도의 중심좌표.
  map.setCenter(center);
})

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
  map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
  map.setLevel(map.getLevel() + 1);
}

function setCenter() {            
  // 이동할 위도 경도 위치를 생성합니다 
  var moveLatLon = new kakao.maps.LatLng(36.296223, 127.342619);
  
  // 지도 중심을 이동 시킵니다
  map.panTo(moveLatLon);
}
/* kakao map api */

/* popup */
document.querySelectorAll('a.btn-popup-open').forEach(
  function (e) {
    e.addEventListener('click', function () {
      document.querySelector('body').style.overflow = 'hidden';
      document.getElementById('popup-'+e.id.split("-")[2]).style.display = 'block';
    })
  }
)

document.querySelectorAll('div.btn-popup-close').forEach(
  function (e) {
    e.addEventListener('click', function () {
      document.querySelector('body').style.overflow = 'hidden scroll';
      document.getElementById('popup-'+e.id.split("-")[3]).style.display = 'none';
    })
  }
)
/* popup */