var thisMagicItem = new MagicItem('Magic Item Name', '0', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis purus nec.');
var thislevelBonusCost0 = new LevelBonusCost('1', '1', '500');
var thisProperty0 = new Property('Armor', 'Any');
var thisPower0 = new Power('Daily', undefined, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla neque orci, eget ultricies erat gravida non. Nam scelerisque, nulla eu sollicitudin posuere, felis velit.');
var thisLevelBonusCostArray = [thislevelBonusCost0];
var thisPropertyArray = [thisProperty0];
var thisPowerArray = [thisPower0];
// TODO: Can probably check in eventListener if thisMagicItem.levelBonusCostArray.length < 0, and only add then or something
thisMagicItem.setLevelBonusCostArray(thisLevelBonusCostArray);
thisMagicItem.setPropertiesArray(thisPropertyArray);
thisMagicItem.setPowerArray(thisPowerArray);

var numberOfLevelBonusCostRows = 0;
var numberOfPropertyRows = 0;
var numberOfPowerRows = 0;

function init() {

	document.getElementById('itemName').addEventListener('keyup', function (evt) {
		thisMagicItem.setName(this.value);
    	// document.getElementById('itemNameView').innerHTML = "<p>" + thisMagicItem.name + "</p>";
    	update(thisMagicItem);
	}, false);

	document.getElementById('itemLevelModifier').addEventListener('keyup', function (evt) {
		thisMagicItem.setLevelModifier(this.value);
		// document.getElementById('itemLevelModifierView').innerHTML = "<p>+" + thisMagicItem.levelModifier + "</p>";
		update(thisMagicItem);
	}, false);

	document.getElementById('itemFlavorText').addEventListener('keyup', function (evt) {
		thisMagicItem.setFlavorText(this.value);
    	// document.getElementById('itemFlavorView').innerHTML = "<p><i>" + thisMagicItem.flavorText + "</i></p>";
    	update(thisMagicItem);
	}, false);

	document.getElementById('level-0').addEventListener('keyup', function (evt) {
		thislevelBonusCost0.setLevel(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('bonus-0').addEventListener('keyup', function (evt) {
		thislevelBonusCost0.setBonus(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('cost-0').addEventListener('keyup', function (evt) {
		thislevelBonusCost0.setCost(this.value);
		update(thisMagicItem);
	}, false);

	document.getElementById('propertyLabel-0').addEventListener('keyup', function (evt) {
		thisProperty0.setLabel(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('propertyValue-0').addEventListener('keyup', function (evt) {
		thisProperty0.setValue(this.value);
		update(thisMagicItem);
	}, false);

	document.getElementById('powerFrequency-0').addEventListener('change', function (evt) {
		thisPower0.setFrequency(this.value);
		update(thisMagicItem);
	}, false);

	document.getElementById('powerTypes-0').addEventListener('keyup', function (evt) {
		thisPower0.setTypes(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('powerDescription-0').addEventListener('keyup', function (evt) {
		thisPower0.setDescription(this.value);
		update(thisMagicItem);
	}, false);

	document.getElementById('sourceInput').addEventListener('keyup', function (evt) {
		thisMagicItem.setSource(this.value);
		update(thisMagicItem);
	}, false);

	update(thisMagicItem);
};

function addAdditionalLevelBonusCostRow() {
	// Iterate total number of Rows globally
	numberOfLevelBonusCostRows++;
	// Create innerNumber for locally scoping, otherwise the last child will have all of the event listeners
	var innerNumber = numberOfLevelBonusCostRows;
	var rowTemplate = '<div class="row"><div id="levelBonusCostRow-' + numberOfLevelBonusCostRows + '"><div class="two columns"><label for="level-' + numberOfLevelBonusCostRows + '">Level</label><input id="level-' + numberOfLevelBonusCostRows + '" placeholder="1"/></div><div class="two columns"><label for="bonus-' + numberOfLevelBonusCostRows + '">Bonus</label><input id="bonus-' + numberOfLevelBonusCostRows + '" placeholder="1"/></div><div class="eight columns"><label for="cost-' + numberOfLevelBonusCostRows + '">Cost</label><input id="cost-' + numberOfLevelBonusCostRows + '" placeholder="500"/></div></div></div>';
	// Call appendChild rather than overwriting innerHTML to preserve values
	var newRow = document.createElement('div');
	newRow.innerHTML = rowTemplate;
	document.getElementById('levelBonusCost').appendChild(newRow);

	// Create a new LevelBonusCost object and add it to the array
	var newLevelBonusCostRow = new LevelBonusCost();
	thisLevelBonusCostArray.push(newLevelBonusCostRow);

	// Create eventListeners for the newly created row
	document.getElementById('level-' + numberOfLevelBonusCostRows).addEventListener('keyup', function (evt) {
		thisLevelBonusCostArray[innerNumber].setLevel(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('bonus-' + numberOfLevelBonusCostRows).addEventListener('keyup', function (evt) {
		thisLevelBonusCostArray[innerNumber].setBonus(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('cost-' + numberOfLevelBonusCostRows).addEventListener('keyup', function (evt) {
		thisLevelBonusCostArray[innerNumber].setCost(this.value);
		update(thisMagicItem);
	}, false);
}

function addAdditionalPropertyRow() {
	// Iterate total number of Rows globally
	numberOfPropertyRows++;
	// Create innerNumber for locally scoping, otherwise the last child will have all of the event listeners
	var innerNumber = numberOfPropertyRows;
	var rowTemplate = '<div class="row"><div id="property-' + numberOfPropertyRows + '"><div class="six columns"> <label for="propertyLabel-' + numberOfPropertyRows + '">Label</label><input id="propertyLabel-' + numberOfPropertyRows + '" placeholder="Armor"/></div><div class="six columns"><label for="propertyValue-' + numberOfPropertyRows + '">Value</label><input id="propertyValue-' + numberOfPropertyRows + '" placeholder="Any"/></div></div></div>';
	// Call appendChild rather than overwriting innerHTML to preserve values
	var newRow = document.createElement('div');
	newRow.innerHTML = rowTemplate;
	document.getElementById('property').appendChild(newRow);

	// Create a new LevelBonusCost object and add it to the array
	var newPropertyRow = new Property();
	thisPropertyArray.push(newPropertyRow);

	// Create eventListeners for the newly created row
	document.getElementById('propertyLabel-' + numberOfPropertyRows).addEventListener('keyup', function (evt) {
		thisPropertyArray[innerNumber].setLabel(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('propertyValue-' + numberOfPropertyRows).addEventListener('keyup', function (evt) {
		thisPropertyArray[innerNumber].setValue(this.value);
		update(thisMagicItem);
	}, false);
}

function addAdditionalPowerRow() {
	// Iterate total number of Rows globally
	numberOfPowerRows++;
	// Create innerNumber for locally scoping, otherwise the last child will have all of the event listeners
	var innerNumber = numberOfPowerRows;
	var rowTemplate = '<div class="row"><div id="power-' + numberOfPowerRows + '"><div><div class="three columns"><row><label for="powerFrequency-' + numberOfPowerRows + '">Frequency</label><select id="powerFrequency-' + numberOfPowerRows + '"><option value="Daily">Daily</option><option value="Encounter">Encounter</option><option value="At-Will">At-Will</option></select></row><row><label for="powerTypes-' + numberOfPowerRows + '">Types</label><input id="powerTypes-' + numberOfPowerRows + '"/></row></div></div><div class="nine columns"><label for="powerDescription-' + numberOfPowerRows + '">Description</label><textarea id="powerDescription-' + numberOfPowerRows + '" style="height:77px;" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla neque orci, eget ultricies erat gravida non. Nam scelerisque, nulla eu sollicitudin posuere, felis velit."></textarea></div></div></div>';
	// Call appendChild rather than overwriting innerHTML to preserve values
	var newRow = document.createElement('div');
	newRow.innerHTML = rowTemplate;
	document.getElementById('power').appendChild(newRow);

	// Create a new LevelBonusCost object and add it to the array
	var newPowerRow = new Power('Daily');
	thisPowerArray.push(newPowerRow);

	// Create eventListeners for the newly created row
	document.getElementById('powerFrequency-' + numberOfPowerRows).addEventListener('change', function (evt) {
		thisPowerArray[innerNumber].setFrequency(this.value);
		update(thisMagicItem);
	}, false);
	
	document.getElementById('powerTypes-' + numberOfPowerRows).addEventListener('keyup', function (evt) {
		thisPowerArray[innerNumber].setTypes(this.value);
		update(thisMagicItem);
	}, false);	
	
	document.getElementById('powerDescription-' + numberOfPowerRows).addEventListener('keyup', function (evt) {
		thisPowerArray[innerNumber].setDescription(this.value);
		update(thisMagicItem);
	}, false);
}

function removeAdditionalLevelBonusCostRow() {
	var element = document.getElementById('levelBonusCostRow-' + numberOfLevelBonusCostRows);
	element.parentNode.removeChild(element);
	thisLevelBonusCostArray.pop();
	numberOfLevelBonusCostRows--;
	update(thisMagicItem);
}
function removeAdditionalPropertyRow() {
	var element = document.getElementById('property-' + numberOfPropertyRows);
	element.parentNode.removeChild(element);
	thisPropertyArray.pop();
	numberOfPropertyRows--;
	update(thisMagicItem);
}


function removeAdditionalPowerRow() {
	var element = document.getElementById('power-' + numberOfPowerRows);
	element.parentNode.removeChild(element);
	thisPowerArray.pop();
	numberOfPowerRows--;
	update(thisMagicItem);
}




