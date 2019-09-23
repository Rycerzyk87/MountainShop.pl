import React from 'react';
import Opinion from './Opinion';


const OpinionsList = (props) => {
    const list = props.opinions.map(opinion => <Opinion key={opinion.name} opinion={opinion} />)
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