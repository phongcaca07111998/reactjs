import React, { Component } from 'react'
import OneUser from './OneUser'

export default class List extends Component {

  
  
  render() {

    const deleteClick=(idUser)=>{
      // console.log('id  lấy từ Oneuser '+ idUser);
      // this.props.deleteUserInfo(idUser)
      this.props.deleteClickList("Id nhan tu list"+idUser)
     }

    return (
        <div className="col">
        <table className="table table-hover table-inverse">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Họ tên</th>
              <th>SDT</th>
              <th>Phân quyền</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.dataUser.map((value, key) =>{
                return <OneUser 
                ten={value.name} 
                sdt={value.tel} 
                ad={value.permission} 
                stt={key}
                id={value.id}
                editFunClick={(infoEdit)=>this.props.edit(value)} //lấy value để lấy tất cả dữ liệu của form list
                changeEditUserForm={()=>this.props.changeEditUserForm()}
                deleteClick={(idUser)=>this.deleteClick(idUser)}
               
                />
              })
            }
          </tbody>
        </table>
      </div>
      
    )
  }
}
