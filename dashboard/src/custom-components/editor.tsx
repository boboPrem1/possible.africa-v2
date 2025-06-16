"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { on } from "events";

export default function TinyMCEEditor({
  content = "",
  id,
  onContentChange,
}: {
  content?: string;
  id?: string;
  onContentChange: (content: string) => void;
}) {
  const [editorContent, setEditorContent] = React.useState(content);
  const editorRef = useRef();
  const handleEditorChange = (content: string) => {
    console.log("Content was updated:", content);
    onContentChange(content);
  };

  return (
    <>
      <input type="hidden" name="editorContent" value={editorContent} />
      <Editor
        apiKey="s9dp2ddyijiev7d3bj5okh1an1uht5eaocvbnxavpcd67tyq"
        initialValue={editorContent}
        id={id}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | casechange blocks | visualblocks image link bold italic forecolor backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist checklist outdent indent | removeformat wordcount media insertdatetime | preview fullscreen charmap table help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:18px }",
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
}
