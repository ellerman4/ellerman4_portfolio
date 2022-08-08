import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import Style from './Portfolio.module.scss';

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
               <a href={live} target="_blank" rel="noopener noreferrer">
                  <button> live demo
                  </button>
               </a>
               <a href={source} target="_blank" rel="noopener noreferrer">
                  <button> source
                  </button>
               </a>

         </Box>
      </Box>
   );
}

export default PortfolioBlock;