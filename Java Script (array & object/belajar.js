/* const name = ['dani', 'daniel', 'dhaniel', 'dandi']

for (let i = 0; i < name.length; i++) {
	console.log(name[i]);
} */


/* const nama = ['dandi', 'daniel', 'dhaniel']

//menampilkan semua data array
for (let i = 0; i < nama.length; i++) {
	console.log(nama[i]);
} */


/* const names = ['edka', 'diyah', 'amos', 'rahma']

let index = names.length 


do {
	console.log(`nama siswa ${index + 1} adalah ${names[index]}`);
	index--
} while (index >= 0); */


//agnka ganjil genap
/* const a = 1
const b = 2
const c = 3
const d = 4

function checkGangjilGenap(angka) {
	if (angka % 2 == 0 ) {
		console.log(angka, `ini adalah angka genap`);
	} else {
		console.log(angka, `ini adalah angka ganjil`);
	}
}
checkGangjilGenap(1)
checkGangjilGenap(2)
checkGangjilGenap(3)
checkGangjilGenap(4) */



//challange 
/* const names = [
	'edka', 
	'dhaniel', 
	'brayen', 
	'chiesa', 
	'andi']

	function sort(varian) {
		const new_varian = [varian]

		for (let i = 0; i < varian.length - 1; i++) {

		for (let j = i + 1; j < varian.length; j++) {
			if (varian[i] > varian[j]) {
				let data = varian[i]
				varian[i] = varian[j]
				varian[j] = data
			}
		}
	}
	return varian
}
const sortedNames = sort(names) 
console.log(sortedNames); */


// a e d c b


/* //dadu
const dadu = []

//dadu pertama
for (let i = 1; i <= 6; i++) {
	//dadu ke dua
	let dadu_2 = []

	for (let j = 1; j <= 6; j++) {
		dadu_2.push([i, j])
	}
	dadu.push(...dadu_2)
}
console.log(dadu); */



//objek
/* const nama = [
	{
		name : 'dhaniel',
		hoby : 'musik',
	},
	{
		name : 'aldy',
		hoby : 'ngoding',
	},
	{
		name : 'aldo',
		hoby : 'develop',
	},
	{
		name : 'kenly',
		hoby : 'game',
	},
]


function sortArrayObejck(data) {

	let new_data = [...data]
	for (let i = 0; i < new_data.length; i++) {

		for (let j = 0; j < new_data.length - 1; j++) {

			if (new_data[j].name > new_data[j + 1].name) {
				let tampung = new_data[j]
				new_data[j] = new_data[j + 1]
				new_data[j + 1] = tampung
			}
		}
	}
	return new_data
}
const hasil = sortArrayObejck(nama)
console.log(hasil); */


/* const car = [
		{
	    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
	    "plate": "DBH-3491",
	    "transmission": "Automatic",
	    "manufacture": "Ford",
	    "model": "F150",
	    "available": true,
	    "type": "Sedan",
	    "year": 2022,
	    "options": [
	      "Cruise Control",
	      "Tinted Glass",
	      "Tinted Glass",
	      "Tinted Glass",
	      "AM/FM Stereo"
	    ],
	    "specs": [
	      "Brake assist",
	      "Leather-wrapped shift knob",
	      "Glove box lamp",
	      "Air conditioning w/in-cabin microfilter",
	      "Body color folding remote-controlled pwr mirrors",
	      "Dual-stage front airbags w/occupant classification system"
	    ]
	  },
	  {
	    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
	    "plate": "WXB-3984",
	    "transmission": "Automatic",
	    "manufacture": "BMW",
	    "model": "X5",
	    "available": false,
	    "type": "Convertible",
	    "year": 2019,
	    "options": [
	      "Keyless Entry",
	      "Power Windows",
	      "MP3 (Single Disc)",
	      "CD (Multi Disc)",
	      "Navigation"
	    ],
	    "specs": [
	      "Rear passenger map pockets",
	      "Electrochromic rearview mirror",
	      "Dual chrome exhaust tips",
	      "Locking glove box",
	      "Pwr front vented disc/rear drum brakes"
	    ]
	  },
	  {
	    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
	    "plate": "OSL-4224",
	    "transmission": "Automanual",
	    "manufacture": "Lincoln",
	    "model": "MKZ",
	    "available": true,
	    "type": "Sedan",
	    "year": 2021,
	    "options": [
	      "Bucket Seats",
	      "Airbag: Passenger",
	      "Airbag: Driver",
	      "Power Seats",
	      "Airbag: Side",
	      "Antilock Brakes",
	      "CD (Multi Disc)"
	    ],
	    "specs": [
	      "Driver & front passenger map pockets",
	      "Direct-type tire pressure monitor system",
	      "Cargo area lamp",
	      "Glove box lamp",
	      "Silver finish interior door handles",
	      "Driver & front passenger advanced multistage airbags w/occupant sensors",
	      "Silver accent IP trim finisher -inc: silver shifter finisher",
	      "Fasten seat belt warning light/chime"
	    ]
	  }
	];

function filterAvailable(cars) {

	let new_cars = cars
	for (let i = 0; i < new_cars.length; i++) {
		if (new_cars[i].available === true) {
			
		}
	} 
	return new_cars
}
const hasil = filterAvailable(car)
console.log(hasil); */



/* const kendaraan = [
    {
        pemilik: '1',
        transmisi: 'matic',
        tahun: 2017,
        type: 'mobil',
    },
    {
        pemilik: '2',
        transmisi: 'manual',
        tahun: 2015,
        type: 'mobil',
    },
    {
        pemilik: '3',
        transmisi: 'matic',
        tahun: 2020,
        type: 'motor',
    },
    {
        pemilik: '4',
        transmisi: 'matic',
        tahun: 2017,
        type: 'motor',
    },
    {
        pemilik: '5',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
]

const orang = [
    {
        nama: 'ikhadany',
        id: '2',
        domisili: 'purwokerto',
    },
    {
        nama: 'rahma',
        id: '1',
        domisili: 'depok',
    },
    {
        nama: 'amos',
        id: '4',
        domisili: 'jakarta barat',
    },
    {
        nama: 'diyah',
        id: '3',
        domisili: 'rembang',
    },
    {
        nama: 'arya',
        id: '5',
        domisili: 'jakarta',
    },
    {
        nama: 'difah',
        id: '7',
        domisili: 'jakarta',
    },
    {
        nama: 'malay',
        id: '6',
        domisili: 'jakarta',
    },
]
 */

/* const hasil = [];

for (let i = 0; i < kendaraan.length; i++) {
	for (let j = 0; j < orang.length; j++) {
		if (kendaraan[i].pemilik === orang[j].id) {
			hasil.push({
						pemilik: orang[i].nama,
						kendaraan: {
							transmisi: kendaraan[i].transmisi,
							tahun: kendaraan[i].tahun,
							type: kendaraan[i].type
						}
					})
		}
	}
}
console.log(hasil); */



//soal no 1
//function
/* function soal1(kendaraan, orang) {

	const reslut = []
	for (let a = 0; a < kendaraan.length; a++) {
		for (let b = 0; b < orang.length; b++) {
			if (kendaraan[a].pemilik === orang[b].id) {
				reslut.push({
						pemilik: orang[b].nama,
						kendaraan: {
							transmisi: kendaraan[a].transmisi,
							tahun: kendaraan[a].tahun,
							type: kendaraan[a].type
						}
					})
			}
		}
		
	}
	return reslut
}
console.log(soal1(kendaraan, orang)); */


//soal no 2
/* function soal2(tahun, arrKendaraan, arrOrang) {
    // const data = merge(arrKendaraan, arrOrang)
    let hasil = []
    for (let i = 0; i < arrKendaraan.length; i++) {
        if (arrKendaraan[i].tahun === tahun) {
            hasil.push(arrKendaraan[i])
        }
    }
    // console.log(hasil)
    return soal1(hasil, arrOrang)
}
console.log(soal2(2017, kendaraan, orang)) */


//soal no 3
/* const data = soal1(kendaraan, orang)

function soal3(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i].pemilik > arr[j].pemilik) {
				const penampung = arr[j]
					arr[j] = arr[i]
					arr[i] = penampung
				}
			}
		}
	return arr
}
console.log(soal3(data)) */


//soal no 4
/* function nomorempat(arrKendaraan, arrOrang) {
    const hasil = []
    for (let i = 0; i < arrOrang.length; i++) {
        const orang = {
            pemilik: arrOrang[i].nama,
            kendaraan: [],
        }
        for (let j = 0; j < arrKendaraan.length; j++) {
            if (arrOrang[i].id == arrKendaraan[j].pemilik) {
                orang.kendaraan.push({
                    transmisi: arrKendaraan[j].transmisi,
                    tahun: arrKendaraan[j].tahun,
                    type: arrKendaraan[j].type,
                })
            }
        }
        hasil.push(orang)
    }
    return hasil
}

console.log(
    util.inspect(nomorempat(kendaraan, orang), {
        showHidden: false,
        depth: null,
        colors: true,
    })
) */



/* const fsw6 = [
    {
        name: 'ikadhanny',
        hobby: 'main gitar',
    },
    {
        name: 'dhaniel',
        hobby: 'main bola',
    },
    {
        name: 'ryan',
        hobby: 'main saxophone',
    },
    {
        name: 'arya',
        hobby: 'main gitar',
    },
    {
        name: 'diyah',
        hobby: 'main bola',
    },
]
const hobyBola = getHobyBola(fsw6)
// console.log(hobyBola)

function getHobyBola(komponen) {
    const newArr = []
    for (let i = 0; i < komponen.length; i++) {
        if (komponen[i].hobby === 'main bola') {
            newArr.push(komponen[i])
        }
    }
    return newArr
}

// const studentHobyBola = []
// console.log(studentHobyBola)
// for (let i = 0; i < fsw6.length; i++) {
//     if (fsw6[i].hobby === 'main bola') {
//         // console.log(fsw6[i])
//         studentHobyBola.push(fsw6[i])
//     }
// }
// console.log(studentHobyBola)

const newFsw6 = [fsw6]
const fsw6TitikTitik = [...fsw6]
console.log(newFsw6)
console.log(fsw6TitikTitik) */



const fsw6 = [
    {
        name: 'Adrian',
    },
    {
        name: 'Amos',
    },
    {
        name: 'Arya',
    },
    {
        name: 'Dhaniel',
    },
    {
        name: 'Dhewan',
    },
    {
        name: 'Diana',
    },
    {
        name: 'Diandra',
    },
    {
        name: 'Difa',
    },
    {
        name: 'Diyah',
    },
    {
        name: 'Elin',
    },
    {
        name: 'Ikadhanny',
    },
    {
        name: 'Ilyas',
    },
    {
        name: 'Ryas',
    },
    {
        name: 'Magdalisa',
    },
    {
        name: 'Edka',
    },
    {
        name: 'Bintang',
    },
    {
        name: 'Fadilllah',
    },
    {
        name: 'Rizky',
    },
    {
        name: 'Aryaputra',
    },
    {
        name: 'Rahma',
    },
    {
        name: 'Ryan',
    },
    {
        name: 'Silva',
    },
    {
        name: 'Wahyu',
    },
    {
        name: 'Samuel',
    },
]

for (let i = 0; i < fsw6.length; i++) {
    fsw6[i].id = i + 1
}

const voting = []

function vote(id, ukrainaRusia) {
    voting.push({ id, ukrainaRusia })
}

vote(1, 'ukraina')
vote(2, 'rusia')
vote(3, 'rusia')
vote(4, 'rusia')
vote(5, 'rusia')
vote(6, 'ukraina')
vote(7, 'netral')
vote(8, 'rusia')
vote(9, 'ukraina')
vote(10, 'ukraina')
vote(11, 'ukraina')
vote(12, 'rusia')
vote(13, 'rusia')
vote(14, 'rusia')
vote(15, 'rusia')
vote(16, 'ukraina')
vote(17, 'ukraina')
vote(18, 'ukraina')
vote(19, 'ukraina')
vote(20, 'ukraina')
vote(21, 'rusia')
vote(22, 'rusia')
vote(23, 'ukraina')
vote(24, 'rusia')

const checkWinner = function (arr) {
    let ukraina = 0
    let rusia = 0
    let netral = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].ukrainaRusia === 'ukraina') {
            ukraina++
        } else if (arr[i].ukrainaRusia === 'rusia') {
            rusia++
        } else {
            netral++
        }
    }

    if (netral > rusia && netral > ukraina) {
        return {
            pemenang: 'tidak ada',
            hasilVoting: { ukraina, rusia, netral },
        }
    } else if (ukraina > rusia) {
        return { pemenang: 'ukraina', hasilVoting: { ukraina, rusia, netral } }
    } else {
        return { pemenang: 'rusia', hasilVoting: { ukraina, rusia, netral } }
    }
}

// console.log(checkWinner(voting))

// function checkVoters(value) {
//     let votersValue = []
//     for (let i = 0; i < voting.length; i++) {
//         if (voting[i].ukrainaRusia === value) {
//             votersValue.push(voting[i])
//         }
//     }
//     // console.log(votersValue)
//     let hasil = []
//     for (let i = 0; i < votersValue.length; i++) {
//         for (let j = 0; j < fsw6.length; j++) {
//             if (votersValue[i].id == fsw6[j].id) {
//                 hasil.push({
//                     ...fsw6[j],
//                     memilih: votersValue[i].ukrainaRusia,
//                 })
//                 break
//             }
//         }
//     }
//     console.log(hasil)
// }
function checkVoters(value) {
    const votersValue = voting.filter((item) => item.ukrainaRusia === value)
    let hasil = []
    for (let i = 0; i < votersValue.length; i++) {
        for (let j = 0; j < fsw6.length; j++) {
            if (votersValue[i].id == fsw6[j].id) {
                hasil.push({
                    ...fsw6[j],
                    memilih: votersValue[i].ukrainaRusia,
                })
                break
            }
        }
    }
    console.log(hasil)
}

checkVoters('ukraina')