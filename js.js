

function number3(){
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	var c = document.getElementById("number4").innerHTML;
	//alert(c = Number(a) + Number(b));
	document.getElementById("suma").innerHTML = document.getElementById("suma").innerHTML + ' ' + (Number(a) + Number(b));
}

function soption(){
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;
	var c = document.getElementById("smile").value;
	if (c == 0){
	document.getElementById("suma").innerHTML = (Number(a) + Number(b));
	return true;
	}
	if (c == 1){
	document.getElementById("suma").innerHTML = (Number(a) - Number(b));
	return true;
	}
	if (c == 2){
	document.getElementById("suma").innerHTML = (Number(a) / Number(b));
	return true;
	}
	if (c == 3){
	document.getElementById("suma").innerHTML = (Number(a) * Number(b));
	return true;
	}
}

function treeButton(){

	var sum = document.getElementById("tree").value;
	var star = document.getElementById("starTree");
	star.innerHTML = " ";
	if (1 >= sum || sum >= 51){
		star.innerHTML = star.innerHTML + "Wrong number. Please add number form 2 to 50";
		}		
	else {
	for (i = 0; i < sum; i++){
		for (c = 0; c < (sum - i); c++){
		star.innerHTML = star.innerHTML + "&nbsp;";
		}
		for (b = 0; b <= i; b++){
			star.innerHTML = star.innerHTML + "*";
		}
		star.innerHTML = star.innerHTML + "<br>";
		}
		}
}
