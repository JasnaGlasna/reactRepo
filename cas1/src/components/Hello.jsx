import React from 'react';
import { Goobye } from './Goodbye'


export class Hello extends React.Component {
    render() {
        return (
            <>
            <p style={{color:'red', backgourndColor: 'green', border:1}}>
                this is a class component example
            </p>
            <h6>some random text</h6>
            <Goobye/> {/* Use the component */}
            </>
        )
    }
}