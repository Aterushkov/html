let block = document.querySelectorAll('.ablock');
let button = document.querySelector('#button');



button.addEventListener('click', function(){   
    block.forEach(element => {

      switch(element.getAttribute('data-value')){
        case '1':
          element.classList.add('animate');
          console.log(element);
          break;
        case '2':
          element.classList.add('animate1');
          break;
        case '3':
          element.classList.add('animate2');
          break;
        case '4':
          element.classList.add('animate3');
          break;
        case '5':
          element.classList.add('animate4');
          break;
        case '6':
          element.classList.add('animate5');
          break;
        case '7':
          element.classList.add('animate6');
          break;
      }
  });
  // block.classList.add('animate');
  // overlay.style.display = 'none';
  // more.classList.remove('more-splash');
  // document.body.style.overflow = '';
});