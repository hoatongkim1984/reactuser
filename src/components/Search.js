import React, { Component } from 'react';

class Search extends Component {    
    constructor(props) {
        super(props);
        this.state={
            tempValue:""

        }
    }

    isChange=(event)=>{
        this.setState(
            {
                tempValue:event.target.value
            }
        )
        this.props.checkConnectProps(this.state.tempValue);
    }

    render() {
        
        return (
            <div >                
                <div className="form-group">
                    <div className="btn-group-search">
                        <input type="text" className="formcontrol-tukhoa" placeholder="Nhap tu khoa" onChange={(event)=>this.isChange(event)} />
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tim kiem</div>
                    </div>                
                </div>
            </div>
        );
    }
}

export default Search;