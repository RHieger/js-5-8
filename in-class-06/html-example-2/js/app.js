window.onload = function()	{

	var elem = document.getElementById('puppy');
	console.log(elem);

	var btn = document.getElementById('myButton');

	btn.onclick = function(event)	{

		event.preventDefault();

		var newElem = document.createElement('img');

		newElem.src = 'http://loremflickr.com/320/240/dog?random=' + parseInt(Math.random() * 1000);

		elem.appendChild(newElem);

		var message = document.getElementById('msg');

		var messageTxt = docment.createTextNode('I told you not to click me!');

		message.appendChild(messageTxt);

	}	// end btn.onclick


}	// end window.onload