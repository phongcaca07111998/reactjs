import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Seach extends Component {
    hiennut=()=>{
        if(this.props.trangthaiprop===true)
        return  <div onClick={() =>this.props.ketnoi()} className="btn btn-outline-info">Thêm mới</div>;
        else 
         return  <div  onClick={() =>this.props.ketnoi()} className="btn btn-outline-secondary">Đóng</div>
    }
    constructor(props, context) {
        super(props, context);
        this.state={infoSeach:'',userObj:{}}
    }
    //gán thông tin đã sửa nhận từ EditUser vào State
    getEditInfo=(info) =>{
        this.setState({
          userObj:info
        });
        this.props.getEditInfoApp(info);
      }
    getInfo=(even)=>{
        // console.log(even.target.value);
        this.setState({infoSeach:even.target.value});
    }
    //Hàm ẩn hiện form sửa
    isShowEdit=()=>{
        if(this.props.EditUserStatusprops==true)
        {
        return <EditUser changeEdit={()=>this.props.changeEditUserForm()}
        userEditObject={this.props.userEditObject}
        getEditInfo={(info) =>this.getEditInfo(info)}
        />
        }
    }
    


   
    
  render() {
    // console.log(this.state.infoSeach);
    return (

        <div className="col-12">
            <div className='row'>
                <div className='col-9'>
                    <div className="searchForm">
                        <div className="form-group">
                            <div className="btn-group">
                                <input onChange={(even)=>this.getInfo(even)} type="text" className="form-control" name id placeholder="Nhập từ khóa" style={{ width: '50vw' }} />
                                <div onClick={(info)=>this.props.getInfoSeachprop(this.state.infoSeach) }   className="btn btn-info">Tìm</div>
                            </div>
                        </div>
                    </div> {/* end tìm kiếm  */}
                </div>
                <div className='col-3'>
                {this.hiennut()}      
            </div>
            </div>
            <div className='row'>
                {this.isShowEdit()}
            </div>
            
        </div>


    )
}
}
