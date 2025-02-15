document.addEventListener('DOMContentLoaded', function () {
  let bts = document.querySelectorAll('.nav a');
  for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', function () {
      let currentActiveElement = document.querySelector('.nav .active');
      if (currentActiveElement) {
        currentActiveElement.classList.remove('active');
      }
      this.classList.add('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let bts = document.querySelectorAll('.block1 .hd ul li a');
  for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', function () {
      let currentActiveElement = document.querySelector('.block1 .hd ul li .active');
      if (currentActiveElement) {
        currentActiveElement.classList.remove('active');
      }
      this.classList.add('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let bts = document.querySelectorAll('.block2 .hd ul li a');
  for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', function () {
      let currentActiveElement = document.querySelector('.block2 .hd ul li .active');
      if (currentActiveElement) {
        currentActiveElement.classList.remove('active');
      }
      this.classList.add('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let bts = document.querySelectorAll('.block3 .hd ul li a');
  for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', function () {
      let currentActiveElement = document.querySelector('.block3 .hd ul li .active');
      if (currentActiveElement) {
        currentActiveElement.classList.remove('active');
      }
      this.classList.add('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let bts = document.querySelectorAll('.block4 .hd ul li a');
  for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', function () {
      let currentActiveElement = document.querySelector('.block4 .hd ul li .active');
      if (currentActiveElement) {
        currentActiveElement.classList.remove('active');
      }
      this.classList.add('active');
    });
  }
});