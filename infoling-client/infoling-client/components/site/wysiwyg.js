import { useState, useEffect } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function WYSIWYGEditor({setContent}) {
    
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );
  
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setContent(DOMPurify.sanitize(html));
  }, [editorState]);

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wysiwyg-wrapper-class"
        editorClassName="wysiwyg-editor-class"
        toolbarClassName="wysiwyg-toolbar-class"
        toolbar={{
          options: ['inline', 'list', 'link', 'history'],
          inline: {
            options: ['bold', 'italic'],
          }
        }}
      />
    </>
  )

}