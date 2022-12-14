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
//import MdEditor from "react-markdown-editor-lite";
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
      alert("Th??m th??nh c??ng !");
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
      console.log("l???i");
      alert("Kh??ng th??? x??a l???i kh??a ngo???i ! ");
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
      headerName: "T??n b??i vi???t",
      width: 150,
      editable: true,
    },
    {
      field: "treeIdtree",
      headerName: "ID C??y",
      width: 150,
      editable: true,
    },
    {
      field: "Author",
      headerName: "Ng?????i vi???t b??i",
      width: 100,
      editable: true,
    },
    {
      field: "Writingdate",
      headerName: "Th???i gian vi???t b??i",
      width: 150,
      editable: true,
    },
    {
      field: "Imageconten",
      headerName: "H??nh ???nh c???a c??y",
      width: 150,
      editable: true,
    },
    {
      field: "Describe",
      headerName: "M?? t??? b??i vi???t",
      width: 100,
      editable: true,
    },
    {
      field: "htmlContent",
      headerName: "N???i dung b??i vi???t",
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
                if (window.confirm("B???n c?? mu???n x??a kh??ng"))
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
            Qu???n l?? b??i vi???t
            <button onClick={handleClickOpen} className="link">
              Th??m m???i b??i vi???t
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
            <DialogTitle>Th??m C??y</DialogTitle>
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
                        <label className="required">Nh???p t??n b??i vi???t</label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_nameconten}
                        ></input>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">
                          Th??m t??n ng?????i vi???t b??i{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          ref={post_author}
                        ></input>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Ch???n lo???i c??y</label>
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setPost({ ...post, treeIdtree: e.target.value });
                          }}
                        >
                          <option>- Ch???n loai cay - </option>
                          {tree.map((post) => (
                            <option value={post.idtree} key={post.idtree}>
                              {post.nametree}{" "}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nh???p m?? t??? b??i vi???t</label>
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
                          // onBlur={(event, editor) => {
                          //   console.log("Blur.", editor);
                          // }}
                          // onFocus={(event, editor) => {
                          //   console.log("Focus.", editor);
                          // }}
                        ></CKEditor>
                      </div>

                      {/* <div className="form-group " style={{ marginTop: 20 }}>
                        <label className="required">Nh???p m?? t???</label>
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
                  Th??m
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="btn btn-danger"
                  type="reset"
                  value="Reset"
                  style={{ marginLeft: 20 }}
                >
                  ????ng
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
