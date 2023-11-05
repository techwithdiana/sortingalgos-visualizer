import '../styles/HeaderBar.css';
import { Divider, Slider, Button } from '@mui/material/';
import { useState } from 'react';
import PopUpInfo from './PopUpInfo.jsx';

// Sorting Algorithms
import { bubbleSort } from '../algorithms/BubbleSort';
import { generateArray } from '../utils/ArrayCreation.js';

export default function HeaderBar(props) {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
    const [isSorting, setIsSorting] = useState(false);
    const [arrSize, setArrSize] = useState(5);

    const algorithms = [
        { name: 'Merge', key: 'merge' },
        { name: 'Heap', key: 'heap' },
        { name: 'Quick', key: 'quick' },
        { name: 'Bubble', key: 'bubble' },
        { name: 'Insertion', key: 'insertion' },
        { name: 'Selection', key: 'selection' },
    ];

    const sortFunction = { 
        'bubble': bubbleSort,
        'merge': bubbleSort,
        'heap': bubbleSort,
        'quick': bubbleSort,
        'insertion': bubbleSort,
        'selection': bubbleSort
    };
    
    const handleAlgorithmClick = (algorithmKey) => {
        setSelectedAlgorithm(algorithmKey === selectedAlgorithm ? '' : algorithmKey);
    };

    const handleSort = async () => {
        setIsSorting(true);
        await sortFunction[selectedAlgorithm]();
        setIsSorting(false);
    };

    const getButtonStyle = (algorithmKey) => ({
        fontWeight: selectedAlgorithm === algorithmKey ? 'bold' : 'normal',
        textDecoration: selectedAlgorithm === algorithmKey ? 'underline' : 'none',
        fontSize: selectedAlgorithm === algorithmKey ? '16px' : '0.875rem',
        textTransform: 'capitalize',
    });

    return (
    <div className="array-container">
        <h1 className='linear-wipe'>Sorting Algos</h1>

        <Divider orientation="vertical" flexItem variant="middle" />
        <div className='array-size'>
            <Button 
            variant="contained"
            sx = {{
                padding: '5px',
                fontSize: '11px',
                textDecoration: 'none',
                textTransform: 'capitalize'
            }}
            disabled={isSorting}
            onClick={(e) => {props.setArrFunc(generateArray(arrSize))}}
            >
                Generate Array
            </Button>
            <Slider
            aria-label="Array Size"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={50}
            disabled={isSorting}
            onChange={ (e, val) => {setArrSize(val)} }
            />
        </div>
        <Divider orientation="vertical" flexItem variant="middle" />
        
        {algorithms.map((algorithm) => (
                <Button
                    key={algorithm.key}
                    variant="text"
                    sx={getButtonStyle(algorithm.key)}
                    onClick={() => handleAlgorithmClick(algorithm.key)}
                    disabled={isSorting}
                >
                    {algorithm.name}
                </Button>
            ))}

            <Divider orientation="vertical" flexItem variant="middle" />
            <Button 
            variant="contained" 
            sx={{ textTransform: 'capitalize' }}
            onClick={() => handleSort()}
            disabled={isSorting || selectedAlgorithm === ''}>
                Sort!
            </Button>
            
            <PopUpInfo selectedAlgorithm={selectedAlgorithm} />
     </div>
    );
}