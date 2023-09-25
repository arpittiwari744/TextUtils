import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleonchange = (e) => {
    setText(e.target.value)
  }

  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase");
  }

  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase");
  }

  const handlectclick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Content copied to clipboard");
    } catch (err) {
      props.showAlert("Failed to copy!!!");
      console.log(err);
    }
  }

const handleclearclick = () => {
  let newtext = '';
  setText(newtext)
  props.showAlert("Text cleared!");
}

const handleexclick = () => {
  let newtext = "";
  for (let i = 0; i < text.length; i++) {
    if (!(text[i] === " " && text[i + 1] === " ")) {
      newtext = newtext + text[i];
    }
  }
  setText(newtext)
  props.showAlert("Extra spaces removed");
}

const handlelrclick = () => {
  let newtext = text.replace(/[\r\n]/gm, '');
  setText(newtext)
  props.showAlert("New lines removed");
}

const handlerpclick = () => {
  let punctuation = (/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g);
  let newText = text.replace(punctuation, "");
  setText(newText)
  props.showAlert("Punctuations removed");
}
return (
  <>
    <div className='container' style={{ color: props.mode === `dark` ? `white` : `#042743` }}>
      <h1>{props.heading}</h1>
      <form>
        <div className="form-group">
          <textarea className="form-control" value={text} id="mytext" rows="8" placeholder='Enter text here' onChange={handleonchange} style={{ backgroundColor: props.mode === `dark` ? `#042743` : `white` }}></textarea>
        </div>
      </form>
      <button className="btn btn-primary mx-1" type="submit" onClick={handleupclick} >Change to Uppercase</button>
      <button className="btn btn-primary mx-1" type="submit" onClick={handleloclick} >Change to Lowercase</button>
      <button className="btn btn-primary mx-1" type="submit" onClick={handlectclick} >Copy Text</button>
      <button className="btn btn-primary mx-1" type="submit" onClick={handleclearclick} >Clear</button>
      <button className="btn btn-primary mx-1" type="submit" onClick={handleexclick} >Extra Space Remover</button>
      <button className="btn btn-primary mx-1" type="submit" onClick={handlelrclick} >New Line remover</button>
      <button className="btn btn-primary mx-1" type="submit" onClick={handlerpclick} >Remove Punctuations</button>
    </div>
    <div className="container my-3" style={{ color: props.mode === `dark` ? `white` : `#042743` }}>
      <h2>Your text summary</h2>
      <p>{(text.split(" ")).filter(word => word !== '').length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter your text above to preview it here"}</p>
    </div>
  </>
)
}
