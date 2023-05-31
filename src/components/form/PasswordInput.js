import classes from './PasswordInput.module.css';
import dots from '../../assets/dots.svg';

const PasswordInput = () => {
    const password = <div className={`${classes['input-group']} ${classes.col}`}>
                        <div className={`${classes.header} ${classes['col-header']}`}>
                            <div className={classes.description}>
                                <h2>password</h2>
                                <p>Enter your Dynamic password</p>
                            </div>
                        </div>
                        <div className={`${classes.main} ${classes['col-main']}`}>
                            <input type='password' placeholder='********' />
                            <img src={dots} alt='dots' className={classes['dots-icon']}/>
                        </div>
                    </div>
    return <>
        {password}
    </>
}

export default PasswordInput;