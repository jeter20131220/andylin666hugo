var obj = document.getElementById("TableofContentScroll");
var tfcttitle = document.getElementById("TableofContentTitle");

var clientHeight = document.getElementById('TableofContentScroll').clientHeight;
// console.log(clientHeight);

if (clientHeight > 650) {
  obj.style.cssText = "overflow-y:scroll;height: 600px;"
  tfcttitle.innerText = '目錄(可滾動)'
}

// Get the button:
let mybutton = document.getElementById("goTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  // console.log(document.documentElement.scrollTop)
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// obj.style.backgroundColor = "lightgray";

// window.addEventListener('DOMContentLoaded', () => {

// 	const observer = new IntersectionObserver(entries => {
// 		entries.forEach(entry => {
// 			const id = entry.target.getAttribute('id');
//       console.log(id)
//       // console.log(id);
//       // console.log(document.querySelector(`#TableofContentScroll nav li a[href="#${id}"]`));
//       // console.log(entry.intersectionRatio)
// 			if (entry.intersectionRatio > 0) {
// 				document.querySelector(`#TableofContentScroll nav li a[href="#${id}"]`).parentElement.classList.add('active');
// 			} else {
// 				document.querySelector(`#TableofContentScroll nav li a[href="#${id}"]`).parentElement.classList.remove('active');
// 			}
// 		});
// 	});


// 	// Track all sections that have an `id` applied
// 	document.querySelectorAll('h2[id],h3[id]').forEach((section) => {
// 		observer.observe(section);
// 	});

// });










// const topPos = anchors.offsetTop
const anchors = document.querySelectorAll('h2[id],h3[id]');

window.addEventListener('scroll', function () {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  // console.log(scrollTop)

  for (var i = 0; i < anchors.length; i++) {
    var id = anchors[i].getAttribute('id');
    // console.log(id);
    document.querySelector(`#TableofContentScroll nav li a[href="#${id}"]`).parentElement.classList.remove('active');

  }

  for (var i = anchors.length - 1; i >= 0; i--) {

    var id = anchors[i].getAttribute('id');
    h2offsettop = anchors[i].offsetTop

    if (scrollTop > h2offsettop - 75) {
      // console.log(2)
      document.querySelector(`#TableofContentScroll nav li a[href="#${id}"]`).parentElement.classList.add('active');
      break;
    }
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 找到按鈕對應的代碼塊
      const codeBlock = button.nextElementSibling.querySelector('code');
      if (codeBlock) {
        const text = codeBlock.innerText;

        // 使用 Clipboard API 複製文字
        navigator.clipboard.writeText(text).then(() => {
          button.textContent = 'Copied!'; // 按鈕文字變更為 "Copied!"
          setTimeout(() => (button.textContent = 'Copy'), 2000); // 2 秒後恢復
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      }
    });
  });
});
