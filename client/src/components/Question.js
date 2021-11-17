import { useState } from 'react'

function Question({ pref }) {

    const [ value, setValue ] = useState(pref.choice_value)

    function updateHandler() {
        const currentVal = document.getElementById(`slider-${pref.id}`).value
        setValue(currentVal)
    }

    function clickHandler(value) {
        setValue(value)
    }

    let choices = []
    for (let i=0; i<5; i++) {
        let choice = {
            text: pref.preference[`choice_${i+1}`],
            value: i+1
        }
        choices.push(choice)
    }

    return(
        <div 
            className="question-container"
            id={`question-${pref.id}`}
        >
            <h2 className="question">{pref.preference.question}</h2>
            <div className="slider-container">
                <input
                    id={`slider-${pref.id}`}
                    className="slider"
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="3"
                    value={value}
                    onInput={updateHandler}
                    onChange={updateHandler}
                    list={`intervals-${pref.preference.id}`} />
                <dataList id={`intervals-${pref.preference.id}`}>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                </dataList>
                <div className="choice-row" id={`choice-row-${pref.id}`}>
                    <table>
                        <tr class="choice-row">
                            {choices.map( (choice) => 
                            <td 
                                className="choice"
                                onClick={() => clickHandler(choice.value)} >
                                    {choice.text}
                            </td>)}
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Question;