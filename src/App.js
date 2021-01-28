import React, {useEffect, useState} from "react";
import "./style.css";

export default function App() {
  const [url, setUrl] = useState('');
  const [text, setText] = useState("Type any text ...");
  // const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getImage()
  }, [text]);

  const getImage = async () => {
    const exampleReq = `https://api.qrserver.com/v1/create-qr-code/?size=270x270&data=${text}`;
    const response = await fetch(exampleReq);
    const data = await response;
    setUrl(data.url)
    console.log(data)
  };

  const updateText = e => {
    setText(e.target.value);
  };

  // const getSearch = () => {
  //   setText
  // }

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-2">
        <span className="navbar-brand mb-0 h1">QR Code Generator</span>
      </nav>
      <form onSubmit={} className="px-4">
        <div class="form-group row">
          <input onChange={updateText} type="text" className="col-sm-12 form-control form-control-lg" placeholder="Type any text ..." value={text} />
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <img src={url} alt="" />
      </div>
    </div>
  );
}