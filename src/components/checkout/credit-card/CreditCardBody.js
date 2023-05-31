import classes from './CreditCardBody.module.css'

const CreditCardBody = () => {

    const cardBody =  <div className={classes['card-body']}>
                        <span className={classes.holder}>jonathan michael</span>
                        <div className={classes.digits}>
                            <div className={classes['hidden-digits']}>
                                <span className={classes.circle}></span>
                                <span className={classes.circle}></span>
                                <span className={classes.circle}></span>
                                <span className={classes.circle}></span>
                            </div>
                            <span className={classes['visible-digits']}>3456</span>
                        </div>
                    </div>
    return <>
        {cardBody}
    </>
}

export default CreditCardBody;