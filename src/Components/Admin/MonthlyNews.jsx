import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { Button } from 'react-bootstrap';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import useFirebase from '../../assests/useFirebase';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);


// Finish!
const MonthlyNews = () => {
  const [newsData, setNewsData] = useState({ html: '', text: '' })
  const { db } = useFirebase()

  useEffect(() => {
    getDoc(doc(db, 'news', 'update')).then(docsnap => setNewsData(data => ({ ...data, ...docsnap.data() })))
  }, [])

  function handleEditorChange({ html, text }) {
    setNewsData({ html: html, text: text })
  }

  const handleUpdate = () => {
    setDoc(doc(db, 'news', 'update'), { text: newsData.text }).then(data => alert('succesfully updated'))
  }
  const handlePost = () => {
    if (window.confirm('Confirm to post the content ?')) {
      setDoc(doc(db, 'news', 'update'), { text: newsData.text }).then(setDoc(doc(db, 'news', 'post'), { text: newsData.text }).then(data => alert('succesfully posted & updated')))
    }
    else {
    }
  }
  return (
    <>
      <MdEditor value={newsData.text} renderHTML={text => mdParser.render(text)} style={{ height: '500px' }} onChange={handleEditorChange} />
      <Button onClick={handleUpdate} variant='primary' className="m-2">Update</Button>
      <Button onClick={handlePost} variant='danger' className="m-2">Post</Button>
    </>
  );
};

export default MonthlyNews