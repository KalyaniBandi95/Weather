import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../action/index'
import {bindActionCreators} from 'redux'

class SearchBar extends Component {

constructor(props) {
    super(props);

    this.state={
        term:''
    } 
    
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
}
    onInputChange(event){
        // console.log(event.target.value)
        this.setState({term: event.target.value})
   }

   onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }

    render() {
        return(
            <div className="container"><br/>
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-6">
                        <form className="input-group">
                            <input type = "text" className="form-control" placeholder = "Get a five day forecast of your city"
                                    value={this.state.term}
                                    onChange={this.onInputChange}></input>                        
                        </form>
                    </div>
                    <div className="col-2">
                        <form className="input-group" onSubmit = {this.onFormSubmit}>                            
                        <button className="btn btn-primary">Enter</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchBar)