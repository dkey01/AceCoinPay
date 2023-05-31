import classes from './CheckoutDetail.module.css';
import PurchaseData from './PurchaseData';
import PurchaseTotal from './PurchaseTotal';

const CheckoutDetail = () => {

    const divider =  <div className={classes.divider}>
                        <div className={classes.left}></div>
                        <div className={classes.right}></div>
                    </div>
    return <div className={classes['checkout-detail']}>
        <PurchaseData />
        <>
            {divider}
        </>
        <PurchaseTotal />
        
    </div>
}

export default CheckoutDetail;