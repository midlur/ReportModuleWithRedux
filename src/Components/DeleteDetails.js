import React, { Component } from 'react';
import { deleteData,getData } from '../actions/getActions';
import { connect } from 'react-redux';

class DeleteDetails extends Component {
      onSubmit = (e) => {
        e.preventDefault();
        const code = this.getCode.value;
    const details = {
        code
    }
    console.log(details);

       this.props.deleteData(details.code);
       this.getCode.value = '';
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
                <button type="submit" className="btn btn-default">Delete</button>
        </form>
      </div>
      </React.Fragment>
    )
  }
}

export default connect( null , {deleteData , getData} )(DeleteDetails);
