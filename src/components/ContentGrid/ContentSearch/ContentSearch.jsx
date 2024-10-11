import { Form, FormGroup } from "react-bootstrap";

export const ContentSearch = (props) => {
  const changeHandler = (e) => {
    console.log(e.target.value);
    props.setSearchTerm(e.target.value);
  };
  return (
    <Form className="mb-5 d-flex justify-content-center">
      <FormGroup>
        <Form.Control
          type="text"
          placeholder="Search ..."
          value={props.searchTerm}
          onChange={changeHandler}
        ></Form.Control>
      </FormGroup>
    </Form>
  );
};
