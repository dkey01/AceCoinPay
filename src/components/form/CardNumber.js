import classes from './CardNumber.module.css';
import { HiPencil } from 'react-icons/hi';
import mastercard from '../../assets/mastercard.svg';
import verify from '../../assets/verify.svg';

const CardNumber = () => {

    const cardNumber = <div className={classes['input-group']}>
                            <div className={classes.header}>
                                <div className={classes.description}>
                                    <h2>card number</h2>
                                    <p>Enter the 15-digit card number on the card</p>
                                </div>
                                <button className={classes.edit}>
                                    <HiPencil className={classes.pencil}/>
                                    <span className={classes['btn-desc']}>Edit</span>
                                </button>
                            </div>
                            <div className={classes.main}>
                                <img src={mastercard} alt='card' className={classes['card-icon']}/>
                                <div className={classes['input-group']}>
                                    <span><input type='text' placeholder='2412' /></span>
                                    <span className={classes.divider}>-</span>
                                    <span><input type='text' placeholder='7512' /></span>
                                    <span className={classes.divider}>-</span>
                                    <span><input type='text' placeholder='3412' /></span>
                                    <span className={classes.divider}>-</span>
                                    <span><input type='text' placeholder='3456' /></span>    
                                </div>
                                <img src={verify} alt='verify' className={classes['verify-icon']}/>
                            </div>
                        </div>
    return <>
        {cardNumber}
    </>
}

export default CardNumber;