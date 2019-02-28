import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            isInsert:false,
            id:"",
            name:"",
            phone:"",
            permission:""
        }
    }

    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });       
    }
    changeStatusButton=()=>{
        this.setState({
            isInsert:!this.state.isInsert
        }            
        ); 
    }

    displayButton=()=>{
        if (!this.state.isInsert){
            return(            
                <div className="btn btn-primary" onClick={()=>this.changeStatusButton()}>Them moi User</div>   
            )
        }    
    }

    addNew=(name, phone, permission)=>{
        this.props.addNew(this.state.name, this.state.phone, this.state.permission);
        
    }

    
    displayForm=()=>{
        if (this.state.isInsert){
            return(
                <div className="adduser-box" >
                    <div className="card ">
                        <div className="cardheaderadduser">Them moi User</div>
                        <div className="card-body">                            
                            <div className="form-group text-left">
                            <label >Ten</label>
                            <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Nhap ten" />                              
                            <label >Dien thoai</label>
                            <input type="text" name="phone" onChange={(event)=>this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Nhap dien thoai" />
                            <label >Phan quyen</label>
                            <select name="permission" defaultValue = "admin" onChange={(event)=>this.isChange(event)} className="form-control">
                                <option value="admin" >Administrator</option>
                                <option value="mode">Moderator</option>
                                <option value="user">Normal User</option>
                            </select>
                            </div>                            
                        </div>
                        <div className="card-footer text-center">
                            <div className="btn btn-primary" onClick={(name, phone, permission)=>this.props.addNew(this.state.name, this.state.phone, this.state.permission)}>Them moi</div>
                            <div className="btn btn-primary" onClick={()=>this.changeStatusButton()}>Dong</div>  
                        </div>         
                                       
                    </div>        
                </div>  
        )   
        }       
    }

    render() {
        return (
            <div>
                <div>
                    <hr/>
                </div>  
                <div className="button_adduser">
                    <div className="btn btn-primary" onClick={()=>this.changeStatusButton()}>Them moi User</div>
                </div>                
                <div>
                    <hr/>
                </div>  
                {this.displayForm()}
        </div> 
        );
    }
}

export default AddUser;