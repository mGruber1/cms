import { Card, CardBody, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContentSearch } from "./ContentSearch/ContentSearch";
import { useMemo, useState } from "react";

export const ContentGrid = (props) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    return props.posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, props.posts]);

  return (
    <Container>
      <Row>
        <Col>
          <ContentSearch
            content={props.content}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Col>
      </Row>
      <Row className="gy-3 gx-1">
        {filteredPosts.map((element) => {
          return (
            <Col className="d-flex justify-content-center" key={element.id}>
              <Card
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/content", { state: { element } });
                }}
              >
                <CardBody className="p-0 text-center">
                  <div className="w-100 h-100 position-relative">
                    {element.image.length !== 0 ? (
                      <Image src={element.image} alt="image" />
                    ) : (
                      <div
                        className="bg-dark"
                        style={{ width: "400px", height: "400px" }}
                      />
                    )}

                    <h1 className="position-absolute top-0 text-white p-2 text-center w-100">
                      {element.title}
                    </h1>
                    <div className="position-absolute bottom-0 p-2 d-flex justify-content-between w-100 text-white">
                      <span>{element.author}</span>
                      <span>{element.publishDate}</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
