import { useState } from 'react'

function Question({ pref }) {

    const [ value, setValue ] = useState(3)

    function updateHandler() {
        const currentVal = document.getElementById(`slider-${pref.id}`).value
        setValue(currentVal)
    }

    let choices = []
    for (let i=0; i<5; i++) {
        let choice = pref[`choice_${i+1}`]
        choices.push(choice)
    }

    return(
        <div 
            className="question-container"
            id={`question-${pref.id}`}
        >
            <h3 className="question">{pref.question}</h3>
            <div className="slider-container">
                <input
                    id={`slider-${pref.id}`}
                    className="slider"
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="3"
                    onInput={updateHandler}
                    onChange={updateHandler}
                    list={`intervals-${pref.id}`} />
                <dataList id={`intervals-${pref.id}`}>
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
                                <td className="choice">{choice}</td>)}
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Question;