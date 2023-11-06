import { FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, COMPARE_COLOR, SWAP_COLOR, Swap, MIN_COLOR} from "../utils/AnimationHelper";

async function partition(ele, s, e) {
	const n = 0;
	Swap(ele[n], ele[e]);

	await MakeDelay(100);
	ele[e].style.background = MIN_COLOR;   // current pivot color 

	var m = s;
	var pivot = e;

	for (var i = s; i < e; i++) {
		ele[i].style.background = COMPARE_COLOR;
		if (parseInt(ele[i].style.height) < parseInt(ele[pivot].style.height)) {

			ele[m].style.background = COMPARE_COLOR;
			await MakeDelay(100);

			Swap(ele[i], ele[m]);

			await MakeDelay(100);
			ele[i].style.background = SWAP_COLOR;
			ele[m].style.background = SWAP_COLOR;
			if (m !== s) {
				ele[m - 1].style.background = PRIMARY_COLOR
			}

			m += 1;
		}
		await MakeDelay(100);
		ele[i].style.background = PRIMARY_COLOR;
		ele[m].style.background = PRIMARY_COLOR;
	}

	ele[e].style.background = PRIMARY_COLOR;    // pivot to orginal color
	await MakeDelay(100);
	Swap(ele[m], ele[pivot]);
	await MakeDelay(100);
	ele[m].style.background = POSITION_FINAL_COLOR;

	return m;
}

async function quickSortHelper(ele, s, e) {
	if (s >= e) {
		if (s === e) {
			ele[s].style.background = POSITION_FINAL_COLOR;
		}
		return;
	}
	var p = await partition(ele, s, e);
	await quickSortHelper(ele, s, p - 1);
	await quickSortHelper(ele, p + 1, e);
	return;
}
export async function quickSort() {
	var arr = document.querySelectorAll('.array-bar');
	var n = arr.length;
	await quickSortHelper(arr, 0, n - 1);
	for (var i = 0; i < n; i++) {
		await MakeDelay(100)
		arr[i].style.background = FINAL_COLOR;
	}
}