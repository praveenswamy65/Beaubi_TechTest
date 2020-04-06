import React, {Component} from 'react';
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
        e.preventDefault();
        alert("hej");
       // prodController.Create();
        //alert(this.state.brand_name);
        //alert(this.state.product_name);
        //alert(this.state.category);//You will get vlue here
        let brand = this.state.brand_name;
        let prod = this.state.product_name;
        let cat = this.state.category;

    }

render()
{
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


