import classes from './CVVinput.module.css';
import dots from '../../assets/dots.svg';

const CVVinput = () => {

    const cvvInput = <div className={`${classes['input-group']} ${classes.col}`}>
                        <div className={`${classes.header} ${classes['col-header']}`}>
                            <div className={classes.description}>
                                <h2>CVV number</h2>
                                <p>Enter the 3 or 4 digit number on the card</p>
                            </div>
                        </div>
                        <div className={`${classes.main} ${classes['col-main']}`}>
                            <input type='text' placeholder='327' />
                            <img src={dots} alt='dots' className={classes['dots-icon']}/>
                        </div>
                    </div>
    return <>
        {cvvInput}
    </>
}

export default CVVinput;