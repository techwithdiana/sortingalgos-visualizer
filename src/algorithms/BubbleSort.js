import { MakeDelay, Swap } from "../utils/AnimationHelper";

export async function bubbleSort() {
	var arr = document.querySelectorAll('.array-bar');
	var n = arr.length

	for (var i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {

			arr[j].style.background = 'red';
			arr[j + 1].style.background = 'red';

			if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
				await MakeDelay(100);
				arr[j].style.background = 'green';
				arr[j + 1].style.background = 'green';
				Swap(arr[j], arr[j + 1]);
			}

			await MakeDelay(100);
			arr[j].style.background = '#8CD5FC';
			arr[j + 1].style.background = '#8CD5FC';
		}
		await MakeDelay(100);
		arr[n - 1 - i].style.background = 'purple';
	}

	for (i = 0; i < n; i++) {
		await MakeDelay(100);
		arr[i].style.background = 'pink';
	}
}