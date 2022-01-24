const containers = document.querySelectorAll('.box-img');

const loadMore = document.querySelector('.button')
// console.log(container, loadMore)

loadMore.addEventListener('click', loadMoreImage)

// function loadMoreImage(){
//     for(container of containers ){
//         container.style.display =" inline-block"
//     }

// }

let currentImage = 3
function loadMoreImage(){
    for (let i = currentImage; i < currentImage +3; i++){
        containers[i].style.display = 'inline-block'
    }

    currentImage += 3
    if(currentImage >= containers.length){
        loadMore.style.display= 'none'
    }
}