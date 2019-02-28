import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import DataUser from "./Data.json";
import EditUser from './EditUser';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[],
      searchText:"",
      isEdit:false,
      edit_User_Obj:{}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else{
      var temp=JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }
  
  addNewUser=(name, phone, permission)=>{
    var item={};
    item.id=uuidv1();
    item.name=name;
    item.phone=phone;
    item.permission=permission;
    var items=this.state.data;
    items.push(item);   
    this.setState(
      {
        data:items
      }
    );
    localStorage.setItem('userData', JSON.stringify(items));
  }
  
  delete_User=(id_user)=>{
    var temp = this.state.data.filter(item=>item.id!==id_user);
    this.setState(
      {
        data:temp
      }
    );
    localStorage.setItem('userData', JSON.stringify(temp));
  }

  selectEditUser=(user)=>{     
    this.setState(
      {
        edit_User_Obj:user
      }
    )        
  }

  save_edituser_info=(user)=>{     
    this.state.data.forEach((value,key)=>{
      if(value.id===user.id){
        value.name=user.name;
        value.phone=user.phone;
        value.permission=user.permission;
      }
    })      
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }  

  isShowEditForm=()=>{
    if (this.state.isEdit){
      return <EditUser changeStatusEditForm={()=>this.changeStatusEditForm()} 
      User_Obj={this.state.edit_User_Obj}
      save_user_info={(user)=>this.save_edituser_info(user)}
        /> ;
    }
  }

  changeStatusEditForm=()=>{
    this.setState({
        isEdit:!this.state.isEdit
    }            
    ); 
  }
 
  getTextSearch=(dl)=>{
    this.setState({
      searchText: dl  
    });
  }

  render() {  
      
    var ketqua=[];
    this.state.data.forEach(item => {
      if(item.name.indexOf(this.state.searchText)!==-1){
        ketqua.push(item);                
      }
    });

    return (      
      <div >
        <Header/>
        <div className="searchForm">
            <div className="contain">
                  <Search checkConnectProps={(dl)=>this.getTextSearch(dl)}/>    
                  {this.isShowEditForm()}                                                         
                  <AddUser addNew={(name, phone, permission)=>this.addNewUser(name, phone, permission)}/>
                  <Tabledata dataUserProps = {ketqua} 
                              delete_User = {(id_user)=>this.delete_User(id_user)}                              
                              changeStatusEditForm={()=>this.changeStatusEditForm()}
                              selectEditUser={(user)=>this.selectEditUser(user)}/>
            </div>
        </div>    
      </div>
    );
  }
}

export default App;
