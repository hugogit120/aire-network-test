import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
    return (
        <div className="flex justify-center items-center vh-100">
            <FontAwesomeIcon spin icon={faSpinner} className=" f1" />
        </div>

    )
}

export default Loading;

