import React from 'react'

import Product from '../components/product'
import { Box, Heading, Grid, ResponsiveContext } from 'grommet'

const columns = {
    small: ["auto"],
    medium: ["auto", "auto"],
    large: ["auto", "auto", "auto"],
    xlarge: ["auto", "auto", "auto"]
}

const rows = {
    small: ["small", "small", "small"],
    medium: ["small", "small"],
    large: ["small"],
    xlarge: ["small"]
}

const areas = {
    small: [
        { name: "header", start: [0, 0], end: [0, 0] },
        { name: "test", start: [0, 1], end: [0, 1] },
        { name: "test1", start: [0, 2], end: [0, 2] }
    ],
    medium: [
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "test", start: [0, 1], end: [0, 1] },
        { name: "test1", start: [1, 1], end: [1, 1] }
    ],
    large: [
        { name: "header", start: [0, 0], end: [0, 0] },
        { name: "test", start: [1, 0], end: [1, 0] },
        { name: "test1", start: [2, 0], end: [2, 0] }
    ],
    xlarge: [
        { name: "header", start: [0, 0], end: [0, 0] },
        { name: "test", start: [1, 0], end: [1, 0] },
        { name: "test1", start: [2, 0], end: [2, 0] }
    ]
}

const ResponsiveGrid = ({
    children,
    overrideColumns,
    overrideRows,
    areas,
    ...props
}) => (
        <ResponsiveContext.Consumer>
            {size => {
                // take into consideration if not array is sent but a simple string
                let columnsVal = columns;
                if (columns) {
                    if (columns[size]) {
                        columnsVal = columns[size];
                    }
                }

                let rowsVal = rows;
                if (rows) {
                    if (rows[size]) {
                        rowsVal = rows[size];
                    }
                }

                // also if areas is a simple array not an object of arrays for different sizes
                let areasVal = areas;
                if (areas && !Array.isArray(areas)) areasVal = areas[size];

                return (
                    <Grid
                        {...props}
                        areas={!areasVal ? undefined : areasVal}
                        rows={!rowsVal ? size : rowsVal}
                        columns={!columnsVal ? size : columnsVal}
                    >
                        {children}
                    </Grid>
                );
            }}
        </ResponsiveContext.Consumer>
    )


const style = {
    heading: {
        marginLeft: "2rem"
    }
}

class Catalog extends React.Component {
    state = {
        recentProducts: [],
        otherProducts: []
    }

    componentWillMount = () => {
        this.setState({ recentProducts: [1, 2, 3, 4], otherProducts: [5, 6, 7, 8, 9,10] })
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
                        <Product />
                    )}
                </Box>
                {/** All other products */}
                <Heading level="2" style={style.heading}> Other products </Heading>
                {/** Other product grid */}
                <ResponsiveGrid
                    rows={rows}
                    columns={columns}
                    gap="small"
                    areas={areas}
                    margin="medium">
                        {this.state.otherProducts.map(product =>
                            <Product/>
                        )}
                </ResponsiveGrid>
            </>
        )
    }
}

export default Catalog