import { Button, TextField } from "@mui/material";
import styles from './ClickTrackListToolbar.module.scss';

interface Props {
    handleNew: () => void;
}

const ClickTrackListToolbar = (props: Props) => {
    return (
        <div className={styles.container}>
            <TextField />
            <Button onClick={props.handleNew}>New Click Track</Button>
        </div>
    )
}

export default ClickTrackListToolbar;