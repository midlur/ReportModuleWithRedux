import React, { Component } from 'react';
import { updateData,getData } from '../actions/getActions';
import { connect } from 'react-redux';

class UpdateDetails extends Component {
      onSubmit = (e) => {
        e.preventDefault();
        const code = this.getCode.value;
    const qty =  this.getQty.value;
    const details = {
        code,
        qty
    }
    console.log(details);

       this.props.updateData(details.code,details.qty);
       this.getCode.value = '';
       this.getQty.value = '';
       setTimeout(()=>{
        this.componentWillMount();
       },150)
      }
      componentWillMount(){
      this.props.getData(new Date());
    }

  render() {
    return (
        <React.Fragment>
      <div>
        <form className="form-inline" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Item Code:</label>
                <input type="number" ref={(input)=>this.getCode = input} 
    placeholder="Enter Item Code" onChange={this.onChange} className="form-control" id="code"/>
            </div>
            <div className="form-group">
                <label>Quantity:</label>
                <input type="number" ref={(input)=>this.getQty = input} 
    placeholder="Enter Total Quantity" onChange={this.onChange} className="form-control" id="qty"/>
            </div>
                <button type="submit" className="btn btn-default">Update</button>
        </form>
      </div>
      </React.Fragment>
    )
  }
}

export default connect( null , {updateData,getData} )(UpdateDetails);
