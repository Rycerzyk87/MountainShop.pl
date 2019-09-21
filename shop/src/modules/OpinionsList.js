import React from 'react';
import Opinion from './Opinion';


const OpinionsList = (props) => {
    const list = props.opinie.map(op => <Opinion key={opinie.name} />)
    return (
        <div className="opinions">
            <h1>Opinie naszych klientów:</h1>
            <ul>
                {list}

            </ul>
        </div>
    );
}

export default OpinionsList;