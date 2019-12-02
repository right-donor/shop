import React from 'react'

import Product from '../components/product'
import { Box, Heading, Grid, ResponsiveContext } from 'grommet'

import Header from '../components/header'
import Footer from '../components/footer';

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
        otherProducts: [],
        cart : []
    }

    addToCart = product => {
        this.setState({
            cart : [...this.state.cart,product]
        })
    }

    componentWillMount = () => {
        this.setState({ recentProducts: [{
            name: "Rubber Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: ""
        }, {
            name: "Hedgehog Rubber Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: "https://lilalu-shop.com/media/image/03/c7/39/lilalu-quietscheente-igel-hedgehog-rubber-duck-HR.png"
        }, {
            name: "Trump Rubber Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: "https://cdn.dodowallpaper.com/full/519/rubber-duck-2.jpg"
        }, {
            name: "Ghostbusters Rubber Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: "https://i.ebayimg.com/images/g/ZK8AAOSwC-tZ-GLY/s-l1600.jpg"
        }], otherProducts: [{
            name: "Iron Man Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: "https://www.amsterdamduckstore.com/wp-content/uploads/2019/09/Red-Star-rubber-duck-leaning-Amsterdam-Duck-Store.jpg"
        },
        {
            name: "New York Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: "https://i5.walmartimages.com/asr/bde9c43c-1793-41a7-a927-90472355e620_1.5c3d6738797f1085ed962cb0218f32a4.jpeg"
        },
        {
            name: "Octopus Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: "https://cdn.shopify.com/s/files/1/0115/4891/7819/products/23206_Rubber_Duck_Octopus_e4c35a5c-e3dc-42a5-9cd9-15a2793a81f1.jpg?v=1557903065"
        },
        {
            name: "Gay Duck",
            price: 12.50,
            description: "An amazing rubber duck, 10x10.",
            manufacturer: "B-Duck",
            imageurl: "https://freepngimg.com/thumb/machine/47287-8-rubber-duck-image-free-clipart-hd.png"
        }]})
    }

    render() {
        return (
            <>
                <Header cartItems={this.state.cart}/>
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
                        <Product addToCart={this.addToCart} product={product} onCart={false}/>
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
                            <Product addToCart={this.addToCart} product={product} onCart={false}/>
                        )}
                </ResponsiveGrid>
                <Footer/>
            </>
        )
    }
}

export default Catalog