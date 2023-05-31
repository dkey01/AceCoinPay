import classes from './PurchaseTotal.module.css';
import docket from '../../../assets/docket.png';

const PurchaseTotal = () => {

    const total = <div className={classes['purchase-total']}>
                    <div>
                        <span className={classes.desc}>You have to Pay</span>
                        <div className={classes['total-amount']}>
                            <h1 className={classes.amount}>549<sub>.99</sub></h1>
                            <span className={classes.symbol}>USD</span>
                        </div>
                    </div>
                    <img src={docket} alt='docket' />
                </div>
    return <>
        {total}
    </>
}

export default PurchaseTotal;