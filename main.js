const container = document.getElementById('container');

function incRowCount(){

}

function createTable(){
	const tableNode = document.createElement('table');
	tableNode.id = 'createdTable';

	

    document.getElementById('btnAddRow').disabled=false;
    document.getElementById('btnDeleteRow').disabled=false;
    document.getElementById('rowNumber').disabled=false;
    document.getElementById('btnCreate').disabled=true;

	container.appendChild(tableNode);
}

document.getElementById('btnCreate').addEventListener('click', createTable);

function addRow(){
	const table = document.getElementById('createdTable');
	const tr = document.createElement('tr');
	
	const tdNum = document.createElement('td');
	tdNum.innerText = table.childNodes.length+1;

	const tdValue = document.createElement('td');
	tdValue.innerText = '000000';

	tr.appendChild(tdNum);
	tr.appendChild(tdValue);

	table.appendChild(tr);
}

function deleteRow(){
	const table = document.getElementById('createdTable');
	const rowToRemove = parseInt(document.getElementById('rowNumber').value);
	table.childNodes[rowToRemove - 1].remove();
}

/*function createTable() {
    let body = document.getElementsByTagName('body')[0];
    let tbl = document.createElement('table');
    tbl.style.width = '30%';
    tbl.setAttribute('border', '1');
    let tbdy = document.createElement('tbody');
    for (let i = 0; i < 3; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < 2; j++) {
            let td = document.createElement('td');
            
            td.appendChild(document.createTextNode('text'));
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }

function addRows(){ 
	let table = document.getElementById('emptbl');
	let rowCount = table.rows.length;
	let cellCount = table.rows[0].cells.length; 
	let row = table.insertRow(rowCount);

	for(let i = 0; i < cellCount; i++){
		let cell = 'cell'+i;
		cell = row.insertCell(i);
		let copycel = document.getElementById('col'+i).innerHTML;
		cell.innerHTML=copycel;
		if(i == 3){ 
			let radioinput = document.getElementById('col3').getElementsByTagName('input'); 
			for(let j = 0; j <= radioinput.length; j++) { 
				if(radioinput[j].type == 'radio') { 
					let rownum = rowCount;
					radioinput[j].name = 'gender['+rownum+']';
				}
			}
		}
	}
}
function delete_Rows(){
	let table = document.getElementById('emptbl');
	let rowCount = table.rows.length;
	if(rowCount > '2'){
		let row = table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		alert('There should be atleast one row');
	}
}*/