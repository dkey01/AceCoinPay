import { useState, useEffect } from 'react';

import CloseButton from '../../store/CloseButton';
import classes from './Header.module.css';

const Header = () => {
    const [showCloseButton, setShowCloseButton] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 520) {
            setShowCloseButton(true);
          } else {
            setShowCloseButton(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const heading = <header className={classes['form-header']}>
                        <div className={classes.logo}>
                            <span className={classes['logo-circle']}></span>
                            <h1>AceCoin<span className={classes['lean-text']}>Pay</span></h1>
                        </div>
                        <div className={classes.timer}>
                            <span className={classes['timer-box']}>0</span>
                            <span className={classes['timer-box']}>1</span>
                            <span className={classes['timer-divider']}>:</span>
                            <span className={classes['timer-box']}>1</span>
                            <span className={classes['timer-box']}>9</span>
                        </div>
                    </header>
    return <>
        {showCloseButton && <CloseButton />}
        {heading}
    </>
}

export default Header;