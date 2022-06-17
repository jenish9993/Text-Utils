import React,{useState} from 'react'

function TextForm(props) {
    const handleupchange = () =>{
        let newtext = text.toUpperCase()
        setText(newtext)
    }

    const handlelcchange = () =>{
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const handleclearchange = () =>{
        let newtext = ''
        setText(newtext)
        props.showAlert("Text Was Cleared","danger")
    }

    const handleonchange = (event) =>{
        setText(event.target.value)
    }
    const [text,setText] = useState("")

    function countWords(str) {
        const arr = str.split(/\s+/);
      
        return arr.filter(word => word !== '').length;
      }
  return (
    <>
    <div className='container my-2' style={{width:'70%'}} >  
        <h5 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h5>
        <div className="mb-3">
            <textarea className="form-control" value={text} placeholder="Enter The Text" style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handleupchange} >Convert To Uppercase</button> 
        <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handlelcchange} >Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-danger btn-sm mx-1 my-1" onClick={handleclearchange} >Clear Text</button>
    </div>
    <div className='container my-3' style={{width:'70%'}}>
        <h5 style={{color: props.mode==='dark'?'white':'black'}}>Your Text Summery</h5>
        <p style={{color: props.mode==='dark'?'white':'black'}}>words : {countWords(text)} and Char : {text.length}</p>
        <p style={{color: props.mode==='dark'?'white':'black'}}>Reading time is {(0.008 * countWords(text)).toFixed(2)} Min</p>
        <h5 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h5>
        <p style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:'Nothing To Preview'}</p>
    </div>
  </>
  );
}

export default TextForm