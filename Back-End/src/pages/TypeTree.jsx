// import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "../components/datatable/datatable.scss";
const Plantlist = () => {
  const baseURL = "/api";
  const post_nameplantlist = useRef(null);
  const post_describe = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const [data, setData] = useState([]);
  //   const [post, setPost] = useState({
  //     idproduct: "",
  //     nameProduct: "",
  //     title: "",
  //     price: "",
  //   });
  //   const { idproduct, nameProduct, title, price } = post;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    publish();
  }, []);
  function publish() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/api/plantlist", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  async function createPost() {
    const postData = {
      Nameplantlist: post_nameplantlist.current.value,
      Describe: post_describe.current.value,
    };
    try {
      const res = await fetch(`${baseURL}/plantlist`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      alert("Thêm thành công !");
      setPostResult(fortmatResponse(result));
      publish();
    } catch (err) {
      setPostResult(err.message);
    }
  }

  const remove = async (id) => {
    const { error } = await fetch(`${baseURL}/plantlist/${id}`, {
      method: "delete",
    });
    // const data = await res.json();
    //const { error } = await fetch('/api/conten/'${id})

    if (error) {
      console.log("lỗi");
      alert("Không thể xóa lỗi khóa ngoại ! ");
      return;
    }

    publish();
  };

  const rows = data.map((post) => ({
    id: post.idlist,
    Nameplantlist: post.nameplantlist,
    Describe: post.describe,
  }));

  const Columns = [
    { field: "id", headerName: "ID", width: 70, height: 100 },
    {
      field: "Nameplantlist",
      headerName: "Tên loại cây",
      width: 150,
      editable: true,
    },
    {
      field: "Describe",
      headerName: "Mô tả loại cây",
      width: 450,
      editable: true,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa không"))
                  remove(params.row.id);
              }}
            >
              Delete
            </div>
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
            Quản lí loài cây
            <button onClick={handleClickOpen} className="link">
              Thêm mới
            </button>
          </div>
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
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Thêm Loài Cây</DialogTitle>
            <DialogContent>
              <form>
                <div className="row">
                  {/* <div className="bottom">
                    <div className="left">
                      <img
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <form>
                        <div className="formInput">
                          <label htmlFor="file">
                            Image:{" "}
                            <DriveFolderUploadOutlinedIcon className="icon" />
                          </label>
                          <input
                            type="file"
                            id="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={{ display: "none" }}
                          />
                        </div>
                      </form>
                    </div>
                  </div> */}
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group ">
                        <label className="required">Nhập tên loại cây</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_nameplantlist}
                        ></input>
                      </div>

                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nhập mô tả loại cây </label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_describe}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </DialogContent>
            <DialogActions>
              <div className="button">
                <button
                  onClick={createPost}
                  type="reset"
                  value="Reset"
                  className="btn btn-primary text-center"
                >
                  Thêm
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="btn btn-danger"
                  type="reset"
                  value="Reset"
                  style={{ marginLeft: 20 }}
                >
                  Đóng
                </button>
              </div>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Plantlist;
