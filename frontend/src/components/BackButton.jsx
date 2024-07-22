

import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { BsX } from 'react-icons/bs';

const BackButton = () => {
    return (
        <Box sx={{ display: 'flex' }}>
             <button
                    style={{
                        backgroundColor: 'darkred',
                        border: 'none',
                        borderRadius: '35%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                    }}
                >
            <Link to="/user-home" >
               
                    <BsX className="text-white text-2xl" />
                
            </Link>
            </button>
        </Box>
    );
};

export default BackButton;

