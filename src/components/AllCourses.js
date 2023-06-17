import React, { memo } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CourseCard from "./CourseCard";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/courseSlice";

const AllCourses = memo(() => {
  const allCourses = useSelector((state) => state.courses.courseData);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/courseList")
      .then((res) => dispatch(fetchCourses(res.data)));
  }, [dispatch]);

  return (
    <>
      <Container className="mt-5">
        <Row xs={1} md={3} className="g-4">
          {allCourses &&
            allCourses.map((course) => (
              <Col key={course._id}>
                <CourseCard key={course._id} course={course} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
});

export default AllCourses;
