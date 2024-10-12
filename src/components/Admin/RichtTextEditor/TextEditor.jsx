import QuillEditor from "react-quill";

import "react-quill/dist/quill.snow.css";

export const TextEditor = (props) => {
  const { postText, setPostText } = props.post;
  return (
    <QuillEditor
      theme="snow"
      value={postText}
      onChange={(e) => {
        setPostText(e);
      }}
    ></QuillEditor>
  );
};
