import { Question } from "../../interfaces";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./questionCard.scss";
import Button from "@mui/material/Button";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  let history = useHistory();

  const redirect = (id: number) => {
    console.log("in redirect");
    const url = `/question${id}`;
    history.push(url);
  };

  // console.log('PROPS!!!:__', props)

  return (
    // <div className="QuestionCard" key={props.question.id} onClick={() => redirect(props.question.id)}>
    <div className="QuestionCard" key={props.question.id}>
      <h2>{props.question.title}</h2>
      <p>{props.question.body.slice(0, 15)} ...</p>
      {/* <p>{props.question.responses} responses</p> */}

      <Button
        variant="outlined"
        className="read-button"
        onClick={() => redirect(props.question.id)}
      >
        READ
      </Button>
    </div>
  );
};

export default QuestionCard;
