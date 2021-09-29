import React from 'react';
import MetaData from '../../layout/MetaData';
import './ImportantLinxuCommand.css';

const ImportantLinuxCommand = () => {
    return (
        <>
            <MetaData title={'Arch Installation'} />
            <section className="blogs">
                <div className="linux-command-blog" >
                    <h1>Important Linux Commands</h1>
                    <img className="thumbnail" src="/img/linux.jpg" alt="arch_thumbnail" />
                </div>
            </section>
        </>
    )
}

export default ImportantLinuxCommand
