import '../styles/PopUpInfo.css';

export default function PopUpInfo(props) {
    const algorithmInfo = {
        merge: {
            title: 'Merge Sort',
            timeComplexity:
            <div class="grid-container">
                <div class="grid-item">Average Complexity</div>
                <div class="grid-item">O(n × log n)</div>
                <div class="grid-item">Best Case</div>
                <div class="grid-item">O(n × log n)</div>
                <div class="grid-item">Worst Case</div>
                <div class="grid-item">O(n × log n)</div>
                <div class="grid-item">Space Complexity</div>
                <div class="grid-item">O(n)</div>
            </div>
          ,
            description: 
            <div>
                <p>Merge Sort is a sorting algorithm based on the Divide and Conquer technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.</p>
                <p>The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.</p>
            </div>
        },
        bubble: {
            title: 'Bubble Sort',
            timeComplexity:
            <div class="grid-container">
                <div class="grid-item">Average Complexity</div>
                <div class="grid-item">O(n<sup>2</sup>)</div>
                <div class="grid-item">Best Case</div>
                <div class="grid-item">O(n)</div>
                <div class="grid-item">Worst Case</div>
                <div class="grid-item">O(n<sup>2</sup>)</div>
                <div class="grid-item">Space Complexity</div>
                <div class="grid-item">O(1)</div>
            </div>
          ,
            description: 
            <div>
                <p>Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.</p>
                <p>The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.</p>
                <p>It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.</p>
            </div>
        },
        insertion: {
            title: 'Insertion Sort',
            timeComplexity:
            <div class="grid-container">
                <div class="grid-item">Average Complexity</div>
                <div class="grid-item">O(n<sup>2</sup>)</div>
                <div class="grid-item">Best Case</div>
                <div class="grid-item">O(n)</div>
                <div class="grid-item">Worst Case</div>
                <div class="grid-item">O(n<sup>2</sup>)</div>
                <div class="grid-item">Space Complexity</div>
                <div class="grid-item">O(1)</div>
            </div>
          ,
            description: 
            <div>
                <p>Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.</p>
                <p>The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist. </p>
            </div>
        },
        selection: {
            title: 'Selection Sort',
            timeComplexity:
            <div class="grid-container">
                <div class="grid-item">Average Complexity</div>
                <div class="grid-item">O(n<sup>2</sup>)</div>
                <div class="grid-item">Best Case</div>
                <div class="grid-item">O(n<sup>2</sup>)</div>
                <div class="grid-item">Worst Case</div>
                <div class="grid-item">O(n<sup>2</sup>)</div>
                <div class="grid-item">Space Complexity</div>
                <div class="grid-item">O(1)</div>
            </div>
          ,
            description: 
            <div>
                <p>Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.</p>
                <p>It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity. </p>
                {/*<p>This algorithm has been upgraded and enhanced in several variants such as Heap Sort.</p>*/}
            </div>
        },
    };

    const info = algorithmInfo[props.selectedAlgorithm];

    if (!info) {
        return null;
    }

    return (
        <div className='sortInfo'>
            <h2 className='title'>{info.title}</h2>
            <p><strong>Time Complexity:</strong> {info.timeComplexity}</p>
            <p>
                <strong>Description:</strong> 
                <div className='sortDesc'>{info.description}</div>
            </p>
        </div>
    );
}