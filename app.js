'use strict';

/* 3 Button Click Effect applied 
    to examples-button class 
*/
window.addEventListener('load', function() {
    var btn = document.querySelectorAll('.examples-button .btn');
    var content = document.querySelectorAll('.tab-content'); // all elements with class name tab-content

    /*
     forEach function to call more than one element
     classList.remove - remove class to the element in the HTML
     classList.add - add class
    */
   
    btn.forEach(function(elem) {
      
      elem.addEventListener('click', function(e) { // click event
        
        e.preventDefault();
        var btnValue = this.getAttribute('href'); // tab button href attribute value;
        
        btn.forEach(function(item) { 
          item.classList.remove('active'); 
        })
        
        this.classList.add('active');
        
        content.forEach(function(itm) {
          
          var contentID = itm.getAttribute('id');
          
          if(btnValue === '#' + contentID) { // to check the btnValue is equal to any of the ContentID
            
            content.forEach(function(cont) {
              cont.classList.add('active-content');
              cont.style.display = 'none'; // first, add style to attribute with a value display none (meaning, do not display all contents of contentID)
            })
            
            document.querySelector(btnValue).style.display = 'block'; // then only display the content that has the same btnValue
          }
        })
      })
      })

})

/* Modal Effect on Image 
  - Code taken from https://www.w3schools.com/howto/howto_css_modal_images.asp 
  - Note from Clariza: Edited and tweaked to apply effect to many images on the site
*/
window.addEventListener('load', function() {
  // Modal Setup
  var modal = document.getElementById('modal');

  var modalClose = document.getElementById('modal-close');
  modalClose.addEventListener('click', function() { 
    modal.style.display = "none";
  });

  // global handler
  document.addEventListener('click', function (e) { 
    if (e.target.className.indexOf('modal-target') !== -1) {
        var img = e.target;
        var modalImg = document.getElementById("modal-content");
        var captionText = document.getElementById("modal-caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
  });
})

/* 3 Button Click Effect applied  
       on Skills Content 
*/
window.addEventListener('load', function() {
  var btn_skills = document.querySelectorAll('.skills-button .btn');
  var content_skills = document.querySelectorAll('.skills-content'); // all elements with class name skills-content

  /*
   forEach function to call more than one element
   classList.remove - remove class to the element in the HTML
   classList.add - add class
  */
 
   btn_skills.forEach(function(elem) {
    
    elem.addEventListener('click', function(e) { // click event
      
      e.preventDefault();
      var btnValue = this.getAttribute('href'); // tab button href attribute value;
      
      btn_skills.forEach(function(item) { 
        item.classList.remove('active'); 
      })
      
      this.classList.add('active');
      
      content_skills.forEach(function(itm) {
        
        var contentID = itm.getAttribute('id');
        
        if(btnValue === '#' + contentID) { // to check the btnValue is equal to any of the ContentID
          
          content_skills.forEach(function(cont_skills) {
            cont_skills.classList.add('active-content');
            cont_skills.style.display = 'none'; // first, add style to attribute with a value display none (meaning, do not display all contents of contentID)
          })
          
          document.querySelector(btnValue).style.display = 'block'; // then only display the content that has the same btnValue
        }
      })
    })
    })
})

/*  WEATHER APP Taken From
    - url: https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893
    - Note from Clariza: only edited the API Key and HTML + CSS behind the api
*/
window.addEventListener('load', function() {
  /*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. Perth)*/
  const form = document.querySelector(".top-banner form");
  const input = document.querySelector(".top-banner input");
  const msg = document.querySelector(".top-banner .msg");
  const list = document.querySelector(".ajax-section .cities");
    
  const apiKey = "8ecf951f2cc2c67ef0a5d5820b89809a";

  form.addEventListener("submit", e => {
    e.preventDefault();
    const listItems = list.querySelectorAll(".ajax-section .city");
    const inputVal = input.value;

    //ajax here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://openweathermap.org/img/wn/${
          weather[0]["icon"]
        }@2x.png`;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
          `;
        li.innerHTML = markup;
        list.appendChild(li);
      })
      .catch(() => {
         msg.textContent = "Input not correct. Please search for a valid city.";
      });

    msg.textContent = "";
    form.reset();
    input.focus();
  });

})