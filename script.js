var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["nickName"] = document.getElementById("nickName").value;
    formData["sex"] = document.getElementById("sex").value;
    formData["age"] = document.getElementById("age").value;
    formData["qualification"] = document.getElementById("qualification").value;
    formData["permanentAddress"] = document.getElementById("permanentAddress").value;
    formData["communicationAddress"] = document.getElementById("communicationAddress").value;
    formData["note"] = document.getElementById("note").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.nickName;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.sex;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.qualification;
    cell7 = newRow.insertCell(6);
		cell7.innerHTML = data.permanentAddress;
    cell8 = newRow.insertCell(7);
		cell8.innerHTML = data.communicationAddress;
    cell9 = newRow.insertCell(8);
		cell9.innerHTML = data.note;
    cell10 = newRow.insertCell(9);
        cell10.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nickName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sex").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("qualification").value = selectedRow.cells[5].innerHTML;
    document.getElementById("permanentAddress").value = selectedRow.cells[6].innerHTML;
    document.getElementById("communicationAddress").value = selectedRow.cells[7].innerHTML;
    document.getElementById("note").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.nickName;
    selectedRow.cells[3].innerHTML = formData.sex;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.qualification;
    selectedRow.cells[6].innerHTML = formData.permanentAddress;
    selectedRow.cells[7].innerHTML = formData.communicationAddress;
    selectedRow.cells[8].innerHTML = formData.note;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("nickName").value = '';
    document.getElementById("sex").value = '';
    document.getElementById("age").value = '';
    document.getElementById("qualification").value = '';
    document.getElementById("permanentAddress").value = '';
    document.getElementById("communicationAddress").value = '';
    document.getElementById("note").value = '';
    selectedRow = null;
}


