// fetch('./data/list.json')

// .then(response => response.json())
// .then(data => {
//   const container = document.querySelector('.main-content__right');

//   data.forEach(item => {

//     const inflis = document.createElement('div');
//     inflis.classList.add('inflis');

//     const titleElement = document.createElement('h2');
//     titleElement.classList.add('inflis__title');
//     titleElement.textContent = item.title;

//     const paragraphElement = document.createElement('div');
//     paragraphElement.classList.add('inflis__paragraph');
//     paragraphElement.textContent = item.paragraph;

//     const subElement = document.createElement('div');
//     subElement.classList.add('inflis__sub');

//     const buttonElement = document.createElement('button');
//     buttonElement.textContent = item.buttonText;

//     subElement.appendChild(buttonElement);
//     inflis.appendChild(titleElement);
//     inflis.appendChild(paragraphElement);
//     inflis.appendChild(subElement);
//     container.appendChild(inflis);
//   });
// })
// .catch(error => console.error('Error fetching JSON:', error));
