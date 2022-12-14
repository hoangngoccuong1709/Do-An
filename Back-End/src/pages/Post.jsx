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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

const Post = () => {
  const baseURL = "/api";
  const post_nameconten = useRef(null);
  const post_author = useRef(null);
  const post_describe = useRef(null);
  // const post_price = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [tree, setTree] = useState([]);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState({
    treeIdtree: "",
  });
  const [ckeditor, setckeditor] = useState({
    Describe: "",
  });
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
    fetch("/api/post", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  function getdata() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/api/tree", requestOptions)
      .then((response) => response.json())
      .then((data) => setTree(data))
      .catch((error) => console.log("error", error));
  }
  async function createPost() {
    const postData = {
      nameconten: post_nameconten.current.value,
      author: post_author.current.value,
      Imageconten: image.name,
      treeIdtree: post.treeIdtree,
      // Price: post_price.current.value,
      describe: post_describe.current.value,
      htmlContent: ckeditor,
    };
    try {
      const res = await fetch(`${baseURL}/post`, {
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
    const { error } = await fetch(`${baseURL}/post/${id}`, {
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
    id: post.idpost,
    nameconten: post.nameconten,
    // view: post.view,
    Writingdate: post.writingdate,
    Author: post.author,
    Imageconten: post.imageconten,
    Describe: post.describe,
    treeIdtree: post.treeIdtree,
    htmlContent: post.htmlContent,
  }));

  const Columns = [
    { field: "id", headerName: "ID", width: 70, height: 100 },
    {
      field: "nameconten",
      headerName: "Tên bài viết",
      width: 150,
      editable: true,
    },
    {
      field: "treeIdtree",
      headerName: "ID Cây",
      width: 150,
      editable: true,
    },
    {
      field: "Author",
      headerName: "Người viết bài",
      width: 100,
      editable: true,
    },
    {
      field: "Writingdate",
      headerName: "Thời gian viết bài",
      width: 150,
      editable: true,
    },
    {
      field: "Imageconten",
      headerName: "Hình ảnh của cây",
      width: 150,
      editable: true,
    },
    {
      field: "Describe",
      headerName: "Mô tả bài viết",
      width: 100,
      editable: true,
    },
    {
      field: "htmlContent",
      headerName: "Nội dung bài viết",
      width: 300,
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
            Quản lí bài viết
            <button onClick={handleClickOpen} className="link">
              Thêm mới bài viết
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
            <DialogTitle>Thêm Cây</DialogTitle>
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
                      <div className="form-group ">
                        <label className="required">Nhập tên bài viết</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_nameconten}
                        ></input>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">
                          Thêm tên người viết bài{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_author}
                        ></input>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Chọn loại cây</label>
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setPost({ ...post, treeIdtree: e.target.value });
                          }}
                        >
                          <option>- Chọn loai cay - </option>
                          {tree.map((post) => (
                            <option value={post.idtree} key={post.idtree}>
                              {post.nametree}{" "}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nhập mô tả bài viết</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_describe}
                        ></input>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <CKEditor
                          config={{ Describe: post_describe }}
                          editor={ClassicEditor}
                          data=""
                          image=""
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            setckeditor(editor.getData());

                            console.log({ event, editor, ckeditor });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        ></CKEditor>
                      </div>

                      {/* <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nhập mô tả</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_mota}
                        ></input>
                      </div> */}
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

export default Post;
