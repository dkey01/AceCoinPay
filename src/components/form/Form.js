import { useState, useEffect } from 'react';

import classes from './Form.module.css'
import PasswordInput from './PasswordInput';
import CardNumber from './CardNumber';
import CVVinput from './CVVinput';
import DateInput from './DateInput';
import Checkout from '../checkout/Checkout';

const Form = () => {
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 520) {
            setShowCheckout(true);
          } else {
            setShowCheckout(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const formButton = <button type='submit' className={classes['btn-submit']}>pay now</button>
    return (
        <form>
            <CardNumber />
            <CVVinput />
            <DateInput />
            <PasswordInput />
            {showCheckout && <Checkout />}
            {formButton}
        </form>
    )
}

export default Form;