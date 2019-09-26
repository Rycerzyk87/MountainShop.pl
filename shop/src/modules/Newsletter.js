import React from 'react';
import '../style/Newsletter.css';

class Newsletter extends React.Component {
    state = {
        mail: "",
        saveMail: [],
        class: "join",

    }
    handleChangeMail = (e) => {
        this.setState({
            mail: e.target.value
        })
    }
    handleSubmit = () => {
        const newMail = this.state.mail;
        this.setState(prevState => ({
            saveMail: [...prevState.saveMail, newMail],
            mail: "",
            class: "none"
        }))
    }
    handleCloseClick = (event) => {
        event.preventDefault()
        this.setState({
            class: "none",
        })
    }
    render() {
        return (
            <div className={this.state.class}>
                <form>
                    <p>Zapisz się do naszego Newslettera aby dowiedzieć się o najnowszzych promocjach!</p>
                    <button className="close" onClick={this.handleCloseClick}>X</button>
                    <input placeholder="Twój adres mailowy" value={this.state.mail} onChange={this.handleChangeMail}></input>
                </form>
                <button onClick={this.handleSubmit}>Zapisz</button>
            </div>
        );
    }
}

export default Newsletter;