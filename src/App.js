import { useState } from "react";
import { IconButton, Snackbar} from '@material-ui/core';
import {  Alert } from "@material-ui/lab";
import { Close } from '@material-ui/icons';

import Titlebar from "./components/titlebar";
import Toolbar from "./components/toolbar";
import Editor from "./components/editor";

import Beautifier from "./beautifier";
import copy from "copy-to-clipboard";

export default function App() {
  const [editorCode, setEditorCode] = useState("");
  const [language, setLanguage] = useState("xml");
  const [message, setMessage] = useState({ isMessage : false, text : "" })



  const handleEditorChange = (editor, data, value) => {
    setEditorCode(value);
  };

  const handleLanguageChange = (event) => {
    const lang = event.currentTarget.dataset.language;
    setLanguage(lang);
  };

  const beautify = async () => {
    const beautifier = new Beautifier();
    const code = beautifier.beautify(language, editorCode);
    await setEditorCode(code);
    setMessage({ isMessage : true, text : "Your code is formatted" })
  };


  const copyCode = () => {
    copy(editorCode);
    setMessage({ isMessage : true, text : "Your code is copied" })
  };

  const handleMessageClose = (e, reason) => {
    if (reason === "clickaway") return;
    setMessage({isMessage : false});
  }

  return (
    <div className="app">
      <div className="app_wrapper">
        <Titlebar title="Code Beautifier" />
        <Toolbar
          onLanguageChange={handleLanguageChange}
          language={language}
          beautifierFunc={beautify}
          copyToClipboardFunc={copyCode}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          open={message.isMessage}
          autoHideDuration={6000}
          onClose={handleMessageClose}
        >
           <Alert variant="filled" severity="success" >
              {message.text}
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleMessageClose}>
                <Close fontSize="small" />
              </IconButton>
            </Alert>
        
        </Snackbar>
        <Editor
          onChange={handleEditorChange}
          code={editorCode}
          language={language}
        />
      </div>
    </div>
  );
}