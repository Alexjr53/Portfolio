function typeWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((characters, index) => {
        setTimeout(function(){
            element.innerHTML += characters;
        }, 140 * index)
    });
}
const phrase = document.querySelector('.presentation')
document.querySelector('.logo').addEventListener('click', ()=>{
    typeWriter(phrase)
})
typeWriter(phrase);


//função para as skills

document.querySelectorAll('.skill-logo').forEach((item, index)=> {
    item.addEventListener('click', ()=> {
        const currentOpen = document.querySelector('.item-open');
        const currentClosed = document.querySelectorAll('.hidden');
        
        if (currentClosed[index].classList.contains('item-open')) {
            currentOpen.classList.remove('item-open')
        } else if (currentOpen) {
            currentClosed[index].classList.add('item-open');
            currentOpen.classList.remove('item-open');
        } else {
            currentClosed[index].classList.add('item-open');
        }
    })
})
