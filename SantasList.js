//solution 1
function santasNaughtyList(persons, badHabit) {
    let answers = []
    for (let i = 0; i < persons.length; i++) {
        for (let j = 0; j < persons[i].habits.length; j++) {
            if (persons[i].habits[j] == badHabit) {
                answers.push(persons[i].firstName + ' ' + persons[i].lastName)
            }
        }
    }
    return answers
}

//solution 2
const santasNaughtyListFunctional = (persons, badHabit) => persons.filter(p => p.habits.includes(badHabit)).map(p => p.firstName + ' ' + p.lastName) 