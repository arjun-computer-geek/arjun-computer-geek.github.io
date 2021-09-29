import React from 'react'
import './Code.css'

const Code = ({code}) => {
    return (
        <pre className="language-bash">
            <code className="language-bash">{code}</code>
        </pre>
    )
}

export default Code
