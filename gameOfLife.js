function startGame(table){
	window.setInterval(function(){
		nextIteration(table)
		paint(table)
	}, 100)
}

function nextIteration(table){
	var nextArr=[]
	for(var i = 0; i<100; i++){
		nextArr[i] = []
		for(var j = 0; j<100; j++){
			var count = 0
			for(var k=-1; k<=1; k++)
				for(var l=-1; l<=1; l++)
					if(i+k>=0 && i+k<100 && j+l>=0 && j+l<100 && (k!=0 || l!=0))
						count = count + parseInt(table.rows[i+k].cells[j+l].dataset.val)
			
			if(table.rows[i].cells[j].dataset.val == 1)
				nextArr[i][j] = (count == 2 || count == 3) ? 1 : 0
			else
				nextArr[i][j] = (count == 3) ? 1 : 0
		}
	}
	
	for(var i = 0; i<100;i++)
		for(var j = 0; j < 100; j++)
			table.rows[i].cells[j].dataset.val = nextArr[i][j]
}


function randomGrid(table){
	for (var i = 0; i < 100; i++)
		for(var j = 0; j<100; j++)
			table.rows[i].cells[j].dataset.val = (Math.random()>0.25) ? 0 : 1
	paint(table);
}