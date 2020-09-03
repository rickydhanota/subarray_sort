//Write a function that takes in an array of at least 2 integers and that returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place for the order for the entire input array to be sorted. for example; array = [1,2,4,7, 10,11,7,12,6,7,16,18,19, output should be [3,9]

function subarraySort(array) {
	var minOutofOrder = Infinity;
  var maxOutofOrder = -Infinity;
  for(var i = 0; i < array.length; i++){
		var num = array[i];
		if (isOutofOrder(i, num, array)){
			minOutofOrder = Math.min(minOutofOrder, num);
			maxOutofOrder = Math.max(maxOutofOrder, num);
		}
	}
	if(minOutofOrder === Infinity){
		return [-1, -1];
	}
	var subArrayLeftidx = 0;
	while (minOutofOrder >= array[subArrayLeftidx]){
		subArrayLeftidx++;
	}
	var subArrayRightidx = array.length - 1;
	while (maxOutofOrder <= array[subArrayRightidx]){
		subArrayRightidx--;
	}
	return [subArrayLeftidx, subArrayRightidx];
}

function isOutofOrder(i, num, array){
	if(i === 0){
		return num > array[i+1];
	}
	if (i === array.length - 1){
		return num < array[i-1];
	}
	return num > array[i+1] || num < array[i-1];
}

	// if (i === 0) return num > array[i+1];
	// if (i === array.length - 1) return num < array[i-1];
	// return num > array[i+1] || num < array[i-1];

console.log(subarraySort([1,2,4,7,10,11,7,12,6,7,16,18,19]));