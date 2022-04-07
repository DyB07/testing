const textinput = document.getElementById('textinput')
const hasil_ti = document.getElementById('hasil_ti')
var input1 = ''
var input2 = false
textinput.addEventListener('change', (e) => {
    
    hasil_ti.innerHTML = e.target.value
    input = e.target.value
    //filterCar(e.target.value)
    }
)

textinput2.addEventListener('change', (e) => {
    
    hasil_ti.innerHTML = e.target.value
    input2 = e.target.value
    //filterCar(e.target.value)
    }
)

button.addEventListener('click', (e) => {
    
    hasil_ti.innerHTML = e.target.value
   
    filterCar(input1, input2)
    }
)