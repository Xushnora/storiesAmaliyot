let elSliderList = document.querySelector('.sliderList');
let leftBtn = document.querySelector('#leftBtn');
let rightBtn = document.querySelector('#rightBtn');

let elItems = document.querySelectorAll('.sliderItem');

let count = 0;

function sliderAdd() {
    rightBtn.addEventListener('click', (e) => {
        count++;
        if( count >= elItems.length) {
            rightBtn.style.disabled = true;
        } else {
            elItems.forEach((_, index) => {
                if(index == count) {
                    elItems[index].classList.add('active');
                } else {
                    elItems[index].classList.remove('active');
                }
            });
        }
    })
    leftBtn.addEventListener('click', (e) => {
        count--;
        if( count < 0) {
            leftBtn.style.disabled = true;
        } else {
            elItems.forEach((_, index) => {
                if(index == count) {
                    elItems[index].classList.add('active');
                } else {
                    elItems[index].classList.remove('active');
                }
            });
        }
    })

}

sliderAdd()





