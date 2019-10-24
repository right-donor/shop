import React, {createRef} from 'react'

import {Box, Button, Heading, TextInput, Drop, Text} from 'grommet'
import {Cart} from 'grommet-icons'
import Product from './product'

class Header extends React.Component {
    targetRef = createRef()
    state = {
        loggedIn: true,
        openDrop: false,
    }

    toggleDrop = () => {
        this.setState({
            openDrop: this.state.openDrop ? false : true
        })
    }

    render() {
        const {cartItems} = this.props
        return (
              <Box 
                gridArea="header"
                direction="row"
                align="center"
                justify="between"
                pad={{horizontal: "medium", vertical: "small"}}>
                    <Heading level="2" margin="1"> Shop </Heading>
                    <Box width="small">
                        <TextInput placeholder="Search..." type="search" value={this.state.value} onChange={() => {}}/>
                    </Box>
                    {!this.state.loggedIn && <Button primary label="Sign In" onClick={() => {}}/>}
                    {this.state.loggedIn &&
                    <>
                        <Button ref={this.targetRef} plain="true" icon={<Cart/>} onClick={this.toggleDrop}/>
                        {this.state.openDrop &&
                            <Drop 
                                target={this.targetRef.current}
                                onClickOutside={this.toggleDrop}>
                                <Box 
                                    pad="small"
                                    margin="small"
                                    alignContent="center"
                                    align="center">
                                    <Heading level="3"> Cart </Heading>
                                    {!cartItems.length ?
                                        <Text> Your Cart is Empty</Text> :
                                        <>
                                        {cartItems.map(product => 
                                            <Product product={product} onCart={true}/>    
                                        )}
                                        <Button margin="small" label="Checkout"/>
                                        </>
                                    }
                                </Box>
                            </Drop>
                        }
                    </>}
              </Box>
        )
    }
}

export default Header