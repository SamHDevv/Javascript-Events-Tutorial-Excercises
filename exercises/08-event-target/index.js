window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		var whatClicked = event.target.id;
		alert(whatClicked);
	});
};

// function myFunction(event) {
//   var x = event.target;
//   document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
// }
