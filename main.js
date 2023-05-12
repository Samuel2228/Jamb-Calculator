let subject = document.getElementsByClassName('subject');
let pTag = document.getElementById('paragraph');
let checkBtn = document.getElementById('check');


checkBtn.addEventListener('click', function() {
    let maths = subject[0].value;
    let eng = subject[1].value;
    let phy = subject[2].value;
    let chem = subject[3].value;
    let totalScore = Number(maths) + Number(eng) + Number(phy) + Number(chem);
    pTag.textContent = 'Your Jamb Score Is ' + totalScore;

})

