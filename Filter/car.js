var Allcar = null

const getAllcar = () => {
    fetch('/getcar')
    .then((response) => response.json())
    .then((hasil) => {
        const card = document.getElementById('card')
        for (let i = 0; i < hasil.length; i++) {
            const car = document.createElement('div')
			car.className = "car"
            car.innerHTML = `<div class="col mb-3"> 
                            <div class="card"> 
                            <img src="${hasil[i].image}" class="card-img-top" style="width: 350px; height:300px">

                            <div class="card-body">
                                <h5>${hasil[i].model} / ${hasil[i].manufacture}</h5>
                                <h5>RP. ${hasil[i].rentPerDay} / Hari</h5>
                                <p class="card-text">${hasil[i].description}</p>
                            
                                <div class="user">
                                    <img src="asset/fi_users.png">
                                    <label id="orang">${hasil[i].capacity} Orang</label>
                                </div>
                                <div class="setting">
                                    <img src="asset/fi_settings.png">
                                    <label id="setting">${hasil[i].transmission}</label>
                                    
                                </div>
                                <div class="update">
                                    <img src="asset/fi_calendar.png">
                                    <label id="tahun">Tahun ${hasil[i].year}</label>
                                    
                                </div>

                                <div class="footer">
                                    <button class="btn btn-success btn-block">Pilih Mobil</button>
                                </div>
                            </div>
                        </div>
                        </div>`
            
            card.appendChild(car)
        }
        Allcar = hasil
    })
}
getAllcar()


const filterCar = (available, date, time ,passenger) => {   

    let NewFilter = Allcar.filter(car =>
        
        car.available.toString().includes(available) &&
        new Date(car.availableAt) < new Date(date) &&
        new Date(car.availableAt).getHours() > time ||
        car.capacity.toString().includes(passenger)
    
    )
    
    const card = document.getElementById('card')
    card.innerHTML = ''

        NewFilter.forEach((element, id) => {
            const car1 = document.createElement('div')

            car1.innerHTML = `<div class="col mb-3"> 
                            <div class="card"> 
                            <img src="${element.image}" class="card-img-top" style="width: 350px; height:300px">

                            <div class="card-body">
                                <h5>${element.model} / ${element.manufacture}</h5>
                                <h5>Rp. ${element.rentPerDay} / Hari</h5>
                                <p class="card-text">${element.description}</p>
                            
                                <div class="user">
                                    <img src="asset/fi_users.png">
                                    <label id="orang">${element.capacity} Orang</label>
                                </div>
                                <div class="setting">
                                    <img src="asset/fi_settings.png">
                                    <label id="setting">${element.transmission}</label>
                                    
                                </div>
                                <div class="update">
                                    <img src="asset/fi_calendar.png">
                                    <label id="tahun">Tahun ${element.year}</label>
                                    
                                </div>

                                <div class="footer">
                                    <button class="btn btn-success btn-block">Pilih Mobil</button>
                                </div>
                            </div>
                        </div>
                        </div>`
                    
                card.appendChild(car1);
        });
}