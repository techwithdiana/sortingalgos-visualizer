import '../styles/HeaderBar.css';
import { Divider, Slider, Button } from '@mui/material/';
import { useState } from 'react';

export default function HeaderBar() {
    const [isMerge, setIsMerge] = useState(false);
    const [isHeap, setIsHeap] = useState(false);
    const [isQuick, setIsQuick] = useState(false);
    const [isBubble, setIsBubble] = useState(false);
    const [isInsertion, setIsInsertion] = useState(false);
    const [isSelection, setIsSelection] = useState(false);

    const resetBtnStates = () => {
        setIsMerge(false);
        setIsHeap(false);
        setIsQuick(false);
        setIsBubble(false);
        setIsInsertion(false);
        setIsSelection(false);
    }
    
    const handleClick = (callbackFunc, btnState) => {
        resetBtnStates();
        callbackFunc(!btnState);
    }

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
            />
        </div>
        <Divider orientation="vertical" flexItem variant="middle" />
        <Button 
        variant="text"
        sx={isMerge ? {
            fontWeight:'bold',
            textDecoration:'underline',
            fontSize: '16px',
            textTransform: 'capitalize'
        } : {
            fontSize: '0.875rems',
            textTransform: 'capitalize'
        }}
        onClick={(e) => handleClick(setIsMerge, isMerge)}
        >
            Merge
        </Button>

        <Button 
        variant="text"
        sx={isHeap ? {
            fontWeight:'bold',
            textDecoration:'underline',
            fontSize: '16px',
            textTransform: 'capitalize'
        } : {
            fontSize: '0.875rems',
            textTransform: 'capitalize'
        }}
        onClick={(e) => handleClick(setIsHeap, isHeap)}
        >
            Heap
        </Button>

        <Button 
        variant="text"
        sx={isQuick ? {
            fontWeight:'bold',
            textDecoration:'underline',
            fontSize: '16px',
            textTransform: 'capitalize'
        } : {
            fontSize: '0.875rems',
            textTransform: 'capitalize'
        }}
        onClick={(e) => handleClick(setIsQuick, isQuick)}
        >
            Quick
        </Button>
       
        <Button 
        variant="text"
        sx={isBubble ? {
            fontWeight:'bold',
            textDecoration:'underline',
            fontSize: '16px',
            textTransform: 'capitalize'
        } : {
            fontSize: '0.875rems',
            textTransform: 'capitalize'
        }}
        onClick={(e) => handleClick(setIsBubble, isBubble)}
        >
            Bubble
        </Button>

        <Button 
        variant="text"
        sx={isInsertion ? {
            fontWeight:'bold',
            textDecoration:'underline',
            fontSize: '16px',
            textTransform: 'capitalize'
        } : {
            fontSize: '0.875rems',
            textTransform: 'capitalize'
        }}
        onClick={(e) => handleClick(setIsInsertion, isInsertion)}
        >
            Insertion
        </Button>
        
        <Button 
        variant="text"
        sx={isSelection ? {
            fontWeight:'bold',
            textDecoration:'underline',
            fontSize: '16px',
            textTransform: 'capitalize'
        } : {
            fontSize: '0.875rems',
            textTransform: 'capitalize'
        }}
        onClick={(e) => handleClick(setIsSelection, isSelection)}
        >
            Selection
        </Button>

        <Divider orientation="vertical" flexItem variant="middle" />
        <Button variant="contained"
        sx={{textTransform: 'capitalize'}}
        >
        Sort!
        </Button>
      </div>
  );
}
