import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { trangthai: true,
                    id:'',
                    name:'',
                    tel:'',
                    permision:''
    
    }
}

hienNut = () => {
    if (this.state.trangthai == true)
        return <div onClick={() => this.doitrangthai()} className="btn btn-outline-info btn-block">Thêm mới</div>;
    else
        return <div onClick={() => this.doitrangthai()} className="btn btn-outline-secondary btn-block">Đóng</div>;

}

doitrangthai = () => {
    this.setState({ trangthai: !this.state.trangthai })
}

hienForm = () => {
    if (this.state.trangthai == false)
        return (
            <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header">Thêm thành viên</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" className="form-control" name id placeholder="Tên user" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name id placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name id>
                            <option selected>Choose...</option>
                            <option value={1}>Admin</option>
                            <option value={2}>User</option>
                            <option value={3}>Modrater</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-primary">Thêm</div>
                    </div>
                </div>
            </div>
        )
}

hienForm1=() =>{
    if (this.props.trangthaiprop === false)
        return (
            <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header">Thêm thành viên</div>
                <form>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <input onChange={(even)=>this.isChange(even)} type="text" className="form-control" name="name" id placeholder="Tên user" />
                    </div>
                    <div className="form-group">
                        <input onChange={(even)=>this.isChange(even)} type="text" className="form-control" name="tel" id placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                        <select onChange={(even)=>this.isChange(even)} className="form-control" name ="permission">
                            <option selected>Choose...</option>
                            <option value={1}>Admin</option>
                            <option value={2}>User</option>
                            <option value={3}>Modrater</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input onClick={(name,tel,permission)=>this.props.addInfoUser(this.state.name,this.state.tel,this.state.permission) } type="reset" className="btn btn-block btn-primary" value="Them"/>
                    </div>
                </div>
                </form>
            </div>
        )
}
//Hàm lấy thoong tin thêm
 isChange = (even)=>{
    const name=even.target.name;
    const value=even.target.value;
    // console.log(name);
    // console.log(value);
    this.setState({[name]:value});
    var pt={};
        pt.id=this.state.id;
        pt.name=this.state.name;
        pt.tel=this.state.tel;
        pt.permission=this.state.permission;
        // console.log(pt);

 }
render() {
    // console.log(this.props.trangthaiprop);
    // console.log(this.state);
    return (

        <div className="col-3">
            {/* {
                this.hienNut()
            } */}

            {/* {
                this.hienForm()
            } */}
            {
            
                this.hienForm1()
            }
        </div>


    )
}
}
