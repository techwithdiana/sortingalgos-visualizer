export function Swap(x, y) {
	const temp = x.style.height;
	x.style.height = y.style.height;
	y.style.height = x = temp;
}

export function MakeDelay(milisec) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}

export function resetBarColors() {
	const arr = document.querySelectorAll('.array-bar');
        
    arr.forEach((bar) => {
         bar.style.background = '#8CD5FC';
    });
}

export const delay = 50
export const PRIMARY_COLOR = 'rgb(113, 165, 255)';
export const FINAL_COLOR = 'rgb(15, 245, 70)';
export const POSITION_FINAL_COLOR = 'rgb(183, 51, 245)';
export const COMPARE_COLOR = 'blue';
export const SWAP_COLOR = 'red';
export const MIN_COLOR = 'rgb(255, 112, 31)';
