import React from 'react'

export default function Greet(props) {
    return (
        <div className="container card p-3 mt-2 register-container text-center">
            <h2>{props.name}</h2>
            <h4>Thank you for joining us.</h4>
            <h6>Verification sent to {props.email}.</h6>
        </div>
    )
}
