// Your Code Here
let userName = window.prompt("Welcome! What is your name?")
console.log("userName", userName)
let userScore = 0

//prompt user with each question:
for (let i = 0; i < questions.length; i++){
    let question = questions [i]
    let userAnswer = window.prompt(question.text)
    console.log(userAnswer)
    if (userAnswer.toUpperCase() === question.correctAnswer) {
        console.log(`Question ${i+1} is correct`)
        userScore += 10
        }   else {
            window.alert(`Question ${i+1} is incorrect`)
        }
        window.alert("Your score is " +userScore)
}

//show user score
window.alert("Congrats! Your final score is " +userScore)