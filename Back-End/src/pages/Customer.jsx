// import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Customer = () => {
  // const post_image = useRef(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [post, setPost] = useState({
    idproduct: "",
    nameProduct: "",
    title: "",
    price: "",
  });
  const { idproduct, nameProduct, title, price } = post;

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
    fetch("/user/get", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  // async function createPost() {
  //   const postData = {
  //     nameProduct: post_name.current.value,
  //     title: post_title.current.value,
  //     image: image.name,
  //     price: post_price.current.value,
  //   };
  //   try {
  //     const res = await fetch(`${baseURL}/product`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-access-token": "token-value",
  //       },
  //       body: JSON.stringify(postData),
  //     });
  //     if (!res.ok) {
  //       const message = `An error has occured: ${res.status} - ${res.statusText}`;
  //       throw new Error(message);
  //     }
  //     const data = await res.json();
  //     const result = {
  //       status: res.status + "-" + res.statusText,
  //       headers: {
  //         "Content-Type": res.headers.get("Content-Type"),
  //         "Content-Length": res.headers.get("Content-Length"),
  //       },
  //       data: data,
  //     };
  //     alert("Th??m th??nh c??ng !");
  //     setPostResult(fortmatResponse(result));
  //     publish();
  //   } catch (err) {
  //     setPostResult(err.message);
  //   }
  // }

  // const remove = async (id) => {
  //   const { error } = await fetch(`${baseURL}/product/${id}`, {
  //     method: "delete",
  //   });
  //   // const data = await res.json();
  //   //const { error } = await fetch('/api/conten/'${id})

  //   if (error) {
  //     console.log("l???i");
  //     alert("Kh??ng th??? x??a l???i kh??a ngo???i ! ");
  //     return;
  //   }

  //   publish();
  // };

  const rows = data.map((post) => ({
    id: post.id,
    fullname: post.fullName,
    Description: post.description,
    UserName: post.userName,
    PhoneNumber: post.phoneNumber,
    Email: post.email,
  }));

  const Columns = [
    { field: "id", headerName: "ID", width: 100, height: 100 },
    {
      field: "fullname",
      headerName: "T??n Kh??ch h??ng",
      width: 200,
      editable: true,
    },
    { field: "Description", headerName: "?????a ch???", width: 200, editable: true },
    {
      field: "UserName",
      headerName: "T??n ????ng nh???p",
      width: 200,
      editable: true,
    },
    {
      field: "Email",
      headerName: "Email ng?????i d??ng",
      width: 200,
      editable: true,
    },
    {
      field: "PhoneNumber",
      headerName: "S??? ??i???n tho???i",
      width: 100,
      editable: true,
    },
  ];

  // const actionColumn = [
  //     {
  //         field: "action",
  //         headerName: "Action",
  //         width: 200,
  //         renderCell: (params) => {
  //             return (
  //                 <div className="cellAction">
  //                     <Link to="/users/test" style={{ textDecoration: "none" }}>
  //                         <div className="viewButton">View</div>
  //                     </Link>
  //                     <div
  //                         className="deleteButton"
  //                         onClick={() => { if (window.confirm("B???n c?? mu???n x??a kh??ng")) remove(params.row.id) }}
  //                     >
  //                         Delete
  //                     </div>
  //                 </div>
  //             );
  //         },
  //     },
  // ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="Table">
          <div className="TableTitle">
            Th??ng tin kh??ch h??ng
            {/* <Link to="/users/new" className="link">
                            Th??m m???i
                        </Link> */}
          </div>
          <DataGrid
            className="datagrid"
            rows={rows}
            columns={Columns}
            // columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
