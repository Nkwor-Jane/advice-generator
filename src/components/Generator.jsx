import React, {useState, useEffect} from 'react';
import "./Generator.css";
import axios from "axios";


function Generator() {
    const [generator, setGenerator] = useState([]);
    const fetchAdvice = async() =>{
        try{
            const response = await axios("https://api.adviceslip.com/advice");
                setGenerator(response.data);
                console.log(response.data)   
        }catch(err){
            console.log(err)
        }
    };    
    useEffect(() =>{
        fetchAdvice();
    }, [])
  return (
          <div className="container">
            <div className="box">
                <h3 className="header">
                    ADVICE 
                    <span>#{generator.slip.id}</span>
                </h3>
                <h4 className="text">
                {generator.slip.advice}
                {/* try to dey do your best no matter the situation you find yourself in. */}
                </h4>
                <div className="span">
                    <span className="line"></span>
                    <div className="rectangle">
                        <span className="stopper"></span>
                        <span className="stopper"></span>
                    </div>
                    <span className="line"></span>
                </div>
            </div>
            <div className="button">
                <div onClick={fetchAdvice}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
                </div>
            </div>

        </div>
  )
}

export default Generator;