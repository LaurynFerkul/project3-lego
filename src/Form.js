import { useState } from "react";
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
        console.log(inputValues)
    }
            
    return (
        <form 
            action=""
            onSubmit={(event) => {
                props.handleSubmit(event, inputValues)
            }}
        >

                <label className="sr-only" htmlFor="pieces">How many pieces?</label>
                <input
                    value={inputValues.pieces}
                    onChange={handleChange}
                    type="text"
                    id="pieces"
                    name="pieces"
                    placeholder="How many pieces?"
                />

                <label className="sr-only" htmlFor="year">Year made</label>
                <input
                    value={inputValues.year}
                    onChange={handleChange}
                    type="text"
                    id="year"
                    name="year"
                    placeholder="Year made"
                />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;