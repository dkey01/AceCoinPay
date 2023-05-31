import { useState, useEffect } from 'react';

import classes from './CreditCard.module.css';
import CloseButton from '../../../store/CloseButton';
import CreditCardHead from './CreditCardHead';
import CreditCardBody from './CreditCardBody';
import CreditCardFooter from './CreditCardFooter';
import CreditCardDesign from './CreditCardDesign';

const CreditCard = () => {
    const [removeCloseButton, setRemoveCloseButton] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 520) {
            setRemoveCloseButton(true);
          } else {
            setRemoveCloseButton(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
        <div className={classes['section-wrapper']}>
            {!removeCloseButton && <CloseButton />}
            <span className={classes.blu}></span>
            <div className={classes['credit-card']}>
                <CreditCardHead />
                <CreditCardBody />
                <CreditCardFooter />
                <CreditCardDesign />
            </div>
        </div>
    )
}

export default CreditCard;