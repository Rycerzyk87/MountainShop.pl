import React from 'react';
import { Prompt } from 'react-router-dom';

import '../style/Contact.css'

class Contact extends React.Component {
    state = {
        value: "",
        valueMail: "",
        correctMessage: "",

        errors: {
            value: false,
            valueMail: false
        }
    }
    errorsMessages = {
        value_incorrect: "Wiadomość musi zawierać minimum 15 znaków",
        valueMail_incorrect: "Adres mailowy musi zawierać znak '@' ",
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
    // getMessages() {
    //     const targetUrl = `http://localhost:3000/messages`;
    //     fetch(targetUrl, {
    //         method: 'GET',
    //     }).then(response => response.json())
    //         .then(data => console.log(data)
    //         );
    // }
    sendMessages() {
        const targetUrl = `http://localhost:3000/messages`;
        const data = {
            value: this.state.value,
            valueMail: this.state.valueMail
        };

        fetch(targetUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation();
        if (validation.correct) {
            this.sendMessages();
            this.setState({
                value: "",
                valueMail: "",
                correctMessage: "Wiadomość została wysłana poprawnie!",

                errors: {
                    value: false,
                    valueMail: false
                }
            });
            // this.getMessages();
        } else {
            this.setState({
                errors: {
                    value: !validation.value,
                    valueMail: !validation.valueMail
                }
            })
        }
    }
    formValidation = () => {
        let value = false;
        let valueMail = false;
        let correct = false;

        if (this.state.value.length > 14 && this.state.value.indexOf(' ') !== -1) { value = true }
        if (this.state.valueMail.indexOf('@') !== -1) { valueMail = true }
        if (value && valueMail) { correct = true }
        return ({
            value,
            valueMail,
            correct,
        })
    }
    render() {
        return (
            <>
                <div >
                    <div className="contact">
                        <div className="correctMessage">{this.state.correctMessage}</div>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="valueMail">
                                <h3>Napisz do nas!!!</h3>
                                {this.state.errors.valueMail && <p className="error">{this.errorsMessages.valueMail_incorrect}</p>}
                                <input value={this.state.valueMail} onChange={this.handleChangeMail} placeholder="Twój adres mailowy"></input>
                            </label>
                            <label htmlFor="value">
                                {this.state.errors.value && <p className="error">{this.errorsMessages.value_incorrect}</p>}
                                <textarea value={this.state.value} onChange={this.handleChange} placeholder="Zostaw nam wiadomość"></textarea><br></br>
                            </label>
                            <button onSubmit={this.handleSubmit}>Wyślij</button>
                        </form>
                        <Prompt when={this.state.value} message="Wiadomość nie została wysłana, czy chcesz opuścić stronę?!" />
                    </div>

                    <div className="adress">
                        <div className="foto kont1"></div>
                        <h3>Gdzie nas znajdziesz:</h3>
                        <div className="iframe ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.642785143959!2d18.853076488426414!3d50.44317588188764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112a2eef652e85%3A0xdffc2e861b102af2!2sZUS%20w%20Tarnowskich%20G%C3%B3rach!5e0!3m2!1spl!2spl!4v1570038597024!5m2!1spl!2spl" style={{ width: "40vw", height: "50vh", frameborder: "0", }} title="elbrus"></iframe></div>
                    </div>
                    <div className="tele">
                        <p><i className="fa fa-phone"> </i> 700 72 772</p>
                    </div>
                </div>

            </>
        );
    }
}

export default Contact;
