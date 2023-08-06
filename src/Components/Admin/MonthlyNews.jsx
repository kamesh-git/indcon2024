// import react, react-markdown-editor-lite, and a markdown parser you like
import React from 'react';
import * as ReactDOM from 'react-dom';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}
const MonthlyNews = props => {
  return (
    <MdEditor style={{ height: '500px' }} onChange={handleEditorChange} />
  );
};

export default MonthlyNews