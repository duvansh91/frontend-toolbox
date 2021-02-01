import React, { useState } from 'react'

import TextBox from './components/textBox'
import TextList from './components/textList'

export default function app() {
    const [list, setList] = useState([])
    return (
        <div className="container-fluid me-0 ms-0">
            <TextBox
                textList={list}
                setList={setList}
            />
            <TextList
                textList={list}
                setList={setList}
            />
        </div >
    )
}