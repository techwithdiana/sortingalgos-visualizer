import '../styles/PopUpInfo.css';
import { Drawer, Box, Button } from '@mui/material/';

export default function PopUpInfo(props) {
    const algorithmInfo = {
        merge: {
            title: 'Merge Sort',
            timeComplexity: 'Best and Worst: O(n log n)',
            pseudoCode: `
                1. Divide the unsorted list into n sublists, each containing one element.
                2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.
            `,
            description: 'Merge Sort is a divide-and-conquer sorting algorithm.',
            description: 'It divides the unsorted list into n sublists,',
            description: 'each with one element, and then repeatedly',
            description: 'merges sublists to produce new sorted sublists',
            description: 'until the entire list is sorted.',
        },
        heap: {
            title: 'Heap Sort',
            timeComplexity: 'Best and Worst: O(n log n)',
            pseudoCode: `
                1. Build a max-heap from the input data.
                2. Swap the root (maximum element) with the last element of the heap.
                3. Reduce the size of the heap by 1.
                4. Heapify the root of the tree.
                5. Repeat steps 2-4 until the heap is empty.
            `,
            description: 'Heap Sort is a comparison-based sorting algorithm. It builds a max-heap from the input data and repeatedly selects the maximum element (the root) and moves it to the end of the list.',
        },
        quick: {
            title: 'Quick Sort',
            timeComplexity: 'Best: O(n log n), Worst: O(n^2)',
            pseudoCode: `
                1. Choose a "pivot" element from the array and partition the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
                2. Recursively sort the sub-arrays.
                3. Join the sub-arrays and pivot back into a single sorted array.
            `,
            description: 'Quick Sort is a divide-and-conquer sorting algorithm. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.',
        },
        bubble: {
            title: 'Bubble Sort',
            timeComplexity: 'Best: O(n), Worst: O(n^2)',
            pseudoCode: `
                1. Compare each pair of adjacent elements in the list.
                2. If they are in the wrong order, swap them.
                3. Repeat steps 1 and 2 until no more swaps are needed.
            `,
            description: 'Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
        },
        insertion: {
            title: 'Insertion Sort',
            timeComplexity: 'Best: O(n), Worst: O(n^2)',
            pseudoCode: `
                1. Start with the second element and compare it with the previous element.
                2. If the previous element is greater, move it one position ahead.
                3. Repeat step 2 until you find the correct position for the current element.
            `,
            description: 'Insertion Sort is an efficient, stable, in-place sorting algorithm. It builds the final sorted array one item at a time.',
        },
        selection: {
            title: 'Selection Sort',
            timeComplexity: 'Best and Worst: O(n^2)',
            pseudoCode: `
                1. Find the minimum element from the unsorted part of the list.
                2. Swap it with the first element in the unsorted part.
                3. Repeat steps 1 and 2 for the remaining unsorted part.
            `,
            description: 'Selection Sort is a simple comparison-based sorting algorithm. It repeatedly selects the minimum element from the unsorted part and moves it to the beginning of the list.',
        },
    };

    const info = algorithmInfo[props.selectedAlgorithm];

    if (!info) {
        return null;
    }

    const anchor = 'right'; // Change the anchor to 'right' for the right-sided Drawer
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    };

    return (
        <Drawer anchor={anchor} open={true} onClose={() => toggleDrawer(false)} sx={{ maxWidth: 700 }}>
            <Box p={2}>
                <h2>{info.title}</h2>
                <Button variant="contained">Close</Button>
                <p><strong>Time Complexity:</strong> {info.timeComplexity}</p>
                <p><strong>Pseudocode Example:</strong></p>
                <pre>{info.pseudoCode}</pre>
                <p><strong>Description:</strong> {info.description}</p>
            </Box>
        </Drawer>
    );
}