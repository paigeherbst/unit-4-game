$(document).ready(function() {
  
  var characters = {
    "Obi-Wan Kenobi": {
      name: "Obi-Wan Kenobi",
      health: 150,
      attack: 9,
      imageUrl: "https://www.thoughtco.com/thmb/pYLUnM7lQ6ef-ShHTdunHcExcw0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg",
      enemyAttackBack: 20
    },
    "Luke Skywalker": {
      name: "Luke Skywalker",
      health: 120,
      attack: 16,
      imageUrl: "https://i.redd.it/2qmnb44sbt7z.jpg",
      enemyAttackBack: 8
    },
    "Darth Sidious": {
      name: "Darth Sidious",
      health: 170,
      attack: 10,
      imageUrl: "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/emperor-palpatine-star-wars-battlefront-iii-73.5.jpg",
      enemyAttackBack: 30
    },
    "Darth Maul": {
      name: "Darth Maul",
      health: 200,
      attack: 9,
      imageUrl: "https://vignette.wikia.nocookie.net/starwars/images/2/2e/Maulsnarl.jpg/revision/latest?cb=20120826203633",
      enemyAttackBack: 35
    }
  };

  var attacker;
  var challengers = [];
  var defender;
  var countTurn = 1;
  var kills = 0;

  var displayChallenger = function(character, renderArea) {
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
  };

  var gameStart = function() {
    for (var key in characters) {
      displayChallenger(characters[key], "#challengers-section");
    }
  };

  gameStart();

  var challengerUpdate = function(charObj, areaRender) {
    $(areaRender).empty();
    displayChallenger(charObj, areaRender);
  };

  var renderEnemies = function(enemyArr) {
    for (var i = 0; i < enemyArr.length; i++) {
      displayChallenger(enemyArr[i], "#available-to-attack-section");
    }
  };

  var renderMessage = function(message) {
    var gameMessageSet = $("#game-message");
    var newMessage = $("<div>").text(message);
    gameMessageSet.append(newMessage);
  };

  var restartGame = function(resultMessage) {
    var restart = $("<button>Restart</button>").click(function() {
      location.reload();
    });

    var gameState = $("<div>").text(resultMessage);

    $("body").append(gameState);
    $("body").append(restart);
  };

  var clearMessage = function() {
    var gameMessage = $("#game-message");

    gameMessage.text("");
  };

  $("#challengers-section").on("click", ".character", function() {
    var name = $(this).attr("data-name");

    if (!attacker) {
      attacker = characters[name];
      for (var key in characters) {
        if (key !== name) {
          challengers.push(characters[key]);
        }
      }

      $("#challengers-section").hide();
      challengerUpdate(attacker, "#selected-challenger");
      renderEnemies(challengers);
    }
  });

  $("#available-to-attack-section").on("click", ".character", function() {
    var name = $(this).attr("data-name");

    if ($("#defender").children().length === 0) {
      defender = characters[name];
      challengerUpdate(defender, "#defender");

      $(this).remove();
      clearMessage();
    }
  });

  $("#attack-button").on("click", function() {
    if ($("#defender").children().length !== 0) {
      var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * countTurn + " damage.";
      var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
			clearMessage();
			
      defender.health -= attacker.attack * countTurn;

      if (defender.health > 0) {
        challengerUpdate(defender, "#defender");

        renderMessage(attackMessage);
				renderMessage(counterAttackMessage);
				
        attacker.health -= defender.enemyAttackBack;
        challengerUpdate(attacker, "#selected-character");

        if (attacker.health <= 0) {
          clearMessage();
          restartGame("You were defeated, GAME OVER.");
          $("#attack-button").off("click");
        }
      }
      else {
        
        $("#defender").empty();

        var gameStateMessage = "You have defeated " + defender.name + ", want a new enemy to fight?";
        renderMessage(gameStateMessage);

        kills++;

       
        if (kills >= challengers.length) {
          clearMessage();
          $("#attack-button").off("click");
          restartGame("Congratulations, you won! GAME OVER.");
        }
      }
      countTurn++;
    }
    else {
      clearMessage();
      renderMessage("No enemies");
    }
  });
});
