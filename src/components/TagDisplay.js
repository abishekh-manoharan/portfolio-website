import React from 'react';

function TagDisplay({tagName}) {
    return (
        <div class="tag">
            <i>{tagName}</i>
        </div>
    );
}

export default TagDisplay;