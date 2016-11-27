function init(result){
	var table = document.createElement('table')
	
	for(var i = 0; i<100; i++){
		var row = table.insertRow()
		for(var j = 0; j<100; j++)
			row.appendChild(createCell())
	}
	
	document.getElementById("result").appendChild(table)
	paint(table)
	
	result.appendChild(createButton("Start", function(){startGame(table)}))
	result.appendChild(createButton("Random", function(){randomGrid(table)}))
	result.appendChild(createButton("Glider Gun", function(){setGrid(table, 0)}))
	result.appendChild(createButton("Pattern 1", function(){setGrid(table, 1)}))
	result.appendChild(createButton("Pattern 2", function(){setGrid(table, 2)}))
}

function createCell(){
	var cell = document.createElement('td')
	cell.style.backgroundColor = "rgb(146, 219, 232)"
	cell.dataset.val = 0
	cell.onclick = function(){
		this.dataset.val = 1-this.dataset.val
		paintCell(this)
	}
	return cell
}

function createButton(s, f){
	var button = document.createElement("button")
	button.innerHTML = s
	button.onclick = f
	return button
}

function paint(table){
	for (var i = 0; i < 100; i++)
		for(var j = 0; j<100; j++)
			paintCell(table.rows[i].cells[j])
}

function paintCell(cell){
	cell.style.backgroundColor = (cell.dataset.val == 0) ? "rgb(146, 219, 232)" : "rgb(38, 117, 37)"
}
