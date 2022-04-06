let elSliderList = document.querySelector('.sliderList');
let leftBtn = document.querySelector('#leftBtn');
let rightBtn = document.querySelector('#rightBtn');
let elItems = document.querySelectorAll('.sliderItem');

let count = 0;
let count2 = 0;

function sliderAdd() {
    let temp = 0;
    
    rightBtn.addEventListener('click', (e) => {
        count++;
        count2++;
        if (count2 <= elItems.length) {
            if (true) {
                temp += 100;
                elSliderList.style.transform =`translateX(-${temp}px)`
            } 
        }

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
        count2--;
        if(count2 >= 0) {
            if (true) {
                temp -= 100;
                elSliderList.style.transform =`translateX(-${temp}px)`
            }
        }

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

function goList() {
    elItems.forEach((_, index) => {
        elItems[index].addEventListener('click', () => {
            count++;
            console.log(index);
            if(index == count) {
                elItems[index].classList.add('active');
            } else {
                elItems[index].classList.remove('active');
            }
        })
    });
}

// goList()

sliderAdd()





