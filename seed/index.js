const faker = require('faker');
const uuid = require('uuid')
const path = require('path')
const fs = require('fs/promises')

const Car = require('../src/entities/Car')
const CarCategory = require('../src/entities/CarCategory')
const Customer = require('../src/entities/Customer')

const seederBaseFolder = path.join(__dirname, '..', 'database')
const ITEMS_AMOUNT = 2

const carCategory = new CarCategory({
  id: uuid.v4(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100)
})

const cars= []
const customers= []

for(let index = 0; index <= ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: uuid.v4(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true, 
    releaseYear: faker.date.past().getFullYear(),
  })

  carCategory.carIds.push(car.id)
  cars.push(car)

  const customer = new Customer({
    id: uuid.v4(),
    name: faker.name.findName(),
    age: faker.random.number({ min: 18, max: 50 })
  })

  customers.push(customer)
}

const write = (filename, data) => fs.writeFile(
  path.join(seederBaseFolder, filename), 
  JSON.stringify(data)
)

;(async () => {
  await write('cars.json', cars)
  await write('customers.json', customers)
  await write('carCategories.json', [carCategory])

  console.log('cars', cars)
  console.log('carCategory', carCategory)
  console.log('customers', customers)
})()