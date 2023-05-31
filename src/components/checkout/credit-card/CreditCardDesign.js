import classes from './CreditCardDesign.module.css';

const CreditCardDesign = () => {

    const cardDesign = <div className={classes['card-design']}>
                            <span className={classes.middle}>
                                <span className={classes.inner}></span>
                            </span>
                        </div>
    return <>
        {cardDesign}
    </>
}

export default CreditCardDesign;