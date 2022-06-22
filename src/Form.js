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
        console.log("here are inputvalues",inputValues)
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
                    <img aria-hidden="true" src={orangeLegoTop} />
    
                    <label className="sr-only" htmlFor="year">Year made</label>
                    <input
                        value={inputValues.year}
                        onChange={handleChange}
                        type="text"
                        id="year"
                        className="year"
                        name="year"
                        placeholder="Year made"
                    />
                </div>
                <div className="input">
                    <img aria-hidden="true" src={greenLegoTop} />

                    <label className="sr-only" htmlFor="pieces">How many pieces?</label>
                    <input
                        value={inputValues.pieces}
                        onChange={handleChange}
                        type="text"
                        id="pieces"
                        className="pieces"
                        name="pieces"
                        placeholder="How many pieces?"
                    />
                </div>
            </div>

            <div className="button">
                <img aria-hidden="true" src={blueLegoTop} />
                <button type="submit">Submit</button>
            </div>
                

        </form>
    )
}

export default Form;