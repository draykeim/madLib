function createParagraph() {
    var wordOne = document.getElementById("nounOne").value;
    var wordTwo = document.getElementById("fname").value;
    var wordThree = document.getElementById("pnoun").value;
    var wordFour = document.getElementById("adjTwo").value;
    var wordFive = document.getElementById("nounTwo").value;
    var wordSix = document.getElementById("number").value;
    var wordSeven = document.getElementById("fnoise").value;
    var wordEight = document.getElementById("frnoise").value;
    var wordNine = document.getElementById("nounThree").value;
    var wordTen = document.getElementById("pnounTwo").value;
    var wordEleven = document.getElementById("nounFour").value;
    var wordTwelve = document.getElementById("nounFive").value;
    var wordThirteen = document.getElementById("nounSix").value;

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight,wordNine,wordTen,wordEleven,wordTwelve,wordThirteen)

    var paragraph = "<p>   Almost every community in America now has a bowling " + wordOne + " because bowling has become very " + wordTwo + " with young " + wordThree + " ." + " Many of them become very " + wordFour + " at the game. The object of the game is to roll a heavy bowling " + wordFive + " down the alley and knock down the " + wordSix + " pins which are at the other end. If you knock them down in one roll, it's called a/an " + wordSeven + " ." + "If it takes two rolls, it's called a/an " + wordEight + " ." + "Many alleys have automatic " + wordNine + " setters. Others hire " + wordTen + " who set the pins by " + wordEleven + " ." + "The most important thing to remember when bowling is to make sure you have a good grip on the " + wordTwelve + " or you're liable to drop it on your " + wordThirteen + " ." + "This hurts like anything! </p>"
console.log(paragraph);

document.getElementById("answer").innerHTML = paragraph;
}