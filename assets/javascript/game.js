// var crys1 = Math.floor(Math.random() * (12 - 1) + 1);
// var crys2 = Math.floor(Math.random() * (12 - 1) + 1);
// var crys3 = Math.floor(Math.random() * (12 - 1) + 1);
// var crys4 = Math.floor(Math.random() * (12 - 1) + 1);


var win = 0;
var loss = 0;
var yourScore;
// var target = [""];
				

//Functions

	function reset()
	{
		//reset
		 targetScore = Math.floor(Math.random() * (120 - 19) + 19);
		//  console.log('randomNumber =  ' + randNum);
		 crys1 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys2 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys3 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys4 = Math.floor(Math.random() * (12 - 1) + 1)
		 yourScore = 0;

		 //HTML
		 $("#yourTargetScore").html(targetScore);
		 $("#yourScoreTotal").html(yourScore);
		 start();
	}

	function start()
	{
		 //reset
		 targetScore = Math.floor(Math.random() * (120 - 19) + 19);
		 //
		 crys1 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys2 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys3 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys4 = Math.floor(Math.random() * (12 - 1) + 1);
		 yourScore = 0;

		 //HTML
		 $("#yourTargetScore").html(targetScore);
		 $("#yourScoreTotal").html(yourScore);
            
        
        $("#red".on("click", function() {
            crys1 = Math.floor(Math.random() * (12 - 1) + 1); 
            red = crys1
            // yourScoreTotal.push(crys1);
        }));
        //  $("#red").attr("value", crys1);
            // var test = $("red").attr("value");
		// // var test = $('.crystal1').attr("value");
	
        $("#yellow".on("click", function() {
            crys2 = Math.floor(Math.random() * (12 - 1) + 1); 
            yellow = crys2}));
		// $("#yellow").attr("value", crys2);
		// var test = $("#yellow").attr("value");
	
        $("#green".on("click", function() {
            crys3 = Math.floor(Math.random() * (12 - 1) + 1); 
            green = crys3}));
		// $("#green").attr("value", crys3);
		// var test = $("#green").attr("value");
		
        $("#blue".on("click", function() {
            crys4 = Math.floor(Math.random() * (12 - 1) + 1); 
            blue = crys4}));
		// $("#blue").attr("value", crys4);
		// var test = $("#blue").attr("value");
	
		//Click saves to final score
		// $("#buttons").on('click', function(){ 

			// var test1 = $(this).attr('value');
			// //Click adds to final score 
			// yourScore = parseInt(yourScore) + parseInt(test1);
			// // console.log('finalScore***  ' + yourScore);
			// $("#yourScoreTotal").html(yourScore);
        document.onkeyup = function(event) {
            var yourScore = event.key;
            var target = targetScore[Math.floor(Math.random() * targetScore.length)];

			if(targetScore === yourScore)
			{
				win++;
                $("wins").html(win);
				$("#yourScoreTotal").html(0);
				reset();
				
			}
			else if (yourScore > targetScore)
			{
				loss++;
				$("#losses").html(loss);
				$("yourScoreTotal").html(0);
				reset();
			}
        };
		// }); 


}

    start();
// start();
















// $(document).ready(function() {
//     var random = [];
//     for (var i = 19; i<121; i++) {
//         random.push(i);
//     }

//     var crystals = [];
//     for (var c = 1; c < 13; c++) {
//         crystals.push(c);
//     }

//     var randomNumber;
//     var crystalNumbers = [];
//     var c1;
//     var c2;
//     var c3;
//     var c4;

// var yourTotalScore = 0;
//     var wins = 0;
//     var losses = 0;

//     function pickRandomNum(arr) {
//         var x = arr[Math.floor(Math.random() * arr.length)];
//         randomNumber = x;
//         $("#yourTargetScore").html(randomNumber);
//     }
//     function pickRandomCrystals(arr) {

// 		for (var y = 0; y < 4; y++){

// 			var a = arr[Math.floor(Math.random() * arr.length)];

// 			crystalNumbers.push(a);
//         }
//     function crystalValues(arr) {
//         for (i = 0; i < arr.length; i++) {
//              $("btn btn-" + (i+1)).attr("value", arr[i]);
//             }
//             c1 = arr[0];
//             c2 = arr[1];
//             c3 = arr[2];
//             c4 = arr[3];
//         }    

//     function gameReset(x) {

//         crystalNumbers = []; 
    
//         pickRandomNumber(i);
    
//         pickRandomCrystals(crystals);
    
//         crystalValues(crystalNumbers);
    
