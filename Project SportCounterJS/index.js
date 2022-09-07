let showScoreHome = document.getElementById('home-score');
let showScoreGuests = document.getElementById('guests-score')
let score = 0;



function plus1() {
    score += 1;
    showScoreHome.textContent = score;    
}

plus1()

function plus2() {
    score += 2;
    showScoreHome.textContent = score;    
}

plus2()

function plus3() {
    score += 3;
    showScoreHome.textContent = score;    
}

plus3()


function guestPlus1() {
    score += 1;
    showScoreGuests.textContent = score;    
}

guestPlus1()

function guestPlus2() {
    score += 2;
    showScoreGuests.textContent = score;    
}

guestPlus2()

function guestPlus3() {
    score += 3;
    showScoreGuests.textContent = score;    
}

guestPlus3()


function resetAll() {
    showScoreHome.textContent = 0;
    score = 0;
    showScoreGuests.textContent = 0;
    
    
}

resetAll()