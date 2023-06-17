import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualCourse.css";
import { useSelector } from "react-redux";

const IndividualCourse = (props) => {
  // const courseData = useSelector((state) => state);
  // console.log(courseData);
  const { id } = useParams();
  const indiCourse = useSelector((state) =>
    state.courses.courseData.filter((course) => course._id === id)
  );
  const [studentName, setStudentName] = useState("");
  const [courseFeedback, setCourseFeedback] = useState("");

  return (
    <>
      {indiCourse &&
        indiCourse.map((courseData, index) => (
          <Container className="mt-5" key={index}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Feedback</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Review Now</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="courseDetails">
                        <img src={courseData.courseImg} alt="courseImg" />
                        <div className="text-details">
                          <h1>{courseData.title}</h1>
                          <h2>{courseData.category}</h2>
                          <h3>{courseData.duration}</h3>
                          <h4>Rs. {courseData.price}</h4>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {courseData.feedback &&
                        courseData.feedback.map((feedback, index) => (
                          <div className="feedback-view" key={index}>
                            <h2>{feedback.studentName}</h2>
                            <h4>{feedback.courseFeedback}</h4>
                          </div>
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="form">
                        <form
                          method="POST"
                          onSubmit={(e) => {
                            e.preventDefault();
                            axios.post(
                              `http://localhost:8080/courseFeedback/${id}`,
                              {
                                studentName,
                                courseFeedback,
                              }
                            );
                            setStudentName("");
                            setCourseFeedback("");
                          }}
                        >
                          <div>
                            <label htmlFor="studentName">Name: </label>
                            <input
                              type="text"
                              value={studentName}
                              id="studentName"
                              onChange={(e) => {
                                setStudentName(e.target.value);
                              }}
                            />
                          </div>
                          <br />
                          <div>
                            <label htmlFor="courseFeedback">Feedback: </label>
                            <textarea
                              value={courseFeedback}
                              id="courseFeedback"
                              onChange={(e) => {
                                setCourseFeedback(e.target.value);
                              }}
                            ></textarea>
                          </div>
                          <br />
                          <input type="submit" />
                        </form>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        ))}
    </>
  );
};

export default IndividualCourse;
