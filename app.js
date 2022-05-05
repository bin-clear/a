const imgContainer = document.querySelectorAll('.imgContainer')
const text_button = document.querySelector('.text_button')
const box_button = document.querySelector('.box_button')

for (const opens of imgContainer){
    opens.addEventListener('click',function(){
        text_button.classList.add('text_open')
        box_button.classList.add('box_button_open')
    });
}
const text = document.querySelector('.text')
text.addEventListener('click',function(){
    box_button.classList.remove('box_button_open')
});


const text_button2021 = document.querySelector('.text_button2021')
const box_button2021 = document.querySelector('.box_button2021')
for (const opens of imgContainer){
    opens.addEventListener('click',function(){
        text_button2021.classList.add('text_open2021')
        box_button2021.classList.add('box_button_open2021')
    });
}
const text2021 = document.querySelector('.text2021')
text.addEventListener('click',function(){
    box_button2021.classList.remove('box_button_open2021')
});



const text_button2022 = document.querySelector('.text_button2022')
const box_button2022 = document.querySelector('.box_button2022')
for (const opens of imgContainer){
    opens.addEventListener('click',function(){
        text_button2022.classList.add('text_open2022')
        box_button2022.classList.add('box_button_open2022')
    });
}
const text2022 = document.querySelector('.text2022')
text.addEventListener('click',function(){
    box_button2022.classList.remove('box_button_open2022')
});