document.querySelectorAll('.nav-button').forEach(function(button) {
    button.addEventListener('click', function() {
      let targetCard = parseInt(this.getAttribute('data-target')); 
      let card = document.querySelector('.card:nth-child(' + targetCard + ')');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  window.addEventListener('load', function() {
    let navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(function(button) {
      let buttonDiv = document.getElementById(button.getAttribute('data-target')); // 버튼을 감싸는 div를 찾습니다.
      if(button.getAttribute('data-target') == "1"){
        button.style.fontSize = '14.5px';
        button.style.color = '#4461FF';
        button.style.fontWeight = '900';
        buttonDiv.style.borderBottom = '3px solid #4461FF';
      } else {
        button.style.fontSize = '13px';  // 다른 버튼의 스타일을 원래대로 되돌립니다.
        button.style.color = '#898989';  // 다른 버튼의 스타일을 원래대로 되돌립니다.
        buttonDiv.style.borderBottom = 'none';  // div의 border-bottom 스타일을 원래대로 되돌립니다.
      }
    });
  });
  
  
  let scrollTimeout; 
  
  document.getElementById('card-container').addEventListener('scroll', function() {
    clearTimeout(scrollTimeout); 
    
    scrollTimeout = setTimeout(function() {
      let cards = document.querySelectorAll('.card');
      let currentCardIndex = 1;
  
      cards.forEach(function(card, index) {
        let rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentCardIndex = index + 1;
        }
      });
  
      console.log('현재 보고 있는 카드의 번호는 ' + currentCardIndex + '번 입니다.');
  
      let navButtons = document.querySelectorAll('.nav-button');
      navButtons.forEach(function(button, index) {
        let buttonDiv = document.getElementById(button.getAttribute('data-target')); // 버튼을 감싸는 div를 찾습니다.
        //   카드 인덱스에 따라 버튼 스타일을 변경합니다.
        if (currentCardIndex === 1 && index === 0) {
          button.style.fontSize = '14.5px';
          button.style.color = '#4461FF';
          buttonDiv.style.borderBottom = '3px solid #4461FF'; // div의 border-bottom 스타일을 바꿉니다.
        } else if ((currentCardIndex === 2 || currentCardIndex === 3 || currentCardIndex === 4) && index === 1) {
          button.style.fontSize = '14.5px';
          button.style.color = '#4461FF';
          buttonDiv.style.borderBottom = '3px solid #4461FF'; // div의 border-bottom 스타일을 바꿉니다.
        } else if ((currentCardIndex === 5 || currentCardIndex === 6 || currentCardIndex === 7) && index === 2) {
          button.style.fontSize = '14.5px';
          button.style.color = '#4461FF';
          buttonDiv.style.borderBottom = '3px solid #4461FF'; // div의 border-bottom 스타일을 바꿉니다.
        } else if (currentCardIndex === 8 && index === 3) {
          button.style.fontSize = '14.5px';
          button.style.color = '#4461FF';
          buttonDiv.style.borderBottom = '3px solid #4461FF'; // div의 border-bottom 스타일을 바꿉니다.
        } else {
          button.style.fontSize = '13px';  // 다른 버튼의 스타일을 원래대로 되돌립니다.
          button.style.color = '#898989';  // 다른 버튼의 스타일을 원래대로 되돌립니다.
          buttonDiv.style.borderBottom = 'none';  // div의 border-bottom 스타일을 원래대로 되돌립니다.
        }
      });
  
    }, 50);
  });
  