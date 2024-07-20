import CommentForm from "../../components/CommentForm/CommentForm";
import {CardCity, City, Point} from "../../types/types";

interface RoomProps {
  selectedPoint: Point | undefined;
  handleCardHover: (point: Point | undefined) => void;
  cardsList: CardCity[];
  city: City;
}

const Room = (props: RoomProps): JSX.Element => {
  return (
    <CommentForm selectedPoint={props.selectedPoint} handleCardHover={props.handleCardHover} city={props.city} cardsList={props.cardsList}></CommentForm>
  )
}

export default Room;
