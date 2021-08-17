import React, {useState} from 'react';

let Scroll = () => {

    const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 640){
      setVisible(true);
    } 
    else if (scrolled <= 640){
      setVisible(false);
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',
    });
  };
  
  window.addEventListener('scroll', toggleVisible);


    return(
        <>
            <div className="container">
                <span className="fa-triangle" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>Top</span>
            </div>
        </>
    );
}
export default Scroll;