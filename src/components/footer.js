import React from 'react'

import {Box, Text, Anchor} from 'grommet'
import Emoji from './emoji'

/**
 * Simple Footer using Grommet
 * Shouldn't have much information and must remain static
 */

class Footer extends React.Component {
    render() {
        return (
            <Box 
                gridArea="footer"
                margin="medium"
                direction="row"
                align="center"
                justify="center"
                pad={{horizontal: "medium", vertical: "small"}}>
                    <Text 
                        weight="bold" 
                        size="small"> 
                        Made with love by the team @ <Anchor href="#" primary label="Right Donor"/> <Emoji symbol="❤️" label="heart"/>
                    </Text>
                    
              </Box>
        )
    }
}

export default Footer