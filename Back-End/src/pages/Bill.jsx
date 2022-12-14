// import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client";
import { useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Button } from "@mui/material";
import { getLists } from "../kAcctions/OrderAction";
const Author = (handlePutConfigEdit) => {
  const fill = handlePutConfigEdit.fillConfig;

  const baseURL = "/api";
  const [order, setOrder] = useState({
    id: "",
    // productName: "",
    status: "",
    // quantity: "",
    // Orderid: "",
    // total: "",
    // fullname: "",
    // Description: "",
    // date: "",
  });

  //   id: "",
  //   status: "",
  // }
  //   const dispatch = useDispatch();
  //    const Order = useSelector((state) => state.Order);
  const [data, setData] = useState([]);
  useEffect(() => {
    author();
    // getAllSubscribeFormReact();
  }, []);

  //   const getAllSubscribeFormReact = async () => {
  //     await Promise.all(dispatch([getLists()]));
  //   };
  // useEffect(() => {
  //    author();
  // }, []);
  const [openEdit, setOpenEdit] = useState(false);
  const post_trangthai = useRef(null);
  const handleClickOpenEdit = () => {
    setOpenEdit(!openEdit);
  };
  function author() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`/api/order`, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  const handleUpdate = (params) => {
    setOpenEdit(!openEdit);
    setOrder({
      id: params.id,
      status: params.status,
    });
  };
  const handleSave = async (id) => {
    id = data.id;
    const updatedb = new Promise((resolve, reject) => {
      try {
        // dispatch(update(id, data));
        resolve(updatedb);
      } catch (e) {
        reject(e);
      }
    });
    alert("update success");
    setOpenEdit(!openEdit);
    // getAllSubscribeFormReact();
  };
  const handleOnchange = (e, id) => {
    let copystate = { ...data };
    copystate[id] = e.target.value;
    setData({
      ...copystate,
    });
  };
  const update = async (id) => {
    const Data = {
      stattus: post_trangthai.current.value,
    };
    //   try {
    fetch(`${baseURL}/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(Data),
    })
      .then((res) => {
        if (res.ok) {
          console.log("HTTP request successful");
        } else {
          console.log("HTTP request unsuccessful");
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => setOrder(order));
    alert("c???p nh???t th??nh c??ng !");
    author();
    // publish().catch((error) => console.log(error));
  };
  async function toggleStatus(id) {
    try {
      let todo = data.find((data) => data.id == id);
      data.stattus = !data.stattus;

      let res = await update(todo);

      // data.forEach((todo, index) => {
      //   if (todo.id == id) {
      //     data[index] = res.data;
      //   }
      // });
    } catch (error) {
      console.log(error);
    }
  }
  const rows = data.map((post) => ({
    id: post.id,
    productName: post.nameproduct,
    status: post.status,
    quantity: post.quantity,
    Orderid: post.orderid,
    total: post.total,
    fullname: post.fullname,
    Description: post.adress,
    date: post.date,
    // Hometown: post.Hometown
  }));

  const Columns = [
    { field: "id", headerName: "M?? Ho?? ????n", width: 70, height: 100 },
    {
      field: "productName",
      headerName: "T??n s???n ph???m",
      width: 200,
      editable: true,
    },
    { field: "quantity", headerName: "So luong", width: 100, editable: true },
    { field: "total", headerName: "T???ng ti???n", width: 100, editable: true },
    {
      field: "fullname",
      headerName: "Ho va ten nguoi mua",
      width: 180,
      editable: true,
    },
    { field: "Description", headerName: "Dia chi", width: 180, editable: true },
    {
      field: "Orderid",
      headerName: "M?? ????n h??ng",
      width: 50,
      editable: true,
    },
    { field: "date", headerName: "Ngay mua hang", width: 100, editable: true },
    {
      field: "status",
      headerName: "Trang th??i ????n h??ng",
      width: 120,
      editable: true,
    },
    // {
    //   field: "username",
    //   headerName: "Ten nguoi mua hang",
    //   width: 200,
    //   editable: true,
    // },
  ];
  // { field: 'year', headerName: "T???ng ti???n", width: 100, editable: true }];
  // // { field: 'Hometown', headerName: "Qu?? qu??n", width: 400, editable: true }];

  const actionColumn = [
    {
      field: "action",
      headerName: "Chi ti???t",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <select id="id" ref={post_trangthai}>
              <option value="Thanh to??n">Thanh To??n</option>
              <option value="X??c Nh???n ????n">X??c nh???n ????n</option>
              <option value="Hu??? ????n h??ng">Hu??? ????n h??ng</option>
              <option value="??ang ????ng g??i">??ang ????ng g??i</option>
              <option value="??ang v???n chuy???n">??ang v???n chuy???n</option>
              <option value="Giao h??ng th??nh c??ng">Giao h??ng th??nh c??ng</option>
              <option value="H??ng ho??n">??ang ho??n</option>
            </select> */}
            <Link to="xuli" style={{ textDecoration: "none" }}>
              <div className="viewButton">Chi ti???t v???n ????n</div>
            </Link>
            <button
              className="btn btn-primary ml-3"
              // onClick={() => update(params.row.id)}
              onClick={() => handleUpdate(params.row.id)}
              // onClick={handleUpdate(params)}
            >
              C???p nh???t tr???ng th??i
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="Table">
          <div className="TableTitle">
            Qu???n l?? ????n h??ng
            {/* <Link to="/users/new" className="link">
              Th??m m???i
            </Link> */}
          </div>
          {<text>Loading...</text>}
          <DataGrid
            className="datagrid"
            autoHeight
            autoPageSize
            rows={rows}
            columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
        <Dialog
          open={openEdit}
          onClose={handleClickOpenEdit}
          PaperProps={{
            style: {
              width: "100%",
            },
          }}
        >
          <DialogTitle>C???p nh???t tr???ng th??i ????n</DialogTitle>

          <DialogContent>
            <form>
              <div className="row">
                <div>
                  <div className="form-group ">
                    <label className="required">Tr???ng th??i ????n h??ng</label>
                    {/* <input
                      type="text"
                      className="form-control"
                      value={data.status || ""}
                      // ref={handleOnchange(post_trangthai)}
                      // onChange={(e) => handleOnchange(e, "status")}
                    ></input> */}
                    {/* <input
                      // value={fill.stattus || ""}
                      type="text"
                      className="form-control"
                      onChange={(e) => handleOnchange(e, "Name")}
                    ></input> */}
                    <select
                      id="cars"
                      style={{ marginTop: 20 }}
                      ref={post_trangthai}
                      // value={data.status || ""}
                      // onChange={(e) => handleOnchange(e, "status")}
                    >
                      <option value="Thanh to??n">Thanh To??n</option>
                      <option value="X??c Nh???n ????n">X??c nh???n ????n</option>
                      <option value="Hu??? ????n h??ng">Hu??? ????n h??ng</option>
                      <option value="??ang ????ng g??i">??ang ????ng g??i</option>
                      <option value="??ang v???n chuy???n">??ang v???n chuy???n</option>
                      <option value="Giao h??ng th??nh c??ng">
                        Giao h??ng th??nh c??ng
                      </option>
                      <option value="H??ng ho??n">??ang ho??n</option>
                    </select>
                  </div>

                  {/* <div className="form-group " style={{ marginTop: 20 }}>
                    <label className="required">Message</label>
                    <textarea
                      onChange={(e) => handleOnchange(e, "message")}
                      value={data.message || ""}
                      type="text"
                      className="form-control "
                      style={{
                        height: "100px",
                      }}
                    ></textarea>
                  </div> */}
                </div>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <div className="button">
              <button
                type="reset"
                value="Reset"
                className="btn btn-primary text-center"
                onClick={toggleStatus}
                // onClick={update}
              >
                save
              </button>
              <button
                onClick={handleClickOpenEdit}
                className="btn btn-danger"
                type="reset"
                value="Reset"
                style={{ marginLeft: 20 }}
              >
                Cancel
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default Author;
