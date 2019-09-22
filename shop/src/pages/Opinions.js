import React from 'react';
import AddOpinions from '../modules/AddOpinion';
import OpinionsList from '../modules/OpinionsList';


class Opinions extends React.Component {
    state = {
        opinions: [
            {
                text: "lorem sdlkn sdlkn kmd ndm dfjnsdjfsnkd",
                name: "adnrzej",
                note: "5"
            },
            {
                text: "lorem sdlkn sdlkn kmd ndm ",
                name: "mariola",
                note: "5"
            },
            {
                text: "lorem sdlkn sdlas,asdasdsdd sdsds sdsds sdskn kmd ndm dfjnsdjfsnkd",
                name: "ahim",
                note: "5"
            }
        ],
    }
    render() {
        return (
            <div className="opinions">
                <AddOpinions />
                <OpinionsList opinions={this.state.opinions} />

            </div>
        );
    }
}

export default Opinions;


