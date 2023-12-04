color = "blue";

function Digicode(button){
    color = document.getElementById('color-select').value;
    if (button.style.backgroundColor != color){
        Active(button, color);
    }
    else{
        Inactive(button, color);
    }
}

function Active(button, color){
    button.style.backgroundColor = color;
}

function Inactive(button, color){
    button.style.backgroundColor = null;
}

function LoadList(){
    c1 = document.getElementById("c1");
    c2 = document.getElementById("c2");
    c3 = document.getElementById("c3");
    c4 = document.getElementById("c4");
    c5 = document.getElementById("c5");
    c6 = document.getElementById("c6");
    c7 = document.getElementById("c7");
    c8 = document.getElementById("c8");
    c9 = document.getElementById("c9");
    c10 = document.getElementById("c10");
    c11 = document.getElementById("c11");
    c12 = document.getElementById("c12");
    c13 = document.getElementById("c13");
    c14 = document.getElementById("c14");
    c15 = document.getElementById("c15");
    c16 = document.getElementById("c16");
    c17 = document.getElementById("c17");
    c18 = document.getElementById("c18");
    c19 = document.getElementById("c19");
    c20 = document.getElementById("c20");
    c21 = document.getElementById("c21");
    c22 = document.getElementById("c22");
    c23 = document.getElementById("c23");
    c24 = document.getElementById("c24");
    c25 = document.getElementById("c25");
    c26 = document.getElementById("c26");
    c27 = document.getElementById("c27");
    c28 = document.getElementById("c28");
    c29 = document.getElementById("c29");
    c30 = document.getElementById("c30");
    
    list = [c1, c2, c3, c4, c5, c6, c7, c8 , c9, c10, 
        c11, c12, c13, c14, c15, c16, c17, c18 , c19, c20,
        c21, c22, c23, c24, c25, c26, c27, c28, c29, c30];
    
    return list;
}


function Check(){
    acceptedNumberBlue = [1, 2, 7, 8, 13, 14, 19, 20, 25, 26];
    acceptedNumberWhite = [3, 4, 9, 10, 15, 16, 21, 22, 27, 28];
    acceptedNumberRed = [5, 6, 11, 12, 17, 18, 23, 24, 29, 30];
    
    list = LoadList();

    colorList = ["blue", "white", "red"];
    numberList = [acceptedNumberBlue, acceptedNumberWhite, acceptedNumberRed];
    check = false;
    checkNumber = 0;

    for (let j = 0; j < numberList.length; j++){
        for (let i = 0; i < numberList[j].length; i++){
            if (list[numberList[j][i] - 1].style.backgroundColor == colorList[j]){
                checkNumber++;
            }
        }
    }
    
    if(checkNumber == list.length){
        check = true;
    }

    if(check){
        alert("indice : félicitation");
    }
}