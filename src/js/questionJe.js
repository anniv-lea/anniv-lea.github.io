questionNumber = 0;

function Check(selected){
    q1 = document.getElementById('q1');
    q2 = document.getElementById('q2');
    q3 = document.getElementById('q3');
    q4 = document.getElementById('q4');
    question = document.getElementById('questionTitle');
    picture = document.getElementById('picture');
    header = document.getElementById('header');
    originalColor = document.getElementsByClassName('proposition')[0].style.backgroundColor;

    permaLink = "../../../userContent/pictures/"
    buttonList = [q1, q2, q3, q4];
    answerSelected = "";

    proposition1 = ["Mon meilleur ami", "L'une de mes demi-sœur", "George Washington", "le frère de Mathis"];
    proposition2 = ["Ping-pong", "Rugby", "Hockey", "Gymnastique"];
    proposition3 = ["Nos prénom", "Le jour de naissance", "Admiration Sea of thieves + Xbox", "Les prénoms de nos papa"];

    propositions = [proposition1, proposition2, proposition3];
    pictureName = ["calendar.png", "sports.png", "link.png"];

    answerList = ["France-Suisse", proposition1[1], proposition2[0], proposition3[1]];

    victoryCondition = answerList.length - 1;

    questionList = ["Qui est né le même jour que moi ? (hors Lebron James ^^)", 
    "Dans quel sport je n'ai pas reçu de récompense ? (médailles...)", 
    "Qu'ai-je pas en commun avec un de mes ami ?"];



    for (let i = 0; i < buttonList.length; i++){
        if (buttonList[i] == selected){
            answerSelected = selected;
        }
    }
    if (answerList[questionNumber] == answerSelected.value){
        selected.style.backgroundColor = "green";
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
        console.log(questionNumber);
        if (questionNumber >= victoryCondition){
            setTimeout(function() { 
                Victory();
            }, 600);
        }
    }
    else{
        selected.style.backgroundColor = "red";
        setTimeout(function() { selected.style.backgroundColor = originalColor; }, 500);
    }
}

function Victory(){
    for (let i = 0; i < buttonList.length; i++){
        buttonList[i].remove();
    }
    question.innerHTML = "Bravo ! Ma meilleure amie me connaît parfaitement désormais ! ^^"
    text = document.createElement("h2");
    text.innerHTML = "Le mot est : ";
    header.insertBefore(text, null);
    picture.remove();
}