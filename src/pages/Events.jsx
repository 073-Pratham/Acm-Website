import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard from "../components/EventCard";
import Nav from "../components/Nav";
import axios from "axios";

function Events() {
  const events = [
    {
      id: 12,
      name: "Destinite",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 13,
      name: "Integration Bee",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 14,
      name: "Lorem",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 15,
      name: "Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 16,
      name: "Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 17,
      name: "Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  // useEffect(async() => {
  //   axios.get("http://localhost:3000/api/events", data).then((res) => {
  //     if (res.status === 201) {
  //       clearForm();
  //     }
  //   });
  //   const events = await axios.get("https://typeracer-backend.onrender.com/api/events");
  //   console.log("events", events);
  // }, [])
  
  return (
    <div className="bg-off-white">
      <Nav />
      <Container className="my-5">
        <h1 className="font-bold text-6xl">Events</h1>
        <Row>
          {events.map((event) => (
            <Col key={event.id} md={4} className="mb-4">
              <EventCard
                id={event.id}
                name={event.name}
                description={event.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Events;
