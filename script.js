function getVal() {
	var val_input=document.getElementById('input');
	var val = val_input.value;
	var div=document.getElementById('value_print1');
	var rm_val = parseInt(Math.random()*10);
	document.getElementById('value_print').innerHTML = val;
	if (rm_val>val) {
		div.innerHTML="YES";
	}
	else
	{
		div.innerHTML="NO";
	}	
}