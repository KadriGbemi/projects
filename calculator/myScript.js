	function num(number)
	{
       document.form.answer.value +=number;
    }	
	
	function doplus()
	{
	document.form.answer.value += "+";
	}

	function dodot()
	{
	document.form.answer.value += ".";
	}

	function domul()
	{
	document.form.answer.value += "*";
	}

	function dodiv()
	{
	document.form.answer.value += "/";
	}

	function dosub()
	{
	document.form.answer.value += "-";
	}

	function domodu()
	{
	document.form.answer.value += "%";
	}

	function evalu()
	{		
    var evali = eval(document.form.answer.value)
    document.form.answer.value = evali;
    }	

    function mDown(obj) {
	    obj.style.backgroundColor = "#1ec5e5";
	}

	function mUp(obj) {
	    obj.style.backgroundColor="#e7e7e7";
	}

	function mDn(obj) {
	    obj.style.backgroundColor = "Orange";
	}

	function mup(obj) {
	    obj.style.backgroundColor="#e7e7e7";
	}

	function mDwn(obj) {
	    obj.style.backgroundColor = "#D94A38";
	}

	function mU(obj) {
	    obj.style.backgroundColor="#e7e7e7";
	}

	function m(obj) {
	    obj.style.backgroundColor = "MediumSeaGreen";
	}

	function mu(obj) {
	    obj.style.backgroundColor="#e7e7e7";
	}


	function myinput(x) {
    x.style.fontSize = "25px";
	}

	function myform(x) {
    x.style.borderColor = "MediumSeaGreen";

	}

	function c(number)
	{
	document.form.answer.value = null;
	}

	function ce(number)
	{
	var number = document.form.answer.value;	
	var num = number.slice(0, -1)
	document.form.answer.value = num;
	}





	