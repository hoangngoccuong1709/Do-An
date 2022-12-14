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
import Select from "react-select";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "../components/datatable/datatable.scss";
const Plantingtool = () => {
  const baseURL = "/api";
  const post_name = useRef(null);
  const post_Classify = useRef(null);
  const post_mota = useRef(null);
  const post_price = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [plant, setPlantlist] = useState([]);
  const [post, setPost] = useState({
    nametooltype: "",
  });

  //const state = { nameplantlist: "" };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    publish();
    getdata();
  }, []);
  function publish() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/api/plantingtool", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  function getdata() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/api/tooltype", requestOptions)
      .then((response) => response.json())
      .then((data) => setPlantlist(data))
      .catch((error) => console.log("error", error));
  }
  async function createPost() {
    const postData = {
      Nametool: post_name.current.value,
      Classify: post.nametooltype,
      Imagetool: image.name,
      Price: post_price.current.value,
      Describe: post_mota.current.value,
    };
    try {
      const res = await fetch(`${baseURL}/plantingtool`, {
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
    const { error } = await fetch(`${baseURL}/plantingtool/${id}`, {
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
    id: post.idplantingtool,
    nametool: post.nametool,
    classify: post.classify,
    price: post.price,
    imagetool: post.imagetool,
    describe: post.describe,
  }));

  const Columns = [
    { field: "id", headerName: "ID", width: 70, height: 100 },
    {
      field: "nametool",
      headerName: "Tên  dụng cụ",
      width: 150,
      editable: true,
    },
    {
      field: "classify",
      headerName: "Phân loại dụng cụ",
      width: 150,
      editable: true,
    },
    { field: "price", headerName: "Giá dụng cụ", width: 150, editable: true },
    {
      field: "describe",
      headerName: "Mô tả dụng cụ",
      width: 250,
      editable: true,
    },
    {
      field: "imagetool",
      headerName: "Hình ảnh của dụng cụ",
      width: 250,
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
  // const options = [{ value: { idlist }, label: { nameplantlist } }];
  // function renderList() {
  //   return plant.map((data) => ({
  //     label: data.nameplantlist,
  //     value: data.nameplantlist,
  //   }));
  // }
  // let options = plant.map(function (item) {
  //   return item;
  // });
  // console.log(options, "opsion");
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="Table">
          <div className="TableTitle">
            Quản lí Dụng cụ
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
            <DialogTitle>Thêm Dụng cụ</DialogTitle>
            <DialogContent>
              <form>
                <div className="row">
                  <div className="bottom">
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
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group">
                        <label className="required">Nhập tên cây</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_name}
                        ></input>
                      </div>
                      {/* <Select
                        className="form-group"
                        style={{ marginTop: 20 }}
                        ref={post_plantlistname}
                        onChange={(e) => {
                          setPost({ nameplantlist: e.target.value });
                        }}
                        // value={post_plantlistname}
                        // onChange={post_plantlistname}
                        placeholder="Chọn loại cây"
                        options={renderList()}
                      ></Select> */}
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Chọn loại dụng cụ</label>
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setPost({ ...post, nametooltype: e.target.value });
                          }}
                        >
                          <option>- Chọn dụng cụ - </option>
                          {plant.map((post) => (
                            <option value={post.nametooltype} key={post.Idtool}>
                              {post.nametooltype}{" "}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nhập loại dụng cụ</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_Classify}
                        ></input>
                      </div> */}
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nhập giá sản phẩm</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_price}
                        ></input>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nhập mô tả</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_mota}
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

export default Plantingtool;
