import React from 'react';
import {Button, Form} from 'semantic-ui-react';
const size = 'large';

const FormExampleForm = () => (
    <div className="ui raised very padded text container segment" style={{top:'100px'}}>
      <h2 className="ui header">Product Request</h2>
      <Form size={size}>
      <Form.Field>
        <label>Brand</label>
          <div className="eight wide field">
        <input placeholder='Brand Name' />
          </div>
      </Form.Field>
      <Form.Field>
        <label>Product</label>
          <div className="eight wide field">
        <input placeholder='Product Name' />
          </div>
      </Form.Field>
      <Form.Field>
        <label>Category</label>
          <div className="eight wide field">
        <input placeholder='Ex. Shampoo,cleanser,mascara...'/>
          </div>
      </Form.Field>
      <Button type='submit' color={"facebook"}>Confirm</Button>
    </Form>
    </div>
);
export default FormExampleForm
