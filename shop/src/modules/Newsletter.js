import React from 'react';
import '../style/Newsletter.css';

// let time =
class Newsletter extends React.Component {
    state = {
        mail: "",
        saveMail: [],
        class: "join",
        time: -1000 + "px",

    }
    positionChange() {
        setTimeout(() => {
            this.setState({
                time: -80 + "px"
            })
        }, 10000);
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
    componentDidMount() {
        this.positionChange();
    }
    render() {
        return (
            <>
                <div className={this.state.class} style={{ bottom: `${this.state.time}` }}>
                    <form>
                        <p>Zapisz się do naszego Newslettera aby dowiedzieć się o najnowszych promocjach!</p>
                        <button className="close" onClick={this.handleCloseClick}>X</button>
                        <input placeholder="Twój adres mailowy" value={this.state.mail} onChange={this.handleChangeMail}></input>
                    </form>
                    <button onClick={this.handleSubmit}>Zapisz</button>
                </div>
                {this.state.class === "none" ?
                    <div className="leftNews">
                        {/* <p>k</p><p>l</p><p>i</p><p>k</p><p>.</p> */}
                        <p><a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a></p>
                        <p><a href="https://pl-pl.facebook.com" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a></p>
                        <p><a href="https://www.google.pl" className="fa fa-google" target="_blank" rel="noopener noreferrer"></a></p>
                        <p><a href="https://twitter.com" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a></p>
                        <p><a href="https://pl.pinterest.com/" className="fa fa-pinterest" target="_blank" rel="noopener noreferrer"></a></p>
                    </div> : null}
            </>
        );
    }
}

export default Newsletter;