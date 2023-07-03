
// ESERCIZIO 1

class user{
    constructor(_firstname, _lastname, _age, _location){
        this.firstname = _firstname
        this.lastname = _lastname
        this.age = _age
        this.location = _location
    }
 
    
        compareAge(otherUser) {
            if (this.age < otherUser.age) {
                return `${this.firstname} è più giovane di ${otherUser.firstname}.`;
           
            } else {
                return `${this.firstname} è più vecchio di ${otherUser.firstname}.`;
            }
        }
    }
    

const x  = new user('Giovanni', 'paolo', '22', 'Bergamo')
const y = new  user('Marco', 'Polo', '25', 'Milano')
const j = new user ('Federico', 'Di Marco', '32', 'Bologna')

console.log(j.compareAge(y))




// ESERCIZIO 2

const petname = document.getElementById('petName')
const ownername = document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const pets = []

class Pet  {
    constructor (_petname, _ownername, _species, _breed,){
        this.petname = _petname
        this.ownername = _ownername
        this.species = _species
        this.breed = _breed

    }
    compareOwner(otherUser) {
        if (this.ownername === otherUser.ownername) {
            return true
       
        } else {
            return false
        }
    }

}

const PetList = function(){
    const list = document.getElementById('list')
    list.innerHTML = ''
    pets.forEach ((pet)=>{
        const newList = document.createElement('li')
        newList.innerText = `${pet.petname} ${pet.ownername} ${pet.species} ${pet.breed}`
        list.appendChild(newList)
    })
}


const form = document.querySelector('form')
form.addEventListener('submit', function (e){
    e.preventDefault()
    const newPet = new Pet (
        petname.value, 
        ownername.value,
        species.value,
        breed.value
    )
    pets.push(newPet)
    petname.value = ''
    ownername.value = ''
    species.value = ''
    breed.value = ''
    PetList()
})

const pet1 = new Pet('clara', 'mario', 'gatto', 'felino')
const pet2 = new Pet('Rocky', 'fabio', 'cane', 'Bulldog')

console.log(pet1.compareOwner(pet2))