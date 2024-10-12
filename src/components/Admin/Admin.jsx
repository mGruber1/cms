import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

import { TextEditor } from "./RichtTextEditor/TextEditor";

export const Admin = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const submitHandler = async () => {
    if (postTitle || postText) {
      const newPost = {
        id: crypto.randomUUID(),
        type: "post",
        title: postTitle,
        author: "Max",
        publishDate: new Date().toISOString().split("T")[0],
        status: "published",
        content: postText,
        image: "",
      };

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
          setStatusMessage("Data sent!");
          setPostTitle("");
          setPostText("");
        } else {
          console.error("Failed to submit post:", response.status);
          setStatusMessage("Failed to submit post!");
        }
      } catch (error) {
        console.error("Error submitting post:", error);
      }
    } else {
      setStatusMessage("Can't save empty Post!");
    }
  };

  const onPostTitleChange = (e) => {
    setPostTitle(e.target.value);
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
              <TextEditor
                post={{ postText: postText, setPostText: setPostText }}
              ></TextEditor>
            </Form.Group>

            <Button
              className="me-3"
              variant="primary"
              type="button"
              onClick={submitHandler}
            >
              Send
            </Button>
            <span>{statusMessage}</span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
