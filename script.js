const btn = document.querySelector('.left2')
const info = document.querySelector('.info')
const mainSort = document.querySelector('.sort')
const sort = document.querySelector('.fa-solid')


btn.addEventListener('click',add)
function add() {
let div = document.createElement('div')
let input = document.createElement('input')
let right = document.createElement('div')
let i = document.createElement('i')
div.classList.add('first')
right.classList.add('right')
let i2 = i.classList
  i2.add('fa-regular')
  i2.add('fa-circle-xmark')
  right.appendChild(i)
  div.appendChild(input)
  div.appendChild(right)
  info.appendChild(div)
}

info.addEventListener('click', trash)
function trash(e) {
    if(e.target.classList.contains('fa-regular')) {
        let main = e.target.parentElement.parentElement
        let main2 = main.children[0]
         main.remove()
       
         
    }
    else if(e.target.classList.contains('right')) {
        let main = e.target.parentElement
         main.remove()
    }
}

mainSort.addEventListener('click',otherSort) 
function otherSort(e) {

    if(e.target.classList.contains('fa-arrow-down-short-wide')) {
        console.log('birinci')
        mainSort.children[0].remove()
        const i = document.createElement('i')
        i.classList.add('fa-solid')
        i.classList.add('fa-arrow-up-short-wide')
        mainSort.appendChild(i)

    let result = []
    let child = info.children
    for(let i=0;i<child.length;i++) {
    let main = info.children[i]
    result.push(main.children[0].value)
    }
    result.sort()
    for(let i=0;i<result.length;i++) {
        let deyer = info.children[i].children[0]
        deyer.value = result[i]
    }
    }


    else if(e.target.classList.contains('fa-arrow-up-short-wide')) {
     console.log('ikinci')
     mainSort.children[0].remove()
     const i = document.createElement('i')
     i.classList.add('fa-solid')
     i.classList.add('fa-arrow-down-short-wide')
     mainSort.appendChild(i)




        let result = []
        let child = info.children
        for(let i=0;i<child.length;i++) {
        let main = info.children[i]
        result.push(main.children[0].value)
        }
        result.sort()
        result.reverse()
        for(let i=0;i<result.length;i++) {
            let deyer = info.children[i].children[0]
            deyer.value = result[i]
        }
    }
}

