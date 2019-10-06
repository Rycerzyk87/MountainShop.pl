import React from 'react';
import AddOpinions from '../modules/AddOpinion';
import OpinionsList from '../modules/OpinionsList';
import '../style/Opinions.css';


class Opinions extends React.Component {
    state = {
        opinions: [

        ]
    }
    addOpition = (text, name, note, stayDate) => {
        const opinion = {
            text: text,
            name: name,
            note: note,
            stayDate: stayDate,
        }
        this.setState(prevState => ({
            opinions: [opinion, ...prevState.opinions]
        }))
        return true
    }

    getOpinions = () => {
        const targetUrl = `http://localhost:3000/opinions`;
        fetch(targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    opinions: data,
                })
            }
            );
    }
    componentDidMount() {
        this.getOpinions();
    }
    // componentWillUnmount() {
    //     this.getOpinions();
    // }
    render() {
        return (
            <div className="opinions">
                <AddOpinions add={this.addOpition} />
                {/* <AddOpinions /> */}
                <OpinionsList opinions={this.state.opinions} />

            </div>
        );
    }
}

export default Opinions;


