function filterCarByAvailability(cars) {

  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  const car = [
    {
      id : "0",
      plate : "DB-00",
      transmission : "automatic",
      manufacture : "Ford",
      model : "F00",
      available : true,
      type : "Ford" 
    },

    {
      id : "1",
      plate : "DB-01",
      transmission : "kopleng",
      manufacture : "BMW",
      model : "F01",
      available : false,
      type : "BMW"
    },

    {
      id : "2",
      plate : "DB-02",
      transmission : "kopleng",
      manufacture : "Mustang",
      model : "F02",
      available : false,
      type : "Mustang"
    },

    {
      id : "3",
      plate : "DB-03",
      transmission : "automatic",
      manufacture : "Ferari",
      model : "F03",
      available : true,
      type : "Ferari"
    }
  ] 

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  for (let i = 0; i < car.length; i++) {
    if (car[i].available === true) {
      console.log(car);
      return car;
    }
  }

}