//         totalScore = 0;
//         $("#yourScoreTotal").html(totalScore);
//         alert(x);
//         } 
//     pickRandomNumber(random); 
//     pickRandomCrystals(crystals); 
//     crystalValues(crystalNumbers);

//     $("btn btn-danger").on("click", function() {

//         totalScore += cSuccess;
//         $("#yourScoreTotal").html(totalScore);
//     });

//     $("btn btn-warning").on("click", function() {

//         totalScore += c2;
//         $("youScoreTotal").html(totalScore);
//     });

//     $("btn btn-success").on("click", function() {

//         totalScore += c3;
//         $("#yourScoreTotal").html(totalScore);
//     });

//     $("btn btn-primary").on("click", function() {

//         totalScore += c4;
//         $("#yourScoreTotal").html(totalScore);
//     });

// $("a").on("click", function() {
//     // this is what happens if the user wins
//     if (totalScore == randNumber) {

//         wins++;
//         $("#yourScoreTotal").html(totalScore);
//         $("#wins").html("Wins: " + wins);

//     }

//     else if (totalScore > randNumber){

//         losses++;
//         $("#yourScoreTotal").html(totalScore);
//         $("#losses").html("Losses: " + losses);

//     }


//     });
// // var num1= $(".red");
// // var num2= $(".yellow");
// // var num3= $(".green");
// // var num4= $(".blue");


// // $( document ).ready(function(){
// //     var Random=Math.floor(Math.random()*102+19)
    
// //     // Display random number
// //     $("#yourTargetScore").text(Random);
    
// //     //Generate random number for each crystal
// //     var num1= Math.floor(Math.random()*12+1)
// //     var num2= Math.floor(Math.random()*12+1)
// //     var num3= Math.floor(Math.random()*12+1)
// //     var num4= Math.floor(Math.random()*12+1)
    
// //     // Variables to keep track of wins, losses and total
// //     var yourTotalScore= 0; 
// //     var wins= 0;
// //     var losses = 0;
    
  
// //   $("#wins").text(wins);
// //   $("#losses").text(losses);
  
// //   // Reset game
// //   function reset(){
// //         Random=Math.floor(Math.random()*102+19);
// //         console.log(Random)
// //         $("#yourTargetScore").text(Random);
// //         num1= Math.floor(Math.random()*12+1);
// //         num2= Math.floor(Math.random()*12+1);
// //         num3= Math.floor(Math.random()*12+1);
// //         num4= Math.floor(Math.random()*12+1);
// //         playerTotal= 0;
// //         $("#yourTotalScore").text(playerTotal);
// //         } 
//   // Display wins
// //   function woohoo(){
// //   alert("Congrats! You won!");
// //     wins++; 
// //     $('#wins').text(wins);
// //     reset();
// //   }
// //   // Display losses
// //   function loser(){
// //   alert ("Sorry! You lose!");
// //     losses++;
// //     $('#losses').text(losses);
// //     reset()
// //   }
//   // Clicking crystals
//     // $("button-red").on ("click", function(){
//     //   playerTotal = playerTotal + num1;
      
//     //   $("#yourTotalScore").text(playerTotal); 
//             //Win & lose conditions
//     //       if (playerTotal == Random){
//     //         woohoo();
//     //       }
//     //       else if ( playerTotal > Random){
//     //         loser();
//     //       }   
//     // })  
//     // $(".blue").on ('click', function(){
//     //   playerTotal = playerTotal + num2;
//     //   console.log("#yourTotalScore= " + playerTotal);
//     //   $("#yourTotalScore").text(playerTotal); 
//         //   if (playerTotal == Random){
//         //     woohoo();
//         //   }
//         //   else if ( playerTotal > Random){
//         //     loser();
//         //   } 
//     // })  
//     // $(".yellow").on ('click', function(){
//     //   playerTotal = playerTotal + num3;
//     //   console.log("#yourTotalScore= " + playerTotal);
//     //   $("#yourTotalScore").text(playerTotal);
  
//         //     if (playerTotal == Random){
//         //     woohoo();
//         //   }
//         //   else if ( playerTotal > Random){
//         //     loser();
//         //   } 
//     // })  
//     // $(".green").on ('click', function(){
//     //   playerTotal = playerTotal + num4;
//     //   console.log("#yourTotalScore= " + playerTotal);
//     //   $("#yourTotalScore").text(playerTotal); 
        
//         //     if (playerTotal == Random){
//         //     woohoo();
//         //   }
//         //   else if ( playerTotal > Random){
//         //     loser();
//         //   }
//     // });   