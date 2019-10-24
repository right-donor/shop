import React from 'react'

import {Anchor, Box, Button, Text, Image} from 'grommet'
import {Cart} from 'grommet-icons'

class Product extends React.Component {
    state = {
        product: {
            name: "Rubber Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: ""
        }
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
                    <Text size="small">{this.state.product.manufacturer}</Text>
                    <Anchor href="#" label="See more"/>
                    <Button icon={<Cart/>}label="Add to Cart" onClick={() => {}}/>
            </Box>
        )
    }
}

export default Product