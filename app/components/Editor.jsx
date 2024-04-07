import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });
const Editor = ({ content, setContent }) => {
  return (
    <QuillNoSSRWrapper
      theme="snow"
      id="content"
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
      ]}
      value={content}
      onChange={setContent}
      className="mb-4 w-full"
    />
  );
};

export default Editor;
