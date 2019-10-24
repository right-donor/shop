import React from 'react'

import {Box, Button, Heading, TextInput} from 'grommet'

class Header extends React.Component {
    state = {

    }

    render() {
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
                    <Button primary label="Sign In" onClick={() => {}}/>
              </Box>
        )
    }
}

export default Header