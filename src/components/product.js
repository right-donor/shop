import React from 'react'

import {Anchor, Box, Button, Text} from 'grommet'
import {Attraction} from 'grommet-icons'

class Product extends React.Component {
    state = {

    }

    render() {
        return (
            <Box
                pad="large"
                align="center"
                background={{color: "light-2", opacity: "strong"}}
                round
                gap="small"
                animation="fadeIn">
                    <Attraction size="large"/>
                    <Text> Party </Text>
                    <Anchor href="" label="link"/>
                    <Button label="Button" onClick={() => {}}/>
            </Box>
        )
    }
}

export default Product