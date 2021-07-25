import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({title}) => {
    return (
        <Helmet>
            <title>{`${title} - arjun-computer-geek`}</title>
        </Helmet>
    )
}

export default MetaData
