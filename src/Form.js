import { useState } from "react";
import orangeLegoTop from "./assets/orangeLegoTop.svg";
import greenLegoTop from "./assets/greenLegoTop.svg";
import blueLegoTop from "./assets/blueLegoTop.svg";

const Form = (props) => {
    const initialInputValues = {
        pieces: "",
        year: "",
    };

    const [inputValues, setInputValues] = useState(initialInputValues);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputValues({
            ...inputValues,
            [name]: value,
        });

    }
            
    return (
        <form 
            action=""
            onSubmit={(event) => {
                props.handleSubmit(event, inputValues)
            }}
        >
            <div className="inputRow">
            
                <div className="input">
                    <img aria-hidden="true" src={orangeLegoTop} alt="" />
    
                    <label className="sr-only" htmlFor="year">Year</label>
                    <input
                        value={inputValues.year}
                        onChange={handleChange}
                        type="text"
                        id="year"
                        className="year"
                        name="year"
                        placeholder="Year"
                    />
                </div>
                <div className="input">
                    <img aria-hidden="true" src={greenLegoTop} alt="" />

                    <label className="sr-only" htmlFor="pieces">Minimum pieces</label>
                    <input
                        value={inputValues.pieces}
                        onChange={handleChange}
                        type="text"
                        id="pieces"
                        className="pieces"
                        name="pieces"
                        placeholder="Minimum pieces"
                    />
                </div>
            </div>
            {
                props.error 
                     
                        ? <p className="error">{props.error}</p>
                        : null 
                    
            }
            <div className="button">
                <img aria-hidden="true" src={blueLegoTop} alt="" />
                <button type="submit">Submit</button>
            </div>
            
        </form>
        
    )
}

export default Form;