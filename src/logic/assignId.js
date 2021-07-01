function assignId(array) {
	let j = 0;
	let i = 0;
	let id = 0;
	let idArray = [];

	// Create array with object's id;
	for (j in array) idArray.push(array[j].id);

	// Create new id
	for (i = 0; i < idArray.length; i++) {
		for (j in idArray) {
			if (parseInt(idArray[j]) === id) {
				id += 1;
				break;
			}
			if (parseInt(j) + 1 === parseInt(idArray.length)) {
				return id;
			}
		}
	}

	// In case that for loop's return id does not work do this

	return id;
}

export default assignId;