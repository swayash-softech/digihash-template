let nxtBtn = document.querySelector('#nxt')
let allProps = ["Aesthetic Design", "Time To Time Updates", "Less Time Required"]
let ind = 0
nxtBtn.addEventListener('click', function(){
    console.log(ind)

    if(ind>allProps.length){
        console.log(allProps.length)
        ind = -1
    }
    prop.textContent =  allProps[ind+1]


})