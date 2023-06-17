import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <>
      <Container className="mt-2">
        <Link to={`/course/${props.course._id}`}>
          <Card style={({ cursor: "pointer" }, { textDecoration: "none" })}>
            <Card.Img variant="top" src={props.course.courseImg} />
            <Card.Body>
              <Card.Title style={{ textDecoration: "none" }}>
                {props.course.title}
              </Card.Title>
              <Card.Text style={{ textDecoration: "none" }}>
                Rs. {props.course.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </>
  );
};

export default CourseCard;
