function addStudent(){
	var table = document.getElementById("students");
	var newRow = table.insertRow();
	cell1 = newRow.insertCell(0);
	cell2 = newRow.insertCell(1);
	cell3 = newRow.insertCell(2);
	name = document.getElementById("name").value;
	surname = document.getElementById("surname").value;
	faculty = document.getElementById("faculty").value;
	cell1.innerHTML = name;
	cell2.innerHTML = surname;
	cell3.innerHTML = faculty;
	cell3.style.fontWeight = "bold";
}
document.getElementById("addStudent").onclick = function() {addStudent()};