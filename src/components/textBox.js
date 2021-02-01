import React, { useState } from 'react'

const server = 'http://localhost:3000'

export default function textBox({ textList, setList }) {
    const [text, setText] = useState('')
    const [disableButton, setDisableButton] = useState(true)

    const onChangeText = (e) => {
        const inputText = e.target.value
        setText(inputText)
        if (inputText.trim().length > 0)
            setDisableButton(false)
        else
            setDisableButton(true)
    }

    const onClickSend = async () => {
        const response = await fetch(`${server}/iecho?text=${text}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const textData = await response.json()
            const tmpList = [...textList]
            tmpList.unshift(
                {
                    normalText: text,
                    text: textData.text,
                    palindrome: textData.palindrome
                }
            )
            setList(tmpList)
            setText('')
            setDisableButton(true)
        }
    }

    return (
        <div className="row">
            <div className="col">
                <nav className="navbar justify-content-md-center navbar-light bg-danger">
                    <div className="w-75 justify-content-md-center">
                        <input className="form-control mr-sm-2 d-inline w-75"
                            type="search"
                            onChange={onChangeText}
                            placeholder="Insert Text"
                            value={text}
                        />
                        <button className="btn bg-primary my-2 my-sm-0 d-inline ms-5 text-white"
                            type="submit"
                            onClick={onClickSend}
                            disabled={disableButton}>
                            Send
                            </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}