
import { useState } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import List from './List';
import Seach from './Seach';
import dl from './data.json';


function App() {
  const [trangthai, setTrangThai]= useState(true);
  const [data, setData]= useState(dl);
  const [infoSearch, setInfoSearch]=useState('')
  const [EditUserStatus,setEditUserStatus]=useState(true);
  const [userEditObject,setUserEditObject]=useState({});

   const thongbao=()=>{ //Neues là func thì khai báo const từ const truyền xuống con qua props
  // alert("ok")
  }
  //hàm đổi trạng thái sửa
  const changeEdit=()=>{
    setEditUserStatus(!EditUserStatus)
  }
  const doitrangthaiForm=()=>{
    setTrangThai(!trangthai);
  }
  const getInfoSeach=(info)=>{
  //  console.log("thong tin: "+info);
  setInfoSearch(info);//gán thông tin nhận được cho state
  }
  //Khai báo 1 mảng để lưu thông tin cần tìm
  var ketqua=[]// khai báo mảng để lưu kqua, ban đầu là mảng rỗng
  data.forEach((item)=>{
    if(item.name.indexOf(infoSearch)!==-1)
      {ketqua.push(item)}
  })
  //hàm lấy thông tin bằng thêm vào data
  const getNewUser=(name,tel,permission)=>{
    var item={};//Ban dau la doi tuong rong
    item.id='';
    item.name=name;
    item.tel=tel;
    item.permission=permission;
    var newItem=data;
    newItem.push(item);
    setData(newItem);
  }
  const editUser=(infoEdit)=>{
    // alert("Thong tin nhan duoc: "+infoEdit)
    setUserEditObject(infoEdit); //hàm Lấy thông tin sửa từ OneUser
  }
  //Hàm nhận thông tin đã sửa ở EditUser
  const getEditInfoApp=(info)=>{
      console.log("thong tin da sua"+info.name);
      data.forEach((value,key)=>{
        if(value.id===info.id){
          if(value.id===info.id){
            value.name=info.name;
            value.tel=info.tel;
            value.permission=info.permission;
          }
        }
      })
  }
  
  const deleteUserInfo=(idUser)=>{
    // console.log(idUser);
    var tempData=data;
    tempData=tempData.filter(item=>item.id!=idUser);
    console.log(tempData);
    setData(tempData);
  }
  return (
    <div >
     <Header/>
     <div className="container">
      <div className="row">
         <Seach 
         ketnoi={()=>{doitrangthaiForm()}}
         trangthaiprop={trangthai}
         getInfoSeachprop={(info)=>{getInfoSeach(info)}}
         EditUserStatusprops={EditUserStatus}
         changeEditUserForm={()=>changeEdit()}
         userEditObject={userEditObject}
         getEditInfoApp={(info) =>getEditInfoApp(info)}
         /> {/*//Hàm thông báo là của cha */}
        <List dataUser={ketqua}
        edit={(infoEdit)=>editUser(infoEdit)}
        changeEditUserForm={()=>changeEdit()}
        deleteClickList={(idUser)=>deleteUserInfo(idUser)}
        />
        <AddUser trangthaiprop={trangthai}
                 addInfoUser={(name,tel,permisson)=>getNewUser(name,tel,permisson)}
          />  
      </div>
     </div>
    </div>
  );
}

export default App;
