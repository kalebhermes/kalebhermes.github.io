class MagicItem {

	constructor(name, levelModifier, flavorText, levelBonusCostArray, propertiesArray, powerArray){
		this.name = name;
		this.levelModifier = levelModifier;
		this.flavorText = flavorText;
		this.levelBonusCostArray = levelBonusCostArray;
		this.propertiesArray = propertiesArray;
		this.powerArray = powerArray;
	}

	setName(name) {
		this.name = name;
	}

	setLevelModifier(levelModifier) {
		this.levelModifier = levelModifier;
	}

	setFlavorText(flavorText) {
		this.flavorText = flavorText;
	}

	setLevelBonusCostArray(levelBonusCostArray) {
		this.levelBonusCostArray = levelBonusCostArray;
	}

	setPropertiesArray(propertiesArray) {
		this.propertiesArray = propertiesArray;
	}

	setPowerArray(powerArray) {
		this.powerArray = powerArray;
	}
}