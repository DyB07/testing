var Allcar = null

const getAllcar = () => {
    fetch('/getcar')
    .then((response) => response.json())
    .then((hasil) => {
        const card = document.getElementById('card')
        for (let i = 0; i < hasil.length; i++) {
            const car = document.createElement('div')
			car.className = "car"
            car.innerHTML = `<img src="${hasil[i].image}" class="card-img-top">
					<div class="card-body">
						<h5>${hasil[i].model}</h5>
						<h5>${hasil[i].rentPerDay} / Hari</h5>
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

					</div>`
            
            card.appendChild(car)
        }
        Allcar = hasil
    })
}
getAllcar()