// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);



//player creation
let players = 
{
    'player1' : {
        'name' : "",
        'points' : 0,
        'phase' : 1,
        'newPoints' : 0,
        'didPhase' : 0
    },
    'player2' : {
        'name' : "",
        'points' : 0,
        'phase' : 1,
        'newPoints' : 0,
        'didPhase' : 0
    },
    'player3' : {
        'name' : "",
        'points' : 0,
        'phase' : 1,
        'newPoints' : 0,
        'didPhase' : 0
    },
    'player4' : {
        'name' : "",
        'points' : 0,
        'phase' : 1,
        'newPoints' : 0,
        'didPhase' : 0
    },
}

//set up numbers
document.querySelector('#points1').innerHTML = players.player1.points;
document.querySelector('#phase1').innerHTML = players.player1.phase;
document.querySelector('#points2').innerHTML = players.player2.points;
document.querySelector('#phase2').innerHTML = players.player2.phase;
document.querySelector('#points3').innerHTML = players.player3.points;
document.querySelector('#phase3').innerHTML = players.player3.phase;
document.querySelector('#points4').innerHTML = players.player4.points;
document.querySelector('#phase4').innerHTML = players.player4.phase;
document.querySelector('#newPoints1').value = "0";
document.querySelector('#newPoints2').value = "0";
document.querySelector('#newPoints3').value = "0";
document.querySelector('#newPoints4').value = "0";

function add(number1, number2){
	return (number1+number2);
}

function convertBool(item) {
    if(item){
        return 1;
    }
    return 0;
}

function checkEnd(number) {
    if(number == 11) {
        return 1;
    }
    return 0;
}

function populate()
{
    //input newPoints
    players.player1.newPoints = parseInt(document.querySelector('#newPoints1').value);
    players.player2.newPoints = parseInt(document.querySelector('#newPoints2').value);
    players.player3.newPoints = parseInt(document.querySelector('#newPoints3').value);
    players.player4.newPoints = parseInt(document.querySelector('#newPoints4').value);

    //input didPhase
    players.player1.didPhase = convertBool(document.querySelector('#didPhase1').checked);
    players.player2.didPhase = convertBool(document.querySelector('#didPhase2').checked);
    players.player3.didPhase = convertBool(document.querySelector('#didPhase3').checked);
    players.player4.didPhase = convertBool(document.querySelector('#didPhase4').checked);

    //input names
    players.player1.name = document.querySelector('#name1').value;
    players.player2.name = document.querySelector('#name2').value;
    players.player3.name = document.querySelector('#name3').value;
    players.player4.name = document.querySelector('#name4').value;

    //add points
    for (play in players) {
        players[play].points = add(players[play]['points'], players[play]['newPoints']);
    }

    //add phase
    let end = 0;
    for (play in players) {
        players[play].phase = add(players[play].phase, players[play].didPhase);
        end += checkEnd(players[play].phase);
    }

    //determine the winner and end the game
    let winner = "";
    if (end > 0) {
        //determine the winner
        let points = 50000;
        for(play in players) {
            if(players[play].phase == 11 && players[play].points < points) {
                points = players[play].points;
                winner = players[play].name;
            }
        }

        //show winner
        document.querySelector('#winner').innerHTML = "The winner is " + winner;

        //hide the populate button
        document.querySelector('#send').style.visibility = 'hidden';
    }

    //show updates
    document.querySelector('#points1').innerHTML = players.player1.points;
    document.querySelector('#phase1').innerHTML = players.player1.phase;
    document.querySelector('#points2').innerHTML = players.player2.points;
    document.querySelector('#phase2').innerHTML = players.player2.phase;
    document.querySelector('#points3').innerHTML = players.player3.points;
    document.querySelector('#phase3').innerHTML = players.player3.phase;
    document.querySelector('#points4').innerHTML = players.player4.points;
    document.querySelector('#phase4').innerHTML = players.player4.phase;
    document.querySelector('#newPoints1').value = "0";
    document.querySelector('#newPoints2').value = "0";
    document.querySelector('#newPoints3').value = "0";
    document.querySelector('#newPoints4').value = "0";
    document.querySelector('#didPhase1').checked = false;
    document.querySelector('#didPhase2').checked = false;
    document.querySelector('#didPhase3').checked = false;
    document.querySelector('#didPhase4').checked = false;
}

function newGame() {

    //reset all values
    for(play in players) {
        players[play].name = "";
        players[play].points = 0;
        players[play].newPoints = 0;
        players[play].phase = 1;
        players[play].didPhase = 0;
    }

    //clear points and phases
    document.querySelector('#points1').innerHTML = players.player1.points;
    document.querySelector('#phase1').innerHTML = players.player1.phase;
    document.querySelector('#points2').innerHTML = players.player2.points;
    document.querySelector('#phase2').innerHTML = players.player2.phase;
    document.querySelector('#points3').innerHTML = players.player3.points;
    document.querySelector('#phase3').innerHTML = players.player3.phase;
    document.querySelector('#points4').innerHTML = players.player4.points;
    document.querySelector('#phase4').innerHTML = players.player4.phase;

    //clear the text boxes and check marks
    document.querySelector('#name1').value = "";
    document.querySelector('#name2').value = "";
    document.querySelector('#name3').value = "";
    document.querySelector('#name4').value = "";
    document.querySelector('#newPoints1').value = "0";
    document.querySelector('#newPoints2').value = "0";
    document.querySelector('#newPoints3').value = "0";
    document.querySelector('#newPoints4').value = "0";
    document.querySelector('#didPhase1').checked = false;
    document.querySelector('#didPhase2').checked = false;
    document.querySelector('#didPhase3').checked = false;
    document.querySelector('#didPhase4').checked = false;

    //show the populate button if hidden
    document.querySelector('#send').style.visibility = 'visible';

    //clear old winner
    document.querySelector('#winner').innerHTML = "";
}


document.querySelector('#newGame').addEventListener("click", newGame);
document.querySelector('#send').addEventListener("click", populate);