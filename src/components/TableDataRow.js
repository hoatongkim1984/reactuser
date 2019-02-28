import React, { Component } from 'react';

class TableDataRow extends Component {

    deleteButtonClick=(id_user)=>{
        this.props.deleteButtonClick(id_user)        
    }

    editButtonClick=()=>{
        this.props.editButtonClick();
        this.props.changeStatusEditForm();      
    }

    render() {
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td className="text-left">{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.permission}</td>
                <td>
                    <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={()=>this.editButtonClick()}><i className="fa fa-edit"> Sua</i></div>
                    <div className="btn btn-danger xoa" onClick={(id_user)=>this.deleteButtonClick(this.props.id)}><i className="fa fa-remove">Xoa</i></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;