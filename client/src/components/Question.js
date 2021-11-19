import { useState } from 'react'
import Choice from './Choice'

function Question({ user_preference, preferences }) {

    const [ value, setValue ] = useState(user_preference.choice_value)

    function updateHandler() {
        const currentVal = document.getElementById(`slider-${user_preference.preference_id}`).value
        setValue(parseInt(currentVal))
    }

    // console.log("PREFERENCES @Choice: ", preferences)

    let choices = []
    for (let i=0; i<5; i++) {
        let choice = {
            text: preferences.filter( (p) => p.id===user_preference.preference_id)[0][`choice_${i+1}`],
            value: i+1
        }
        choices.push(choice)
    }

    return(
        <div 
            className="question-container"
            id={`question-${user_preference.preference_id}`}
        >
            <h2 className="question">{preferences.filter( (p) => p.id===user_preference.preference_id)[0].question}</h2>
            <div className="slider-container">
                <input
                    id={`slider-${user_preference.preference_id}`}
                    className="slider"
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="3"
                    value={value}
                    onInput={updateHandler}
                    onChange={updateHandler}
                    list={`intervals-${user_preference.preference_id}`} />
                <dataList id={`intervals-${user_preference.preference_id}`}>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                </dataList>
                <div className="choice-row" id={`choice-row-${user_preference.id}`}>
                    <table class="choice-table">
                        <tr class="choice-row">
                            {choices.map( (choice) => 
                                <Choice 
                                    choice={choice}
                                    value={value}
                                    setValue={setValue} />)}
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Question;