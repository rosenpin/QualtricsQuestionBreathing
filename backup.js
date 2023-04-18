
    function a(){         
	// Get the div element by id
        var div = document.getElementById("timer");
        var img = document.getElementById("img");

        var finish = document.getElementById("finish");
        finish.hide();

        setTimeout(() => {
			var next = jQuery("#NextButton");
            next.prop( "disabled", false);
            div.hide();
            img.hide();
            finish.show();
        }, 2 * 60 * 1000);


        // Set the initial values for the timer and action
        var timer = 4;
        var action = "להכניס אוויר";

        // Define a function to update the div text
        function updateDiv() {
            // Display the timer and action
            div.innerHTML = action + " במשך <span id='timer_time' style='font-weight: bold; font-size: 40px; color:'>" + timer + "</span> שניות<br>";
            timee = document.getElementById("timer_time");
            // Check the current action and update accordingly
            if (action == "להכניס אוויר") {
                // If breathing in, increment the timer by 1
                timer--;
                // If timer reaches 4, switch to holding breath
                if (timer == 0) {
                    action = "להחזיק אוויר";
                    timer = 7;
                }
                timee.style.color = "DarkCyan"
                img.src = "https://raw.githubusercontent.com/rosenpin/QualtricsQuestionBreathing/master/breath_in.png"
            } else if (action == "להחזיק אוויר") {
                // If holding breath, increment the timer by 1
                timer--;
                // If timer reaches 7, switch to exhaling
                if (timer == 0) {
                    action = "להוציא אוויר";
                    timer = 8;
                }
                timee.style.color = "indigo"
                img.src = "https://raw.githubusercontent.com/rosenpin/QualtricsQuestionBreathing/master/hold_in.png"
            } else if (action == "להוציא אוויר") {
                // If exhaling, increment the timer by 1
                timer--;
                // If timer reaches 8, switch to breathing in
                if (timer == 0) {
                    action = "להכניס אוויר";
                    timer = 4;
                }
                timee.style.color = "IndianRed"
                img.src = "https://raw.githubusercontent.com/rosenpin/QualtricsQuestionBreathing/master/breath_out.png"
            }
        }

        updateDiv();
        // Set an interval to call the updateDiv function every second
        setInterval(updateDiv, 1000);
	
	};
	a();
	// timer
	var timer = document.getElementById("timer_total");
	// Set the initial time in seconds
var time = 119;

	function updateTimer(){
		  // Calculate the minutes and seconds from the time
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  // Pad the seconds with a zero if needed
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the timer
if (time % 10 == 0 || time == 0) {
			  timer.textContent = "זמן נותר: " + minutes + ":" + formattedSeconds;
  }

  // Decrease the time by one second
  time--;

  // Stop the timer when it reaches zero
  if (time < 0) {
    clearInterval(interval);
    timer.textContent = "00:00";
  }
	}
// Update the timer every second
	updateTimer();
var interval = setInterval(updateTimer, 1000);
