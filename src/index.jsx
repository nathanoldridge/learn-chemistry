import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css'

const root = createRoot(document.getElementById('root')).render(<App/>);
ReactDOM.render( < QuestionItem /> , document.getElementById('root'));
root.render(<App />);