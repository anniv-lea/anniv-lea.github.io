questionNumber = 0;
correctColor = "#6ea407";
incorrectColor = "#e53523";

function Check(selected){
    q1 = document.getElementById('q1');
    q2 = document.getElementById('q2');
    q3 = document.getElementById('q3');
    q4 = document.getElementById('q4');
    question = document.getElementById('questionTitle');
    picture = document.getElementById('picture');
    header = document.getElementById('header');
    originalColor = document.getElementsByClassName('proposition')[0].style.backgroundColor;

    permaLink = "../../../userContent/pictures/";
    buttonList = [q1, q2, q3, q4];
    answerSelected = "";

    proposition1 = ["Rubik's cube", "Échecs", "Dessiner", "Faire un Marathon"];
    proposition2 = ["^^", "^^'", ":)", ":("];

    propositions = [proposition1, proposition2];
    pictureName = ["activity.png", "smiley.png"];

    answerList = ["30 Juillet 2023", proposition1[0], proposition2[0]];

    victoryCondition = answerList.length - 1;

    questionList = ["Que sait-on faire tous les deux ?", 'Quel "smiley" utilisons-nous le plus souvent ?'];



    for (let i = 0; i < buttonList.length; i++){
        if (buttonList[i] == selected){
            answerSelected = selected;
        }
    }
    if (answerList[questionNumber] == answerSelected.value){
        selected.style.backgroundColor = correctColor;
        setTimeout(function() { 
            selected.style.backgroundColor = originalColor;
            for (let j = 0; j < buttonList.length; j++){
                buttonList[j].value = propositions[questionNumber][j];
            }
            question.innerHTML = questionList[questionNumber];
            link = permaLink + pictureName[questionNumber];
            picture.src = link;
            questionNumber++;
        }, 500);
        if (questionNumber >= victoryCondition){
            setTimeout(function() { 
                Victory();
            }, 600);
        }
    }
    else{
        selected.style.backgroundColor = incorrectColor;
        setTimeout(function() { selected.style.backgroundColor = originalColor; }, 500);
    }
}

function Victory(){
    for (let i = 0; i < buttonList.length; i++){
        buttonList[i].remove();
    }
    question.innerHTML = "Félicitation ! Tu nous connais bien ! ^^"
    text = document.createElement("h2");
    text.id = "newTitleMe";
    text.innerHTML = "Je veux que tu sois / je veux te rendre ";

    header.insertBefore(text, null);

    h2 = document.getElementById('newTitleMe');
    span = document.createElement("span");
    span.id = "answer";
    span.innerHTML = "heureuse";

    h2.insertBefore(span, null);
    picture.remove();
}