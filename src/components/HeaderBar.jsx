import '../styles/HeaderBar.css';
import { Divider, Slider, Button } from '@mui/material/';
import { useState } from 'react';

export default function HeaderBar() {
    const [isMerge, setIsMerge] = useState(false);

    const handleClick = (callbackFunc, btnState) => {
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
                textDecoration: 'none'
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
        onClick={(e) => handleClick(setIsMerge, isMerge)}
        >
            Merge
        </Button>
        <Button variant="text">Heap</Button>
        <Button variant="text">Quick</Button>
        <Button variant="text">Bubble</Button>
        <Button variant="text">Insertion</Button>
        <Button variant="text">Selection</Button>
        <Divider orientation="vertical" flexItem variant="middle" />
        <Button variant="contained">Sort!</Button>
      </div>
  );
}
