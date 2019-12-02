import React, {createRef} from 'react'

import {Box, Button, Heading, Drop, Text} from 'grommet'
import {Auth} from 'aws-amplify'
import {Cart} from 'grommet-icons'
import Product from './product'
import axios from 'axios'

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

    finalCheckout = async () => {
        if(this.props.cartItems) {
            let totalVal = 0
            this.props.cartItems.map(product => 
                totalVal += product.price
            )
            let currentUser = await Auth.currentAuthenticatedUser()
            this.checkoutWithBlockchain(totalVal,currentUser.username)
        }
    }

    checkoutWithBlockchain = async (total, userId) => {
        await axios.post('http://3.222.166.83/rewards/spend/'
        +userId+'/'
        +total+'/'
        +'user1')
        .then((res)=>{
            if(res.data.message === "Endorsement has failed") {
                alert('Hubo un error al realizar tu compra')
            } else {
                alert('Gracias por realizar tu compra')
            }
        })
        .catch((error)=>{
            alert('Hubo un error al realizar tu compra')
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
                    {/* <Box width="small">
                        <TextInput placeholder="Search..." type="search" value={this.state.value} onChange={() => {}}/>
                    </Box> */}
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
                                        <Button margin="small" label="Checkout" onClick={() => this.finalCheckout()}/>
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