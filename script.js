var selectedRow = null

//data Json 
let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: ` <button class= "btn-envalid">En validation</button>`,
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
      Action:` <button onClick="onDelete(this)" style="font-size:24px"> <i class="fa fa-trash-o"></i></button>
      `
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status:` <button class= "btn-valid" >Validé</button>`,
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
      Action:` <button onClick="onDelete(this)" style="font-size:24px"> <i class="fa fa-trash-o"></i></button>
      `

    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status:` <button class= "btn-rejete ">Rejeté</button>`,
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
      Action:` <button onClick="onDelete(this)" style="font-size:24px"> <i class="fa fa-trash-o"></i></button>
      `

    }
  ]

buildTable(users)



function buildTable(data){
    var table = document.getElementById('storeList')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].createdDate }</td>
                        <td>${data[i].status}</td>
                        <td>${data[i].firstName}</td>
                        <td>${data[i].lastName}</td>
                        <td>${data[i].userName}</td>
                        <td>${data[i].registrationNumber}</td>
                        <td>${data[i].Action}</td>
                        
                  </tr>`
        table.innerHTML += row


    }
}







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


function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["createdDate"] = document.getElementById("createdDate").value;
    formData["status"] = document.getElementById("status").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["userName"] = document.getElementById("userName").value;
    formData["registrationNumber"] = document.getElementById("registrationNumber").value;

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.createdDate;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.status;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.firstName;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.lastName;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.userName;
    cell7 = newRow.insertCell(6);
		cell7.innerHTML = data.registrationNumber;
    cell8 = newRow.insertCell(7);
        cell8.innerHTML = ` 
         <button onClick="onDelete(this)" style="font-size:24px"> <i class="fa fa-trash-o"></i></button>
        `;
}



//Delete the data
function onDelete(td) {
    if (confirm('tu veux supprimé ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//pop
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
 