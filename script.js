//your JS code here. If required.
const array = [1,2,3,4];
const div = document.getElementById("output");

function dataHandler() {
	const data = new Promise((resolve, reject) => {
		setTimeout(() => {
			let newArray = array.filter((num) => num%2==0);
			div.innerHTML = newArray.toString();
			return resolve(newArray);
		}, 1000);
	}).then((newArray) => {
		setTimeout(() => {
			newArray = newArray.map((num) => num*2);
			div.innerHTML = newArray.toString();
			return resolve(newArray);
		}, 2000)
	}).catch((e) => alert(e));
}

dataHandler();