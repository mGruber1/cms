import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardHeader,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const Content = () => {
  const location = useLocation();
  const { element } = location.state;

  return (
    <Container>
      <Row>
        <Col>
          <Card className="border-0">
            <CardHeader className="border-0 bg-white">
              <h1>{element.title}</h1>
            </CardHeader>
            <CardBody
              className="d-flex justify-content-between position-relative"
              dangerouslySetInnerHTML={{ __html: element.content }}
            ></CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
