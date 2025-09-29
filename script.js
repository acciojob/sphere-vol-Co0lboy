function volume_sphere(event) {
    //Write your code here
	event.preventDefault();

	const radius=parseFloat(document.getElementById('radius').value);
	if(isNaN(radius)||radius<0){
		alert("Please enter a valid non-negative number.");
		document.getElementById('volume').value='';
		return;
	}
	const volume=4/3*Math.PI*Math.pow(radius,3);
	document.getElementById('volume').value=volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
