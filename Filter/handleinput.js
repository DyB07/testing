/* const textinput = document.getElementById('textinput')
const hasil_ti = document.getElementById('hasil_ti')
textinput.addEventListener('change', (e) => {
    e.preventDefault()
    hasil_ti.innerHTML = e.target.value
    filterCar(e.target.value)
    }
) */

const FilterAvailable = () => {
    let available = document.getElementById('select').value
    return available;
}

const FilterDate = () => {
    let Tanggal_value = document.getElementById('select-tanggal').value
    let Tanggal_input = new Date(Tanggal_value)
    return Tanggal_input;
}

const FilterTime = () => {
    let Time = document.getElementById('select-waktu').value
    return Time;
}

const FilterCapacity = () => {
    let Capacity = document.getElementById('penumpang').value
    return Capacity;
}


const FilterTombol = document.getElementById('tombol')
FilterTombol.addEventListener('click', (e) => {
    filterCar(
        FilterAvailable(), 
        FilterDate(), 
        FilterTime(), 
        FilterCapacity())
})