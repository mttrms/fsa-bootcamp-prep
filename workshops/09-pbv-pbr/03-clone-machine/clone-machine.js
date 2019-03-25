// YOUR CODE BELOW
function cloneMachine(animalObj) {
  let cloneObj = {
    name: animalObj.name + 'Clone',
    species: animalObj.species,
    offspring: []
  }

  animalObj.offspring.push(cloneObj.name)

  return cloneObj;

}