import React from 'react';
import resume from '../files/resume.pdf'

function ResumePage(props) {
    return (
        <div class="resumePage">
            <embed src={resume} type="application/pdf" width="100%" height="100%" />
        </div>
    );
}

export default ResumePage;