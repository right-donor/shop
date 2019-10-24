import React from 'react'

import {Anchor, Box, Button, Text, Image} from 'grommet'
import {Cart} from 'grommet-icons'

class Product extends React.Component {
    state = {
        product: {},
        onCart: false
    }

    componentWillMount = () => {
        this.setState({
            product: this.props.product,
            onCart: this.props.onCart
        })
        console.log(this.state)
    }

    render() {
        return (
            <Box
                wrap={true}
                pad="medium"
                align="center"
                direction="column"
                background={{color: "light-2", opacity: "strong"}}
                round
                gap="small"
                animation="fadeIn">
                    <Box width="xxsmall" height="xxsmall">
                        <Image fit="contain" fallback="http://pngimg.com/uploads/rubber_duck/rubber_duck_PNG4.png" src={this.state.product.imageurl}/>
                    </Box>
                    <Text> {this.state.product.name} </Text>
                    {!this.state.onCart && <Text size="small">{this.state.product.manufacturer}</Text>}
                    <Text weight="bold" size="small">{this.state.product.price} Tokens </Text>
                    {!this.state.onCart &&
                        <>
                            <Anchor href="#" label="See more"/>
                            <Button icon={<Cart/>}label="Add to Cart" onClick={() => this.props.addToCart(this.state.product)}/>
                        </>
                    }
                    
            </Box>
        )
    }
}

export default Product