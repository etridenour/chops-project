import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion } from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { IExercise } from "../../../core/models/exercise";
import styles from "./ClickTrackBuilderMain.module.scss";


interface MainProps {
  exercises: IExercise[];
}

const ClickTrackBuilderMain = (props: MainProps) => {
  const handleDelete = (id: string) => {
    console.log(id)
  }

  return (
    <main className={styles["main-container"]}>
      {props.exercises &&
        props.exercises.map((exercise, i) => {
          return (
            // <section className={styles["exercise-item"]} key={i}>
            //   <span>{exercise.name}</span>
            //   <IconButton onClick={() => handleDelete(exercise.id)} aria-label="delete" size="large">
            //     <DeleteIcon fontSize="inherit" />
            //   </IconButton>
            // </section>
            <Accordion className={styles["exercise-item"]} key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{exercise.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          );
        })}
    </main>
  );
};

export default ClickTrackBuilderMain;
