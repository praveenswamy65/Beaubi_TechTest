import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form} from 'semantic-ui-react';
//import prodController from '../../../controllers/index';
const size = 'large';

export default class ProductReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {brand_name: '', product_name: '', category: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    addProducts = (e) => {
        axios({
            async:false,
            method: 'post',
            url: '/url',
            data: {
                "brand_name":this.state.brand_name,
                "product":this.state.product_name,
                "category":this.state.category
            },
            config: {headers: {'Content-Type': 'application/json'}}
        })
            .then(function (response) {
                //handle success
                alert("Updated Product");
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                alert("failed to update the product");
                console.log(response);
            });
    }

    render() {
        return (
            <div className="ui raised very padded text container segment" style={{top: '100px'}}>
                <h2 className="ui header">Product Request</h2>
                <Form size={size} onSubmit={this.addProducts}>
                    <Form.Field>
                        <label>Brand</label>
                        <div className="eight wide field">
                            <input name='brand_name' type='text' value={this.state.brand_name} placeholder='Brand Name'
                                   onChange={this.handleChange}/>
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <label>Product</label>
                        <div className="eight wide field">
                            <input name='product_name' type='text' value={this.state.product_name}
                                   placeholder='Product Name' onChange={this.handleChange}/>
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <label>Category</label>
                        <div className="eight wide field">
                            <input name='category' type='text' value={this.state.category}
                                   placeholder='Ex. Shampoo,cleanser,mascara...' onChange={this.handleChange}/>
                        </div>
                    </Form.Field>
                    <Button type='submit' color={"facebook"}>Confirm</Button>
                </Form>
            </div>
        )
    }
}


