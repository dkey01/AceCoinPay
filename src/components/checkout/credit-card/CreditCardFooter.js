import classes from './CreditCardFooter.module.css';
import mastercard2 from '../../../assets/mastercard2.svg';

const CreditCardFooter = () => {

    const cardFooter = <div className={classes['card-footer']}>
                            <span className={classes.expiry}>09/22</span>
                            <img src={mastercard2} alt='card' className={classes['card-logo']}/>
                        </div>
    return <>
        {cardFooter}
    </>
}

export default CreditCardFooter;