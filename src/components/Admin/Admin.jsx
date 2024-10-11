import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

export const Admin = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  const submitHandler = async () => {
    const newPost = {
      id: crypto.randomUUID(),
      type: "post",
      title: postTitle,
      author: "Marcus Gruber",
      publishDate: new Date().toISOString().split("T")[0],
      status: "published",
      content: postText,
      image: "https://picsum.photos/400/400",
    };
    console.log(crypto.randomUUID().length);

    try {
      const response = await fetch("http://localhost:3001/newPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Post submitted successfully:", responseData);
      } else {
        console.error("Failed to submit post:", response.status);
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const onPostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };
  const onPostTextChange = (e) => {
    setPostText(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Post Title ..."
                onChange={onPostTitleChange}
                value={postTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={20}
                placeholder="Write your post here..."
                onChange={onPostTextChange}
                value={postText}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={submitHandler}>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
