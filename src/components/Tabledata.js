import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Tabledata extends Component {
    
    getNamePermission=(per_id)=>{
      if (per_id==="admin"){
        return "Administrator";
      }
      else if (per_id==="mode"){
        return "Moderator";
      }
      else{
        return "Normal User";
      }
    }

    deleteButtonClick=(id_user)=>{
       this.props.delete_User(id_user);        
    }

    editButtonClick=(user)=>{
      this.props.selectEditUser(user);        
    }

    changeStatusEditForm=()=>{
      this.props.changeStatusEditForm();
    }

    render() {
      var dem=0;
        return (
            <div >
            <table className="table table-striped table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th  width="10%" scope="row">STT</th>
                  <th width="40%">Ten </th>
                  <th width="20%">Dien thoai</th>
                  <th width="20%">Quyen</th>
                  <th width="10%">Thao tac</th>
                </tr>
              </thead>
              <tbody>
                {                                
                   this.props.dataUserProps.map((value, key) => {
                    dem++;
                    return (                     
                      <TableDataRow id={value.id}
                                    key={key} stt={dem} 
                                    name={value.name} 
                                    phone={value.phone} 
                                    permission={this.getNamePermission(value.permission)}
                                    deleteButtonClick={(id_user)=>this.deleteButtonClick(value.id)}
                                    editButtonClick={(user)=>this.editButtonClick(value)}
                                    changeStatusEditForm={()=>this.changeStatusEditForm()}
                      />
                    )
                })                    
                }               
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default Tabledata;