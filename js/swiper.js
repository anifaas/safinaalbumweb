let slideIndex = 0;

function showSlides() {
   
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + slideIndex + "00%)";
    }
    const mainContent = document.querySelector(".main-content__right"); 
    console.log(slideIndex)
    const data = [
        {
            "id": 0,
            "title": "The Weekend",
            "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "buttonText": "Get it",
            "price": "$12.99",
            "imageSrc": "img/pl_1.png"
        },
        {
            "id": 1,
            "title": "Twenty One Pilots",
            "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "buttonText": "Get it",
            "price": "$32.99",
            "imageSrc": "img/pl_2.jpg"
        },
        {
            "id": 2,
            "title": "Skillet",
            "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "buttonText": "Get it",
            "price": "$12.99",
            "imageSrc": "img/pl_1.png"
        }
    ];

  const currentData = data[slideIndex];
  
  mainContent.innerHTML = `
    
      <div class="inflis">
        <h2 class="inflis__title">${currentData.title}</h2>
        <div class="inflis__paragraph">${currentData.paragraph}</div>
        <div class="inflis__sub">
          <button>${currentData.buttonText}</button>
          <span>${currentData.price}</span>
        </div>
      </div>

  `;
}


  document.querySelector(".prevButton").addEventListener("click", function() {
    if (slideIndex > 0) {
      slideIndex--;
      showSlides();  
    }
  });

  document.querySelector(".nextButton").addEventListener("click", function() {
    if (slideIndex < 2) {
      slideIndex++;
      showSlides(); 
    }
  });

showSlides();