import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            isEdit:true,
            id:"",
            name:"",
            phone:"",
            permission:""
        }
    }
    
    componentWillMount() {
        this.setState(
            {
                id:this.props.User_Obj.id,
                name:this.props.User_Obj.name,
                phone:this.props.User_Obj.phone,
                permission:this.props.User_Obj.permission
            }
        )                
    }
    
    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });       
    }

    save_edit_User = (user) => {
        var item = {};
        item.id = this.props.User_Obj.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;

        this.props.save_user_info(item);
        this.props.changeStatusEditForm(); 
    }

    render() 
    {        
        return (
            <div>
                <div className="adduser-box" >
                    <div className="card ">
                        <div className="cardheaderadduser">Cap nhat User</div>
                        <div className="card-body">                            
                            <div className="form-group text-left">
                            <label >Ten</label>
                            <input type="text" defaultValue={this.props.User_Obj.name} name="name" onChange={(event)=>this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Nhap ten" />                              
                            <label >Dien thoai</label>
                            <input type="text" defaultValue={this.props.User_Obj.phone} name="phone" onChange={(event)=>this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Nhap dien thoai" />
                            <label >Phan quyen</label>
                            <select name="permission" defaultValue = {this.props.User_Obj.permission} onChange={(event)=>this.isChange(event)} className="form-control">
                                <option value="admin" >Administrator</option>
                                <option value="mode">Moderator</option>
                                <option value="user">Normal User</option>
                            </select>
                            </div>                            
                        </div>
                        <div className="card-footer text-center">
                            <div className="btn btn-primary" onClick={()=>this.save_edit_User()}>Cap nhat</div>
                            <div className="btn btn-primary" onClick={()=>this.props.changeStatusEditForm()}>Dong</div>  
                        </div>         
                                       
                    </div>        
                </div>  
            </div>
        );
    }
}
export default EditUser;