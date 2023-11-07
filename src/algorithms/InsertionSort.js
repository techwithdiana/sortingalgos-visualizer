import { MakeDelay, Swap, COMPARE_COLOR, MIN_COLOR, SWAP_COLOR, POSITION_FINAL_COLOR, FINAL_COLOR, delay } from "../utils/AnimationHelper";
export async function insertionSort() {
	var arr = document.querySelectorAll('.array-bar');
	var n = arr.length;

	for (var i = 0; i < n; i++) {
		for (var j = i; j >= 1; j--) {
			arr[i].style.background = MIN_COLOR;

			arr[j].style.background = COMPARE_COLOR;
			arr[j - 1].style.background = COMPARE_COLOR;

			await MakeDelay(delay);

			if (parseInt(arr[j].style.height) < parseInt(arr[j - 1].style.height)) {
				arr[j].style.background = SWAP_COLOR;
				arr[j - 1].style.background = SWAP_COLOR;
				await MakeDelay(delay);
				Swap(arr[j - 1], arr[j]);
			}
			else {
				await MakeDelay(delay);
				arr[j].style.background = POSITION_FINAL_COLOR;
				arr[j - 1].style.background = POSITION_FINAL_COLOR;
				break;
			}

			await MakeDelay(delay);
			arr[j].style.background = POSITION_FINAL_COLOR;
			arr[j - 1].style.background = POSITION_FINAL_COLOR;
		}
	}
	for (i = 0; i < n; i++) {
		await MakeDelay(delay)
		arr[i].style.background = FINAL_COLOR;
	}
}