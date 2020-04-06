// Created a form for product request task using "Semantic UI"
// Used "axios"- a JS library for handling HTTP POST call (Better than "fetch" in handling the responses)
import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form} from 'semantic-ui-react';

const size = 'large';

export default class ProductReq extends React.Component {
    constructor(props) {
        super(props);
        //Defining state variables
        this.state = {brand_name: '', product_name: '', category: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    //Method to handle changes in the form
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    addProducts = (e) => {
        //Http Post call which to update the new product using "createProduct" controller method
        axios({
            async: false,
            method: 'post',
            url: '/addProduct',
            data: {
                "brand_name": this.state.brand_name,
                "product": this.state.product_name,
                "category": this.state.category
            },
            config: {headers: {'Content-Type': 'application/json'}}
        })
            .then(function (response) {
                //handle success
                alert("Product added successfully!!!");
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                alert("Failed to add the product");
                console.log(response);
            });
    }

    render() {
        return (
            <div className="ui raised very padded text container segment" style={{top: '100px'}}>
                <h2 className="ui header">Product Request</h2>
                <Form size={size} onSubmit={this.addProducts}>
                    <Form.Field>
                        <div className="required field">
                            <label>Brand</label>
                        </div>
                        <div className="eight wide field">
                            <input name='brand_name' type='text' value={this.state.brand_name} placeholder='Brand Name'
                                   onChange={this.handleChange} required={true}/>
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <div className="required field">
                            <label>Product</label>
                        </div>
                        <div className="eight wide field">
                            <input name='product_name' type='text' value={this.state.product_name}
                                   placeholder='Product Name' onChange={this.handleChange} required={true}/>
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <div className="required field">
                            <label>Category</label>
                        </div>
                        <div className="eight wide field">
                            <input name='category' type='text' value={this.state.category}
                                   placeholder='Ex. Shampoo,cleanser,mascara...' onChange={this.handleChange}
                                   required={true}/>
                        </div>
                    </Form.Field>
                    <Button type='submit' color={"facebook"}>Confirm</Button>
                </Form>
            </div>
        )
    }
}


