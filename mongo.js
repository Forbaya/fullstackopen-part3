const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const url =
    `mongodb+srv://Vilunen:${password}@cluster0.lpysk.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const addNewPerson = () => {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(result => {
        console.log(`Added ${person.name} ${person.number} to phonebook`)
        mongoose.connection.close()
    })
}

const getAll = () => {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length === 3) {
    getAll()
} else if (process.argv.length === 5) {
    addNewPerson()
} else {
    console.log('Too many arguments!')
    mongoose.connection.close()
}
