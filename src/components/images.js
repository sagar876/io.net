import React from 'react'; 
import { Images } from '../styles/chat';

export const GptImages = ({images}) => {
    console.log('images', images)
  return (
    <Images>
        {images.map((image, index) => (
          <img src={image?.url} key={index} alt={`${image?.url}-gpt`}/>
        ))}
    </Images>
  );
};