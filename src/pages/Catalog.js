import React from 'react'

import Product from '../components/product'
import {Box,Heading, Grid} from 'grommet'

const style = {
    heading: {
        marginLeft: "2rem"
    }
}

class Catalog extends React.Component {
    state = {
        recentProducts : [],
        otherProducts : []
    }

    componentWillMount = () => {
        this.setState({recentProducts : [1,2,3,4], otherProducts : [5,6,7,8,9]})
    }

    render() {
        return (
            <>
            {/** 4 Most Recent Products */}
            <Heading level="2" style={style.heading}>Most Recent Products</Heading>
            <Box
                direction="row-responsive"
                justify="between"
                align="start"
                pad="medium"
                background="light-1"
                gap="large"
                overflow="scroll">
                    {this.state.recentProducts.map(product => 
                      <Product/>
                    )}
            </Box>
            {/** All other products */}
            <Heading level="2" style={style.heading}> Other products </Heading>
            {/** Other product grid */}
            <Grid
                columns={{
                    count: 4,
                    size: "auto"
                }}
                gap="medium"
                margin="small">
                    {this.state.otherProducts.map(product =>
                    <Product/>
                    )}
            </Grid>
            </>
        )
    }
}

export default Catalog