import React from 'react';
import ReportLayout from './ReportLayout';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { getData } from '../actions/getActions';
 
import "react-datepicker/dist/react-datepicker.css";
 
class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange = date => {
        this.setState({
            startDate: date
            },
            this.props.getData(date));
        };

  componentDidMount() {
    this.props.getData(this.state.startDate);
    }
 
  render() {
    return (
        <React.Fragment>
            <DatePicker
                dateFormat = "YYYY-MM-dd"
                selected={this.state.startDate}
                onChange={this.handleChange}  
             />

            <div className = "tableLayout">
                <ReportLayout data = {this.props.data}/>
            </div>

        </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    data : state.values.data
});

export default connect(mapStateToProps , { getData})(Calender);