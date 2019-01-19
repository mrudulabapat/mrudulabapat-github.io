var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementsByTagName('ul')[0];

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click",toggleDone);
	ul.appendChild(li);
	input.value = "";

	var delBtn = document.createElement("button");
	var delText = document.createTextNode("Delete");
	delBtn.appendChild(delText);
	delBtn.addEventListener("click", deleteItem);
	delBtn.classList.add("deleteBtn");
  	li.append(delBtn);

  	function toggleDone() {
    li.classList.toggle("done");
  }

function deleteItem(){
	li.remove();
}
  	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);