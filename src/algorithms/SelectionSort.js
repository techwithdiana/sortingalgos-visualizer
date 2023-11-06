import { MakeDelay, Swap, COMPARE_COLOR, MIN_COLOR, SWAP_COLOR, PRIMARY_COLOR, POSITION_FINAL_COLOR, FINAL_COLOR } from "../utils/AnimationHelper";

export async function selectionSort() {
	var arr = document.querySelectorAll('.array-bar');
	var n = arr.length;

	for (var i = 0; i < n; i++) {
		var min = i;

		for (var j = i + 1; j < n; j++) {
			arr[min].style.background = MIN_COLOR;

			arr[j].style.background = COMPARE_COLOR;

			if (parseInt(arr[j].style.height) < parseInt(arr[min].style.height)) {
				arr[min].style.background = PRIMARY_COLOR;
				await MakeDelay(100)
				min = j;
			}
			else {
				await MakeDelay(100)
				arr[j].style.background = PRIMARY_COLOR;
			}

		}

		if (min !== i) {

			arr[i].style.background = SWAP_COLOR;
			arr[min].style.background = SWAP_COLOR;

			await MakeDelay(100);
			arr[min].style.background = PRIMARY_COLOR;
			arr[i].style.background = PRIMARY_COLOR;

			Swap(arr[min], arr[i]);
		}

		await MakeDelay(100)
		arr[i].style.background = POSITION_FINAL_COLOR
	}

	for (i = 0; i < n; i++) {
		await MakeDelay(100)
		arr[i].style.background = FINAL_COLOR;
	}
}