import classes from './PurchaseData.module.css';
import apple from '../../../assets/apple.svg';

const PurchaseData = () => {

    const data = <div className={classes['purchase-data']}>
                    <div className={classes.data}>
                        <span className={classes.title}>company</span>
                        <span className={classes.value}>
                            <img src={apple} alt='product'/>
                            <span className={classes.text}>apple</span>
                        </span>
                    </div>
                    <div className={classes.data}>
                        <span className={classes.title}>order number</span>
                        <span className={classes.value}>
                            <span className={classes.text}>1266201</span>
                        </span>
                    </div>
                    <div className={classes.data}>
                        <span className={classes.title}>product</span>
                        <span className={classes.value}>
                            <span className={classes.text}>macbook air</span>
                        </span>
                    </div>
                    <div className={classes.data}>
                        <span className={classes.title}>VAT (20%)</span>
                        <span className={classes.value}>
                            <span className={classes.text}>$100.00</span>
                        </span>
                    </div>
                </div>
    return <>
        {data}
    </>
}

export default PurchaseData;