import '../styles/HeaderBar.css';
import { Divider, Slider, Button } from '@mui/material/';
import { useState, useEffect } from 'react';
import { generateArray } from '../utils/ArrayCreation.js';
import { resetBarColors } from '../utils/AnimationHelper.js';
import AutorenewIcon from '@mui/icons-material/Autorenew';

// Sorting Algorithms
import { bubbleSort } from '../algorithms/BubbleSort';
import { insertionSort } from '../algorithms/InsertionSort';
import { mergeSort } from '../algorithms/MergeSort';
import { selectionSort } from '../algorithms/SelectionSort';
import { quickSort } from '../algorithms/QuickSort';

export default function HeaderBar(props) {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
    const [isSorting, setIsSorting] = useState(false);
    const [arrSize, setArrSize] = useState(25);

    useEffect(() => {
        props.setArrFunc(generateArray(arrSize));
        resetBarColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrSize])

    const algorithms = [
        { name: 'Merge', key: 'merge' },
        /*{ name: 'Heap', key: 'heap' },*/
        { name: 'Quick', key: 'quick' },
        { name: 'Bubble', key: 'bubble' },
        { name: 'Insertion', key: 'insertion' },
        { name: 'Selection', key: 'selection' },
    ];

    const sortFunction = { 
        'bubble': bubbleSort,
        'merge': mergeSort,
        'heap': bubbleSort,
        'quick': quickSort,
        'insertion': insertionSort,
        'selection': selectionSort
    };
    
    const handleAlgorithmClick = (algorithmKey) => {
        setSelectedAlgorithm(algorithmKey === selectedAlgorithm ? '' : algorithmKey);
        props.setCurAlgFunc(algorithmKey === selectedAlgorithm ? '' : algorithmKey);
    };

    const handleGenerateArray = () => {
        props.setArrFunc(generateArray(arrSize));
        resetBarColors();
    }

    const handleSort = async () => {
        console.log(selectedAlgorithm);
        setIsSorting(true);
        await sortFunction[selectedAlgorithm]();
        setIsSorting(false);
    };

    const getButtonStyle = (algorithmKey) => ({
        fontWeight: selectedAlgorithm === algorithmKey ? 'bold' : 'normal',
        textDecoration: selectedAlgorithm === algorithmKey ? 'underline' : 'none',
        fontSize: selectedAlgorithm === algorithmKey ? '16px' : '0.875rem',
        textTransform: 'capitalize',
        color: '#F4FDFF',
        "&.Mui-disabled": {
            color: '#8a8a8a'
        }
    });

    return (
    <div className="array-container">
        <h1 className='header-title'>Sorting Algos</h1>

        <Divider orientation="vertical" flexItem variant="middle"  sx={{backgroundColor: '#5d5d5d'}}/>
        <div className='array-size'>
            <Slider
            aria-label="Array Size"
            defaultValue={25}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={50}
            disabled={isSorting}
            onChange={ (e, val) => {setArrSize(val)} }
            sx={{
                '& .MuiSlider-thumb': {
                    background: '#055165'
                },
                '& .MuiSlider-track': {
                    background: '#055165'
                },
                '& .MuiSlider-rail': {
                    background: '#00496a'
                },
                '& .MuiSlider-active': {
                    background: '#055165'
                }
            }}
            />
            <Button 
            variant="contained"
            sx = {{
                padding: '5px',
                fontSize: '11px',
                textDecoration: 'none',
                textTransform: 'capitalize',
                color: '#F4FDFF',
                background: 'linear-gradient(45deg, rgba(0,62,104,1) 0%, rgba(0,77,104,1) 100%)',
                "&.Mui-disabled": {
                    backgroundColor: '#555',
                    color: '#8a8a8a'
                }
            }}
            disabled={isSorting}
            onClick={handleGenerateArray}
            size='large'
            >
                <AutorenewIcon />
            </Button>
        </div>
        <Divider orientation="vertical" flexItem variant="middle"  sx={{backgroundColor: '#5d5d5d'}}/>
        
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

            <Divider orientation="vertical" flexItem variant="middle"  sx={{backgroundColor: '#5d5d5d'}}/>
            <Button 
            variant="contained" 
            sx={{ 
                textTransform: 'capitalize',
                backgroundColor: 'rgba(0,62,104,1)',
                "&.Mui-disabled": {
                    backgroundColor: '#555',
                    color: '#8a8a8a'
                }
            }}
            onClick={() => handleSort()}
            disabled={isSorting || selectedAlgorithm === ''}>
                Sort!
            </Button>
     </div>

    );
}