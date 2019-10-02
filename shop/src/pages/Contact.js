import React from 'react';
import { Prompt } from 'react-router-dom';

import '../style/Contact.css'

class Contact extends React.Component {
    state = {
        value: "",
        valueMail: ""
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleChangeMail = (e) => {
        this.setState({
            valueMail: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
            valueMail: ""

        })
    }
    render() {
        return (
            <>
                <div >
                    <div className="contact">
                        <form onSubmit={this.handleSubmit}>
                            <h3>Napisz do nas!</h3>
                            <input value={this.state.valueMail} onChange={this.handleChangeMail} placeholder="Twój adres mailowy"></input>

                            <textarea value={this.state.value} onChange={this.handleChange} placeholder="Zostaw nam wiadomość"></textarea><br></br>
                            <button onSubmit={this.handleSubmit}>Wyślij</button>
                        </form>
                        <Prompt when={this.state.value} message="Wiadomość nie została wysłana, czy chcesz opuścić stronę?" />
                    </div>
                    <div className="adress">
                        <h3>Gdzie nas znajdziesz:</h3>
                        <div className="iframe ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.642785143959!2d18.853076488426414!3d50.44317588188764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112a2eef652e85%3A0xdffc2e861b102af2!2sZUS%20w%20Tarnowskich%20G%C3%B3rach!5e0!3m2!1spl!2spl!4v1570038597024!5m2!1spl!2spl" style={{ width: "40vw", height: "50vh", frameborder: "0", }} title="elbrus"></iframe></div>
                    </div>
                </div>

            </>
        );
    }
}

export default Contact;
