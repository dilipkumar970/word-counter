import React , {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleExtraSpace = ()=> {
        let Text = text.split(/[ ]+/);
        setText(Text.join(' '));
    }

    const handleClear = ()=> {
        let clearText= '';
        setText(clearText);
    }

    const handleCopy = ()=> {
        let text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const[text , setText]= useState('');

    return (
        <div>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control border-dark my-2" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}id="mybox" rows="8"></textarea>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleUpClick} >Convert Uppercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert Lowercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleExtraSpace}>Remove Extraspace</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleClear}>Clear text </button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy text </button>
            </div>
            <p className='mx-3' style={{color: props.mode==='dark'?'white':'#042743'}}> {text.split(' ').length} Words characters {text.length}</p>
            <p className='mx-3' style={{color: props.mode==='dark'?'white':'#042743'}}>{0.008*text.split(' ').length} Minutes Read </p>
        </div>
        
    )
}
