// стоимость компьютера

let processorPrice = {
  'i5': 5000,
  'i7': 10000
};

let displayPrice = {
  13: 5000,
  15: 10000
};

let memoryPrice = {
  8: 3000,
  16: 4000
};

let buildComputer = function (memory, display, processor) {
  let customComputer = {
    basicPrice: 5000,
    processor: processor,
    display: display,
    memory: memory,

    getDescription: function () {
      return 'компьютер с процессором ' + this.processor + ', диагональю ' + this.display + ', оперативной памятью ' + this.memory;
    },

    getPrice: function () {
      return this.basicPrice + processorPrice[this.processor] + displayPrice[this.display] + memoryPrice[this.memory];
    }
  };

  return customComputer;
};

let myComputer = buildComputer(8, 13, 'i5');
console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());

// стоимость дома 

let materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000
};

let house = {
  rooms: 10,
  floors: 5,
  material: 'wood',
  coefficient: 10.5,
    calculateSquare: function(){
 
    return this.rooms*this.coefficient*this.floors;
  },
 
  calculatePrice: function(){
 
    return house.calculateSquare()* materialPrice[this.material];
  }
 
};
console.log('Добрый день, площадь дома составит '+ house.calculateSquare() + ' квадратных метров, а стоимость дома составит ' + house.calculatePrice() + ' рублей' );


