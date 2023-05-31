import { useState, useEffect } from 'react';

import classes from './Wrapper.module.css';
import Header from '../header/Header';
import Form from '../form/Form';
import Checkout from '../checkout/Checkout';


const Wrapper = () => {
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 520) {
            setMobileView(true);
          } else {
            setMobileView(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const showCheckout = mobileView ?  null : <Checkout />;

      const showMobileWrapperClass = mobileView ? classes.mobile : classes.wrapper;

      const mobileLeftSectionClass = mobileView ? '': classes['left-section'];

      const mobileRightSectionClass = mobileView ? '' : classes['right-section'];
    
      console.log(mobileView)
    return (
        <>
            <div className={showMobileWrapperClass}>
                <div className={mobileLeftSectionClass}>
                    <Header />
                    <Form />
                </div>
                <div className={mobileRightSectionClass}>
                    {showCheckout}
                </div>
            </div>
        </>
    )
}
 
export default Wrapper;