//히든메뉴 나오게 하기
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.add('open');
});
document.querySelector('.menu .close').addEventListener('click', function() {
  document.querySelector('.menu').classList.remove('open');
});




// 글자에 임팩트 넣기

function tmp2(el) {
    let item = document.getElementsByClassName('nav_menu ');
    for(let i=0; i<item.length; i++) {
        item[i].classList.remove('select')    
    }       
    el.classList.add('select')
}

// 탭메뉴 

const navMenu = document.querySelectorAll(".nav_menu");
const tabContent = document.querySelectorAll(".tab__content");

// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
navMenu.forEach((item, index) => {
  // 3. 탭 버튼에 클릭 이벤트를 준다.
item.addEventListener("click", (e) => {
    // 4. 버튼을 a 태그에 만들었기 때문에, 
    // 태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가한다.
    e.preventDefault(); // a 
    
    // 5. 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
    tabContent.forEach((content) => {
      // 6. 탭 내용 부분들 전부 active 클래스를 제거한다.
    content.classList.remove("active");
    });

    // 7. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    navMenu.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
    content.classList.remove("active");
    });

    // 9. 탭 버튼과 탭 내용 영역의 index에 해당하는 부분에 active 클래스를 추가한다.
    // ex) 만약 첫번째 탭(index 0)을 클릭했다면, 같은 인덱스에 있는 첫번째 탭 내용 영역에
    // active 클래스가 추가된다.
    navMenu[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});
//월요일에 가서 여쭤보기 - for구문으로 대체 가능한 것인가?

//회전 스크립트

let sec = document.getElementsByClassName('swiper-wrapper')[0];

for(let i=0; i<10; i++) {
  sec.innerHTML += `
        <div class="swiper-slide">
        <a href="01.article_page.html?itemNo=${NOVEL_LIST[i].item_no}">
          <img src="../port/pyoji/${NOVEL_LIST[i].src}" alt="${NOVEL_LIST[i].src}">
          <div class="slide_text">
            <div class="slide_supyung">${NOVEL_LIST[i].supyung}</div>
            <span class="slide_title">${NOVEL_LIST[i].title}/${NOVEL_LIST[i].artist}</span>
          </div>
        </a>
        </div>
  `;
}

// 판타지만 뽑아보기

let Fantasy_List = NOVEL_LIST.filter((Fantasy) => {
  return Fantasy.tag === "판타지";
})

console.log(Fantasy_List)

let sec1 = document.getElementsByClassName('swiper-wrapper')[1];

for(let i=0; i<Fantasy_List.length; i++) {
  sec1.innerHTML += `
        <div class="swiper-slide">
        <a href="01.article_page.html?itemNo=${Fantasy_List[i].item_no}">
          <img src="../port/pyoji/${Fantasy_List[i].src}" alt="${Fantasy_List[i].src}">
          <div class="slide_text">
            <div class="slide_supyung">${Fantasy_List[i].supyung}</div>
            <span class="slide_title">${Fantasy_List[i].title}/${Fantasy_List[i].artist}</span>
          </div>
        </a>
        </div>
  `;
}

// 로맨스 뽑아라

let Romance_List = NOVEL_LIST.filter((Romance) => {
  return Romance.tag === "로맨스";
})

console.log(Romance_List)

let sec2 = document.getElementsByClassName('swiper-wrapper')[2];

for(let i=0; i<Romance_List.length; i++) {
  sec2.innerHTML += `
        <div class="swiper-slide">
        <a href="01.article_page.html?itemNo=${Romance_List[i].item_no}">
          <img src="../port/pyoji/${Romance_List[i].src}" alt="${Romance_List[i].src}">
          <div class="slide_text">
            <div class="slide_supyung">${Romance_List[i].supyung}</div>
            <span class="slide_title">${Romance_List[i].title}/${Romance_List[i].artist}</span>
          </div>
        </a>
        </div>
  `;
}

// 대체역사 뽑아라

let AlterHistory_List = NOVEL_LIST.filter((AlterHistory) => {
  return AlterHistory.tag === "대체역사";
})

console.log(AlterHistory_List)

let sec3 = document.getElementsByClassName('swiper-wrapper')[3];

for(let i=0; i<AlterHistory_List.length; i++) {
  sec3.innerHTML += `
        <div class="swiper-slide">
        <a href="01.article_page.html?itemNo=${AlterHistory_List[i].item_no}">
          <img src="../port/pyoji/${AlterHistory_List[i].src}" alt="${AlterHistory_List[i].src}">
          <div class="slide_text">
            <div class="slide_supyung">${AlterHistory_List[i].supyung}</div>
            <span class="slide_title">${AlterHistory_List[i].title}/${AlterHistory_List[i].artist}</span>
          </div>
        </a>
        </div>
  `;
}

// 일상만 뽑기

let Life_List = NOVEL_LIST.filter((Life) => {
  return Life.tag === "일상";
})

console.log(Life_List)

let sec4 = document.getElementsByClassName('swiper-wrapper')[4];

for(let i=0; i<Life_List.length; i++) {
  sec4.innerHTML += `
        <div class="swiper-slide">
        <a href="01.article_page.html?itemNo=${Life_List[i].item_no}">
          <img src="../port/pyoji/${Life_List[i].src}" alt="${Life_List[i].src}">
          <div class="slide_text">
            <div class="slide_supyung">${Life_List[i].supyung}</div>
            <span class="slide_title">${Life_List[i].title}/${Life_List[i].artist}</span>
          </div>
        </a>
        </div>
  `;
}

// 스와이프

var swiper1 = new Swiper(".swiper1", {
    // direction: 'vertical', // 'horizontal' | 'vertical'
    effect: 'slide', // 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative' or 'cards'
  slidesPerView: 3, // 한번에 몇개 판 보여줄지 결정. 1 이상의 정수
  slidesPerGroup: 1,// 한번에 몇개 판씩 넘길지 결정. 1 이상의 정수
  spaceBetween: 10, // 판 사이사이의 걸리
  loop: true, 

//   pagination: { 
//     el: ".swiper-pagination",
//     type: "bullets", // 'bullets', 'fraction', 'progressbar' or 'custom'
//     clickable: true, // 인디케이터/페이징 부분에 클릭 이벤트 달지 말지 결정
//   },
  navigation: {
        nextEl: ".next",
        prevEl: ".prev",
  },

  autoplay: {
    delay: 2000 // 자동슬라이드 되서 가운데에 몇초동안 있을건지
  },
  speed: 1000 // 배너가 바깥에서 가운데로 출발해서 도착할때까지의 시간
});


  // for(let i = 0; i<5;i++) {
  //   document.getElementsByClassName('mySwiper')[i].addEventListener('mouseenter', function(){
  //     swiper1.autoplay.stop()
  // })
  // document.getElementsByClassName('mySwiper')[i].addEventListener('mouseleave', function(){
  //     swiper1.autoplay.start()	
  // })
  // }

// 작품 리스트 돌리기 

let sec5 = document.getElementsByClassName('swiper-wrapper')[5];

for(let i=0; i<3; i++) {
  sec5.innerHTML += `
    <div class="swiper-slide">
    <a href="01.article_page.html?itemNo=${NOVEL_LIST[i].item_no}">
        <div class="cover">
            <img src="../port/pyoji/${NOVEL_LIST[i].src}" alt="${NOVEL_LIST[i].src}">
        </div>
        <div class="slide_text2">
            <div class="tag">${NOVEL_LIST[i].tag}</div>
            <span class="slide_title2">${NOVEL_LIST[i].title}</span>
            <div class="artist2">${NOVEL_LIST[i].artist}</div>
            <div class="count2">
                <img src="../port/count.png" alt="count">
                <div class="count">${NOVEL_LIST[i].bookCount}</div>
            </div>
        </div>
    </a>
    </div>
  `;
}

// 작품리스트 스와이프

var swiper2 = new Swiper(".swiper2", {
  // direction: 'vertical', // 'horizontal' | 'vertical'
effect: 'slide', // 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative' or 'cards'
slidesPerView: 7, // 한번에 몇개 판 보여줄지 결정. 1 이상의 정수
slidesPerGroup: 1,// 한번에 몇개 판씩 넘길지 결정. 1 이상의 정수
spaceBetween: 10, // 판 사이사이의 걸리
loop: false, 

//   pagination: { 
//     el: ".swiper-pagination",
//     type: "bullets", // 'bullets', 'fraction', 'progressbar' or 'custom'
//     clickable: true, // 인디케이터/페이징 부분에 클릭 이벤트 달지 말지 결정
//   },
// navigation: {
//       nextEl: ".next",
//       prevEl: ".prev",
// }
});

