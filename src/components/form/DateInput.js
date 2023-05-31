import classes from './DateInput.module.css';

const DateInput = () => {

    const expiryDate = <div className={`${classes['input-group']} ${classes.col}`}>
                            <div className={`${classes.header} ${classes['col-header']}`}>
                                <div className={classes.description}>
                                    <h2>expiry date</h2>
                                    <p>Enter the expiration date of the card</p>
                                </div>
                            </div>
                            <div className={classes.group}>
                                <div className={`${classes.main} ${classes['col-main']}`}>
                                    <input type='text' placeholder='09' />
                                </div>
                                <span className={classes.divider}>/</span>
                                <div className={`${classes.main} ${classes['col-main']}`}>
                                    <input type='text' placeholder='22' />
                                </div>
                            </div>
                        </div>
    return <>
        {expiryDate}
    </>
}

export default DateInput;