import React from 'react';

class AddOpinions extends React.Component {
    state = {
        text: "",
        name: "",
        note: "",
        stayDate: "",
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    render() {
        return (
            <div className="add">
                <h1>Zostaw swoją opinię!</h1>
                <form>
                    <textarea rows="4" cols="65" placeholder="dodaj kilka słów od siebie" value={this.state.text} name="text" onChange={e => this.handleChange(e)}></textarea><br />
                    <input type="text" placeholder="twoje imię" value={this.state.name} name="name" onChange={e => this.handleChange(e)}></input>
                    <input type="text" placeholder="twoja ocena 0-5" value={this.state.note} name="note" onChange={e => this.handleChange(e)}></input>
                    <input type="text" placeholder="data wyjazdu" value={this.state.stayDate} name="stayDate" onChange={e => this.handleChange(e)}></input><br />
                    <button>Wyślij opinię</button>
                </form>
            </div>
        );
    }
}

export default AddOpinions;