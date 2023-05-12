let subject = document.getElementsByClassName('subject');
let pTag = document.getElementById('paragraph');
let checkBtn = document.getElementById('check');
let body = document.getElementById('body');


checkBtn.addEventListener('click', function() {
    let maths = subject[0].value;
    let eng = subject[1].value;
    let phy = subject[2].value;
    let chem = subject[3].value;
    let totalScore = Number(maths) + Number(eng) + Number(phy) + Number(chem);
    pTag.textContent = 'Your Jamb Score Is ' + totalScore;


    if (totalScore >= 200) {
        body.style.backgroundColor = 'green';
        checkBtn.style.backgroundColor = 'green';
        pTag.textContent += ' Boss!!!';
    }

    else if (totalScore >= 100 && totalScore < 200) {
        body.style.backgroundColor = 'orange';
        checkBtn.style.backgroundColor = 'orange';
        pTag.textContent += ' You try';
    }

    else {
        body.style.backgroundColor = 'red';
        checkBtn.style.backgroundColor = 'red';
        pTag.textContent += ' Just dey play';
    }
})

