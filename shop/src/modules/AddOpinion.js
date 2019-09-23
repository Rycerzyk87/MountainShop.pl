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
    handleClick = (event) => {
        event.preventDefault()
        const { text, name, note, stayDate } = this.state;
        this.props.add(text, name, note, stayDate)
        this.setState({
            text: "",
            name: "",
            note: "",
            stayDate: "",
        })
    }
    render() {
        const { text, name, note, stayDate } = this.state;
        return (
            <div className="add">
                <h1>Zostaw swoją opinię!</h1>
                <form>
                    <textarea rows="4" cols="65" placeholder="dodaj kilka słów od siebie" value={text} name="text" onChange={e => this.handleChange(e)}></textarea><br />
                    <input type="text" placeholder="twoje imię" value={name} name="name" onChange={e => this.handleChange(e)}></input>
                    <input type="text" placeholder="twoja ocena 0-5" value={note} name="note" onChange={e => this.handleChange(e)}></input>
                    <input type="text" placeholder="data wyjazdu" value={stayDate} name="stayDate" onChange={e => this.handleChange(e)}></input><br />
                    <button onClick={this.handleClick}>Wyślij opinię</button>
                </form>
            </div>
        );
    }
}

export default AddOpinions;