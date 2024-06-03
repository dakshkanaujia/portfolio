import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Typing.css';

function Typing({text, typingSpeed, deletingSpeed, duration}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const handleTyping = () => {
        if(!isDeleting){
          if(displayedText.length < text[index].length){
            setDisplayedText(displayedText + text[index].charAt(displayedText.length));
          }else{
            setTimeout(()=>{setIsDeleting(true);},duration);            
          }
        }else{
          if(displayedText.length != 0){
            setDisplayedText((prev) => prev.slice(0,-1));
          }else{
            // setIsDeleting(false);
            setTimeout(()=>{setIsDeleting(false);},duration);
            setIndex((prev) => (prev+1)%(text.length))
          }
        }
      };
      
      const timeout = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );

      return ()=>{clearTimeout(timeout);}
      
    }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]);
    return (
      <>
        <div className='typing-effect anotonio-typer'>
          {displayedText}
          <span className='caret'></span>
        </div>        
      </>
    )
  }

export default Typing;