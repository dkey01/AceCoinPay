import classes from './CloseButton.module.css';
import { GrClose } from 'react-icons/gr';

const CloseButton = () => {

    const closeButton = <button className={classes.close}>
                        <GrClose />
                      </button>
    return <>
        {closeButton}
    </>
}

export default CloseButton;