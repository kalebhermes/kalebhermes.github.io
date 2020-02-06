var parentStart = '<div style="width:350px;">';
var parentEnd = '</div>';

function update(thisMagicItem) {
	var output = parentStart;
	output += getHeaderBar(thisMagicItem);
	output += parentEnd;
	if(thisMagicItem.levelBonusCostArray.length > 0) output += getLevelBonusCost(thisMagicItem);
	if(thisMagicItem.propertiesArray.length > 0) output += getProperties(thisMagicItem);
	if(thisMagicItem.powerArray.length > 0) output += getPowers(thisMagicItem);
	document.getElementById('output').innerHTML = output;
	document.getElementById('htmlSource').value = output;
}

function getHeaderBar(thisMagicItem) {
	var template = '<div style="background-color:#caa143;color:#FFFFFF;padding:6px 0px 0px 10px;height:24px;">';
			if(thisMagicItem.name) template += '<div style="font-weight:bold;float:left;font-family:Mentor-Sans;font-size:20px;">' + thisMagicItem.name + '</div>';
			if(thisMagicItem.levelModifier) template += '<div style="float:right;font-family:Mentor-Sans;font-weight:bold;font-size:14px;padding:5px 10px 0px 0px;">Level ' + thisMagicItem.levelModifier + '+</div>';
		template += '</div>';
		if(thisMagicItem.flavorText) template += '<div>' + '<div style="background-color:#DDDDCC;background-image:url(\'http://omnichron.net/external/op/src/bg_350.jpg\');font-style:italic;padding: 2px 0px 0px 10px;margin: 2px 0px 0px 0px;font-family:Mentor;">' + thisMagicItem.flavorText + '</div>' + '</div>';

	return template;
}

function howManyItemsInAColumn(numberOfItems) {
	var numberOfItemsInEachColumns;
	if(numberOfItems == 1){
		// one table, two columns, one row
		return [1, 0];
	} else if(numberOfItems % 2 == 0) { // always two tables from now on
		// two tables, two columsn each, numberOfItems/2 rows
		// divide by 2, take first "set" into table one
		numberOfItemsInEachColumns = parseInt(numberOfItems / 2);
		return [numberOfItemsInEachColumns, numberOfItemsInEachColumns]
	} else {
		// two tables, two columsn each, first has numberOfItems/2 rows, second has ((numberOfItems/2)-1) rows
		numberOfItemsInEachColumns = Math.ceil(numberOfItems / 2);
		return [numberOfItemsInEachColumns, numberOfItemsInEachColumns-1];
	}
}

function getLevelBonusCost(thisMagicItem) {
	var template = '<div style="display:inline-block;width:350px;margin:5px 0px 0px 0px;font-family:Mentor-Sans;"><table style="border-style:none;border-collapse:collapse;margin:0px 0px 0px 10px;width:165px;display:inline-block;">';
	var templateEnd = '</div>';
	var tableEnd = '</table>';
	var divEnd = '</div>';
	var numColumns = howManyItemsInAColumn(thisMagicItem.levelBonusCostArray.length);

	// All items will have at least one table.
	for(var x = 0; x < numColumns[0]; x++) {
		template += '<tr><td style="border-style:none;padding:0px 0px 0px 0px;width:55px;">Lvl ' + thisMagicItem.levelBonusCostArray[x].level + '</td><td style="border-style:none;padding:0px 0px 0px 0px;width:25px">+' + thisMagicItem.levelBonusCostArray[x].bonus + '</td><td style="border-style:none;padding:0px 0px 0px 0px;width:85px;text-align:right;">' + thisMagicItem.levelBonusCostArray[x].cost + ' gp</td></tr>';
	}

	if(numColumns[1] != 0) {
		template += tableEnd;
		template += '<table style="border-style:none;border-collapse:collapse;margin:0px 0px 0px 10px;width:165px;display:inline-block;float:right;">';
		for(var x = 0; x < numColumns[1]; x++) {
			var index = x + numColumns[0];
			template += '<tr><td style="border-style:none;padding:0px 0px 0px 0px;width:55px;">Lvl ' + thisMagicItem.levelBonusCostArray[index].level + '</td><td style="border-style:none;padding:0px 0px 0px 0px;width:25px">+' + thisMagicItem.levelBonusCostArray[index].bonus + '</td><td style="border-style:none;padding:0px 0px 0px 0px;width:85px;text-align:right;">' + thisMagicItem.levelBonusCostArray[index].cost + ' gp</td></tr>';	
		}
	}

	template += tableEnd;
	template += divEnd;
	return template;
}

function getProperties(thisMagicItem) {
	var template = '<div style="display: inline-block;margin: 0px 0px 0px 10px;">';
	
	for(var x = 0; x < thisMagicItem.propertiesArray.length; x++) {
		template += '<div style="margin: 0px 0px 2px 0px;font-family:Mentor-Sans"><b style="display: inline-block;">' + thisMagicItem.propertiesArray[x].label + ':</b> ' + thisMagicItem.propertiesArray[x].value + '</div>';
	}

	template += '</div>';
	return template;
}

function getPowers(thisMagicItem) {
	var template = '<div style="background-color:#DDDDCC;background-image:url(\'http://omnichron.net/external/op/src/bg_350.jpg\');padding: 2px 0px 0px 10px;">';

	for(var x = 0; x < thisMagicItem.powerArray.length; x++) {
		template += '<div style="text-indent: -13px;margin: 0px 0px 5px 13px;font-family:Mentor-Sans;"><b style="font-weight:bold;">Power (' + thisMagicItem.powerArray[x].frequency;
		if(thisMagicItem.powerArray[x].types != undefined && thisMagicItem.powerArray[x].types != '') template += ' ♦ ' + thisMagicItem.powerArray[x].types;
		template +=  '):</b> ' + thisMagicItem.powerArray[x].description + '</div>';
	}

	template += '</div>';
	return template;	
}
