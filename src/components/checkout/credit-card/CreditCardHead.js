import classes from './CreditCardHead.module.css';
import chip from '../../../assets/chip.png';
import wifi from '../../../assets/wifi.png';

const CreditCardHead = () => {

    const cardHead = <div className={classes['card-head']}>
                        <img src={chip} alt='chip' className={classes.chip}/>
                        <img src={wifi} alt='wifi' className={classes.wifi}/>
                    </div>
    return <>
        {cardHead}
    </>
}

export default CreditCardHead;