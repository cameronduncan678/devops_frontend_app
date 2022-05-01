import './App.css';
import Card from 'react-bootstrap/Card'
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="mt-4">
            <Card>
              <Card.Header as="h4">Devops Frontend App</Card.Header>
              <Card.Body>
                <Card.Text>
                  This is a test app for Devops pipeline with Azure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col className="mt-6">
            <Card>
              <Card.Title>{process.env.REACT_APP_VAR1}</Card.Title>
            </Card>
          </Col>
          <Col className="mt-6">
            <Card>
              <Card.Title>{process.env.REACT_APP_VAR2}</Card.Title>
            </Card>
          </Col>
          <Col className="mt-6">
            <Card>
              <Card.Title>{process.env.REACT_APP_VAR3}</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
