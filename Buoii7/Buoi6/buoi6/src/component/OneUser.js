import React from 'react'

export default function OneUser(props) {
 
 const Cacquyen=()=>{
    if(props.ad===1){return "Admin";}
    else if (props.ad===2){return "Modrator";}
    else {return "Normal User";}
 }
 const editClick=(infoEdit)=>{
   props.editFunClick(infoEdit);
   props.changeEditUserForm(infoEdit);
 }
 const deleteUser=(idUser)=>{
  // props.deleteUser(idUser)
  props.deleteClick(idUser);

  // console.log('id cua user la '+ idUser);
 }
    return (
    <tr>
    <td scope="row">{props.stt +1}</td>
    <td>{props.ten}</td>
    <td>{props.sdt}</td>
    <td>{Cacquyen()}</td>
    
    <td>
      <div className="btn-group">
        <div onClick={()=>editClick()} className="btn btn-warning sua"><i className="fa fa-pencil"  />Sửa</div>
        <div onClick={(idUser)=>deleteUser(props.id)} className="btn btn-danger xoa"><i className="fa fa-minus"/> Xóa</div>
      </div>
    </td>
  </tr>
  )
}
