//https://riki.edu.vn/minna-no-nihongo/

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

quizData = shuffleArray(quizData);
loadQuiz();


function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];
    let randomIndex1, randomIndex2, randomIndex3;
    while (true) {
        randomIndex1 = Math.floor(Math.random() * quizData.length);
        if (randomIndex1 != currentQuiz) {
            break;
        }
    }
    while (true) {
        randomIndex2 = Math.floor(Math.random() * quizData.length);
        if (randomIndex2 != randomIndex1 && randomIndex2 != currentQuiz) {
            break;
        }
    }
    while (true) {
        randomIndex3 = Math.floor(Math.random() * quizData.length);
        if (randomIndex3 != randomIndex1 && randomIndex3 != randomIndex2 && randomIndex3 != currentQuiz) {
            break;
        }
    }
    let listAns = shuffleArray([
        quizData[currentQuiz][1],
        quizData[randomIndex1][1],
        quizData[randomIndex2][1],
        quizData[randomIndex3][1]
    ]);

    questionEl.innerText = (currentQuiz + 1) + '. ' + currentQuizData[0];
    a_text.innerText = '1. ' + listAns[0];
    b_text.innerText = '2. ' + listAns[1];
    c_text.innerText = '3. ' + listAns[2];
    d_text.innerText = '4. ' + listAns[3];
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = document.getElementById(answerEl.id + '_text').innerHTML.slice(3);
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        resetColor();
        if (answer === quizData[currentQuiz][1]) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button id="reload" onclick="location.reload()">Reload</button>
           `;
            document.addEventListener('keydown', (e) => {
                if (e.key == 'Enter') {
                    document.getElementById('reload').click();
                }
            })
        }
    }
});

$('.answer').on('change', ansChange);

function resetColor() {
    document.getElementById('a_text').style.color = 'black';
    document.getElementById('b_text').style.color = 'black';
    document.getElementById('c_text').style.color = 'black';
    document.getElementById('d_text').style.color = 'black';
}

function ansChange(e) {
    resetColor();
    let ans = getSelected();
    if (ans == quizData[currentQuiz][1]) {
        document.getElementById(e.target.id + '_text').style.color = 'blue';
    } else {
        document.getElementById(e.target.id + '_text').style.color = 'red';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key == '1') {
        document.getElementById('a_text').click();
    } else if (e.key == '2') {
        document.getElementById('b_text').click();
    } else if (e.key == '3') {
        document.getElementById('c_text').click();
    } else if (e.key == '4') {
        document.getElementById('d_text').click();
    } else if (e.key == 'Enter') {
        resetColor();
        document.activeElement.blur();
        submitBtn.click();
    }
})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}