function yieldConversion(source,valNum) {
  valNum = parseFloat(valNum);
  var weight = document.getElementById("weight");
  var weightAcre = document.getElementById("weightAcre");
  var weightBigha = document.getElementById("weightBigha");
  if (source=="weight") {
    weightAcre.value=((valNum*100)/247).toFixed(2);
    weightBigha.value=(((valNum*33)/247)+273.15).toFixed(2);
  }
  if (source=="weightBigha") {
    weight.value=((valNum-32)/1.8).toFixed(2);
    weightAcre.value=(((valNum-32)/1.8)+273.15).toFixed(2);
  }
  
}


		/* Creating function in HTML for backspace operation */ 
		function backspace(calc) {											 
			size = calc.display.value.length; 
			calc.display.value = calc.display.value.substring(0, size-1); 
		} 
		
		/* Creating function to calculate factorial of element */ 
		function calculate(calc) { 
			
			/* Check if function include ! character then 
			calculate factorial of number */ 
			if(calc.display.value.includes("!")) { 
				
				size = calc.display.value.length; 
				n = Number(calc.display.value.substring(0, size-1)); 
				f = 1; 
				
				for(i = 2; i <= n; i++) 
					f = f*i; 
				calc.display.value = f; 
			} 
			
			/* If function include % character then calculate 
			the % of number */ 
			else if(calc.display.value.includes("%")) { 
				
				size = calc.display.value.length; 
				n = Number(calc.display.value.substring(0, size-1)); 
				calc.display.value = n/100; 
			} 

			else	 
				/* Otherwise evalute and execute output */ 
				calc.display.value = eval(calc.display.value); 
		} 