function weightConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputPounds = document.getElementById("inputPounds");
  var inputKilograms = document.getElementById("inputKilograms");
  var inputOunces = document.getElementById("inputOunces");
  var inputGrams = document.getElementById("inputGrams");
  var inputStones = document.getElementById("inputStones");
  if (source=="inputPounds") {
    inputKilograms.value=(valNum/2.2046).toFixed(2);
    inputOunces.value=(valNum*16).toFixed(2);
    inputGrams.value=(valNum/0.0022046).toFixed();
    inputStones.value=(valNum*0.071429).toFixed(3);
    inputMton.value=(valNum/2204.6).toFixed(5);
  }
  if (source=="inputKilograms") {
    inputPounds.value=(valNum*2.2046).toFixed(2);
    inputOunces.value=(valNum*35.274).toFixed(2);
    inputGrams.value=(valNum*1000).toFixed();
    inputStones.value=(valNum*0.1574).toFixed(3);
	inputMton.value=(valNum/1000).toFixed(5);

  }
  if (source=="inputMton") {
    inputPounds.value=(valNum*2204.6).toFixed(2);
    inputOunces.value=(valNum*35274).toFixed(2);
    inputGrams.value=(valNum*1000000).toFixed();
    inputStones.value=(valNum*157.4).toFixed(3);
	inputKilograms.value=(valNum*1000).toFixed(4);

  }
  if (source=="inputOunces") {
    inputPounds.value=(valNum*0.062500).toFixed(4);
    inputKilograms.value=(valNum/35.274).toFixed(4);
    inputGrams.value=(valNum/0.035274).toFixed(1);
    inputStones.value=(valNum*0.0044643).toFixed(4);
	inputMton.value=(valNum/35274).toFixed(4);

  }
  if (source=="inputGrams") {
    inputPounds.value=(valNum*0.0022046).toFixed(4);
    inputKilograms.value=(valNum/1000).toFixed(4);
    inputOunces.value=(valNum*0.035274).toFixed(3);
    inputStones.value=(valNum*0.00015747).toFixed(5);
	inputMton.value=(valNum/1000000).toFixed(5);

  }
  if (source=="inputStones") {
    inputPounds.value=(valNum*14).toFixed(1);
    inputKilograms.value=(valNum/0.15747).toFixed(1);
    inputOunces.value=(valNum*224).toFixed();
    inputGrams.value=(valNum/0.00015747).toFixed(5);
	inputMton.value=(valNum/157.47).toFixed(5);


  }

}


function temperatureConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputFahrenheit = document.getElementById("inputFahrenheit");
  var inputCelsius = document.getElementById("inputCelsius");
  var inputKelvin = document.getElementById("inputKelvin");
  if (source=="inputFahrenheit") {
    inputCelsius.value=((valNum-32)/1.8).toFixed(2);
    inputKelvin.value=(((valNum-32)/1.8)+273.15).toFixed(2);
  }
  if (source=="inputCelsius") {
    inputFahrenheit.value=((valNum*1.8)+32).toFixed(2);
    inputKelvin.value=((valNum)+273.15).toFixed(2);
  }
  if (source=="inputKelvin") {
    inputFahrenheit.value=(((valNum-273.15)*1.8)+32).toFixed(2);
    inputCelsius.value=((valNum)-273.15).toFixed(2);
  }
}


function lengthConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputFeet = document.getElementById("inputFeet");
  var inputMeters = document.getElementById("inputMeters");
  var inputInches = document.getElementById("inputInches");
  var inputcm = document.getElementById("inputcm");
  var inputYards = document.getElementById("inputYards");
  var inputKilometers = document.getElementById("inputKilometers");
  var inputMiles = document.getElementById("inputMiles");
  if (source=="inputFeet") {
    inputMeters.value=(valNum/3.2808).toFixed(2);
    inputInches.value=(valNum*12).toFixed(2);
    inputcm.value=(valNum/0.032808).toFixed();
    inputYards.value=(valNum*0.33333).toFixed(2);
    inputKilometers.value=(valNum/3280.8).toFixed(5);    
    inputMiles.value=(valNum*0.00018939).toFixed(5);
  }
  if (source=="inputMeters") {
    inputFeet.value=(valNum*3.2808).toFixed(2);
    inputInches.value=(valNum*39.370).toFixed(2);
    inputcm.value=(valNum/0.01).toFixed();
    inputYards.value=(valNum*1.0936).toFixed(2);
    inputKilometers.value=(valNum/1000).toFixed(5);    
    inputMiles.value=(valNum*0.00062137).toFixed(5);
  }
  if (source=="inputInches") {
    inputFeet.value=(valNum*0.083333).toFixed(3);
    inputMeters.value=(valNum/39.370).toFixed(3);
    inputcm.value=(valNum/0.39370).toFixed(2);
    inputYards.value=(valNum*0.027778).toFixed(3);    
    inputKilometers.value=(valNum/39370).toFixed(6);
    inputMiles.value=(valNum*0.000015783).toFixed(6);
  }
  if (source=="inputcm") {
    inputFeet.value=(valNum*0.032808).toFixed(3);
    inputMeters.value=(valNum/100).toFixed(3);
    inputInches.value=(valNum*0.39370).toFixed(2);
    inputYards.value=(valNum*0.010936).toFixed(3);    
    inputKilometers.value=(valNum/100000).toFixed(6);
    inputMiles.value=(valNum*0.0000062137).toFixed(6);
  }
  if (source=="inputYards") {
    inputFeet.value=(valNum*3).toFixed();
    inputMeters.value=(valNum/1.0936).toFixed(2);
    inputInches.value=(valNum*36).toFixed();
    inputcm.value=(valNum/0.010936).toFixed();
    inputKilometers.value=(valNum/1093.6).toFixed(5);
    inputMiles.value=(valNum*0.00056818).toFixed(5);
  }
  if (source=="inputKilometers") {
    inputFeet.value=(valNum*3280.8).toFixed();
    inputMeters.value=(valNum*1000).toFixed();
    inputInches.value=(valNum*39370).toFixed();
    inputcm.value=(valNum*100000).toFixed();
    inputYards.value=(valNum*1093.6).toFixed();
    inputMiles.value=(valNum*0.62137).toFixed(2);    
  }
  if (source=="inputMiles") {
    inputFeet.value=(valNum*5280).toFixed();
    inputMeters.value=(valNum/0.00062137).toFixed();
    inputInches.value=(valNum*63360).toFixed();
    inputcm.value=(valNum/0.0000062137).toFixed();
    inputYards.value=(valNum*1760).toFixed();
    inputKilometers.value=(valNum/0.62137).toFixed(2);    
  }
}



function landConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputsqcm = document.getElementById("inputsqcm");
  var inputsqMeters = document.getElementById("inputsqMeters");
  var inputsqfoot = document.getElementById("inputsqfoot");
  var inputsqyard = document.getElementById("inputsqyard");
  var inputsqinch = document.getElementById("inputsqinch");
  var inputdecimal = document.getElementById("inputdecimal");
  var inputbigha = document.getElementById("inputbigha");
  var inputacre = document.getElementById("inputacre");
  var inputhectare = document.getElementById("inputhectare");
  if (source=="inputsqcm") {
    inputsqMeters.value=(valNum/10000).toFixed(5);
    inputsqfoot.value=(valNum*10.7639/10000).toFixed(5);
    inputsqyard.value=(valNum*1.196/10000).toFixed(5);
    inputsqinch.value=(valNum*1550.0031/10000).toFixed(4);
    inputdecimal.value=(valNum*0.0247/10000).toFixed(8);    
    inputbigha.value=(valNum*.0007485/10000).toFixed(8);
    inputacre.value=(valNum*0.000247/10000).toFixed(8);
	inputhectare.value=(valNum/100000000).toFixed(8);
  }
  if (source=="inputsqMeters") {
	inputsqcm.value=(valNum*10000).toFixed();
    inputsqfoot.value=(valNum*10.7639).toFixed();
    inputsqyard.value=(valNum*1.196).toFixed(3);
    inputsqinch.value=(valNum*1550.0031).toFixed(4);
    inputdecimal.value=(valNum*0.0247).toFixed(3);    
    inputbigha.value=(valNum*.0007485).toFixed(5);
    inputacre.value=(valNum*0.000247).toFixed(5);
	inputhectare.value=(valNum/10000).toFixed(5);
	
  }
  if (source=="inputdecimal") {
    inputsqcm.value=(valNum*100000000/247).toFixed();
	inputsqMeters.value=(valNum*10000/247).toFixed();
    inputsqfoot.value=(valNum*107639/247).toFixed();
    inputsqyard.value=(valNum*11959.9/247).toFixed(2);
    inputsqinch.value=(valNum*15500031/247).toFixed();
    inputhectare.value=(valNum/247).toFixed(3);    
    inputbigha.value=(valNum*7.485/247).toFixed(3);
    inputacre.value=(valNum/100).toFixed(3);
  }
  if (source=="inputsqfoot") {
    inputsqcm.value=(valNum*100000000/107639).toFixed(3);
	inputsqMeters.value=(valNum*10000/107639).toFixed(3);
    inputhectare.value=(valNum/107639).toFixed(6);
    inputsqyard.value=(valNum*11959.9/107639).toFixed(3);
    inputsqinch.value=(valNum*15500031/107639).toFixed(3);
    inputdecimal.value=(valNum*247/107639).toFixed(5);    
    inputbigha.value=(valNum*7.485/107639).toFixed(5);
    inputacre.value=(valNum*2.47/107639).toFixed(5);
  }
  if (source=="inputsqyard") {
    inputsqcm.value=(valNum*100000000/11960).toFixed(3);
	inputsqMeters.value=(valNum*10000/11960).toFixed(3);
    inputsqfoot.value=(valNum*107639/11960).toFixed(3);
    inputhectare.value=(valNum/11960).toFixed(5);
    inputsqinch.value=(valNum*15500031/11960).toFixed(3);
    inputdecimal.value=(valNum*247/11960).toFixed(4);    
    inputbigha.value=(valNum*7.485/11960).toFixed(5);
    inputacre.value=(valNum*2.47/11960).toFixed(5);
  }
  if (source=="inputhectare") {
    inputsqcm.value=(valNum*100000000).toFixed();
	inputsqMeters.value=(valNum*10000).toFixed();
    inputsqfoot.value=(valNum*107639).toFixed();
    inputsqyard.value=(valNum*11959.9).toFixed(2);
    inputsqinch.value=(valNum*15500031).toFixed();
    inputdecimal.value=(valNum*247).toFixed(3);    
    inputbigha.value=(valNum*7.485).toFixed(3);
    inputacre.value=(valNum*2.47).toFixed(2);
  }
  if (source=="inputsqinch") {
    inputsqcm.value=(valNum*100000000/15500031).toFixed(5);
	inputsqMeters.value=(valNum*10000/15500031).toFixed(5);
    inputsqfoot.value=(valNum*107639/15500031).toFixed(5);
    inputsqyard.value=(valNum*11959.9/15500031).toFixed(5);
    inputhectare.value=(valNum/15500031).toFixed(8);
    inputdecimal.value=(valNum*247/15500031).toFixed(5);    
    inputbigha.value=(valNum*7.485/15500031).toFixed(7);
    inputacre.value=(valNum*2.47/15500031).toFixed(7);
  }
  if (source=="inputbigha") {
    inputsqcm.value=(valNum*100000000/7.485).toFixed(3);
	inputsqMeters.value=(valNum*10000/7.485).toFixed(3);
    inputsqfoot.value=(valNum*107639/7.485).toFixed(3);
    inputsqyard.value=(valNum*11959.9/7.485).toFixed(3);
    inputsqinch.value=(valNum*15500031/7.485).toFixed(3);
    inputdecimal.value=(valNum*33).toFixed(2);    
    inputhectare.value=(valNum/7.485).toFixed(3);
    inputacre.value=(valNum*2.47/7.485).toFixed(3);
  }
  if (source=="inputacre") {
    inputsqcm.value=(valNum*100000000/2.47).toFixed(2);
	inputsqMeters.value=(valNum*10000/2.47).toFixed(2);
    inputsqfoot.value=(valNum*107639/3.47).toFixed(2);
    inputsqyard.value=(valNum*11959.9/2.47).toFixed(2);
    inputsqinch.value=(valNum*15500031/2.47).toFixed(2);
    inputdecimal.value=(valNum*100).toFixed(3);    
    inputbigha.value=(valNum*3.03).toFixed(3);
    inputhectare.value=(valNum/2.47).toFixed(2);
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