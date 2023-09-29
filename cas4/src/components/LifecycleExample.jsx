import React from 'react';

export class LifecycleExample extends React.Component{
    
    constructor(props){
        super(props);
        console.log("This method is called from the CONSTRUCTOR");
        this.state = {
            promenliva: "Vrednost 1"
        }
    }

    componentDidMount(){
        console.log("THIS IS COMPONENT DID MOUNT");
    }

    SignIn = () => {
        this.setState({
            promenliva: "Nova Vrednost 2"
        })
    }

    render(){
        console.log("THIS IS RENDER METHOD");
        return(
            <div id="lifecycle-example">
                <h1>Class Component Example</h1>
                <p>Vrednost na Promenliva: {this.state.promenliva}</p>
                <button onClick={(this.SignIn)} >Click Me !</button>
            </div>
        )
    }
}