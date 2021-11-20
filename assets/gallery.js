const pictureInnerContainer = document.querySelector('.picture-inner-container');

const img = document.createElement('img');
img.classList.add('gallery-img')
img.src = `assets/img/galery1.jpg`;
img.alt = `galery1`;
pictureInnerContainer.append(img);


// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = ['/assets/img/galery1.jpg', 'assets/img/galery2.jpg','assets/img/galery3.jpg'];
// shuffle(arr);

let arr = ['/assets/img/galery1.jpg', 'assets/img/galery2.jpg','assets/img/galery3.jpg'];
let result = arr.map(pictureInnerContainer.append(img));

