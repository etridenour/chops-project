import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { IClickTrack } from "../../ClickTrackBuilder/models/click-track";
import { IExercise } from "../../Exercises/models/exercise";

interface Props {
  exercises: IExercise[];
  addActiveSessionItems: (clickTrack: IClickTrack, exercise: IExercise) => void;
}

const SessionSidebar = (props: Props) => {

  const handleAddClickTrack = (clickTrack: IClickTrack, exercise: IExercise) => {
    props.addActiveSessionItems(clickTrack, exercise);
  };

  return (
    <div>
      {
        props.exercises.map((e, i) => {
          return (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{e.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {e.clickTracks.map((c: any, i: number) => {
                  return (
                    <Button key={i} onClick={() => handleAddClickTrack(c, e)}>
                      {c.name}
                    </Button>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};

export default SessionSidebar;
