import { useEffect, useState } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

// EventCard Component
function EventCard(event) {
  const [registrationsOpen, setRegistrationsOpen] = useState(event.status); // Assuming event has isOpen property for registration status
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if(new Date(event.dateTo) >= new Date()){
      setRegistrationsOpen(true);
    }
    else{
      setRegistrationsOpen(false);
    }
  }, [])
  

  const handleRegister = (event) => {
    setRegistered(true);
    alert(`Registered for ${event.name}`);
  };

  const handleUnregister = (event) => {
    setRegistered(false);
    alert(`Unregistered from ${event.name}`);
  };

  return (
    <Card style={{ margin: "1rem" }} key={uuidv4()}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>
            <h1>{event.name}</h1>
          </Card.Title>
          <Badge bg={registrationsOpen ? "success" : "secondary"}>
            {registrationsOpen ? "Registrations Open" : "Registrations Closed"}
          </Badge>
        </div>

        <Card.Text>
          <p className="text-lg">{event.description}</p>
        </Card.Text>

        <div className="d-flex justify-content-between">
          {/* Event Info Section */}
          <div className="d-flex gap-3">
            <div className="d-flex flex-column gap-1">
              <span><strong>Location:</strong> {event.location}</span>
              <span><strong>Last Date:</strong> {new Date(event.dateTo).toLocaleDateString()}</span>
              <span><strong>Category:</strong> {event.category}</span>
            </div>
          </div>

          {/* Register/Unregister Button Section */}
          <div className="d-flex flex-column justify-content-center">
            {registered ? (
              <Button
                disabled={new Date(event.dateTo) < new Date()}
                variant="danger"
                onClick={() => handleUnregister(event)}
              >
                <b>Unregister</b>
              </Button>
            ) : (
              <Button
                disabled={new Date(event.dateTo) < new Date()}
                variant="success"
                onClick={() => handleRegister(event)}
              >
                <b>Register</b>
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
