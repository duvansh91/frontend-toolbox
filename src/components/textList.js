import React from 'react'

export default function textList({ textList }) {
    if (textList.length > 0)
        return textList.map((item, index) =>
            <div key={index} className="row justify-content-md-center">
                <div className="col-sm-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{item.text}
                            </h5>
                            <p className="card-text">
                                <span className="badge bg-dark">Reverse: </span>
                                <span className="m-3">{item.text}</span>
                            </p>
                            <p className="card-text">
                                <span className="badge bg-dark">Is palindrome: </span>
                                <span className="m-3">{item.palindrome.toString()}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )

    return (
        <div className="row justify-content-md-center">
            <div className="col-sm-4">
                <div className="card mt-10">
                    <div className="card-body">
                        Send some text.
                 </div>
                </div>
            </div>
        </div>
    )
}