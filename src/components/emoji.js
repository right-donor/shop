/**
 * React class to help on reusability and readability when using emojis
 * Extracted from: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7
 */
import React from 'react'

/**
 * Emoji utility
 * Use: <Emoji symbol="🐑" label="sheep"/>
 * @param {*} props Receives the emoji and a descriptor
 */
const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}>
            {props.symbol}
    </span>
)

export default Emoji