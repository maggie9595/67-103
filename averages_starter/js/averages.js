	function setFocus(){
		window.document.avgForm.number1.focus();
	}
	
	function calculateAverage(num1,num2,num3){
		// calculate the average of three numbers
		var average = ((num1 + num2 + num3) / 3);
		return Math.round(average * 100) / 100;
		//round the average off to two decimal places.
	}
	
	function updateDisplay(result) {
		// updates the value of the average display on page
		document.getElementById("displayAverage").innerHTML = result;
		}

	function GetNumbersAndAverage(){
		// get the three values provided
		var num1 = document.getElementById("avgForm").elements[0].value;
		var num2 = document.getElementById("avgForm").elements[1].value;
		var num3 = document.getElementById("avgForm").elements[2].value;

		// calculate the average and round it off to two decimal places
		var avg = calculateAverage(num1 * 1,num2 * 1,num3 * 1);

		// display the results
		updateDisplay(avg);
	}

