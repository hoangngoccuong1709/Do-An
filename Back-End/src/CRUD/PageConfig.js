import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getListSMTP, removeSmtp } from "../kAcctions/ConfigSmtp";
import ConfigSMTPs from "./ConfigSMTPs";
import EditConfigSmtp from "./EditConfigSmtp";

export default function PageConfig() {
  const [config, setConfig] = useState(false);
  const [configEdit, setConfigEdit] = useState(false);
  const [fillConfig, setFillConfig] = useState({
    Name: "",
    Email: "",
    SMTP: "",
    Status: "",
  });

  const dispatch = useDispatch();
  const handlePutConfig = () => {
    setConfig(!config);
  };

  const ConfigSmtp = useSelector((state) => state.ConfigSmtp);

  useEffect(() => {
    getAllSMTP();
  }, []);

  const getAllSMTP = async () => {
    await Promise.all([dispatch(getListSMTP())]);
  };

  const handlePutConfigEdit = (params) => {
    setConfigEdit(!configEdit);
    setFillConfig({
      Name: params.Name,
      Email: params.Email,
      PassSMTP: params.PassSMTP,
      Status: params.Status,
    });
  };

  const handleRemoveConfig = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(removeSmtp(id));
      getAllSMTP();
    }
  };

  const rows = ConfigSmtp.list?.map((post) => ({
    id: post.id,
    Email: post.email,
    Name: post.name,
    PassSMTP: post.passSMTP,
    Status: post.status,
    CreateAt: post.createAt,
    UpdateAt: post.updateAt,
  }));

  const Columns = [
    { field: "id", headerName: "#", width: 50, hide: true },
    { field: "Name", headerName: "Name", width: 200, editable: false },
    { field: "Email", headerName: "Email", width: 200, editable: false },
    { field: "Status", headerName: "Status", width: 180, editable: false },
    // { field: "PassSMTP", headerName: "PassSMTP", width: 180, editable: false },

    {
      field: "CreateAt",
      headerName: "Create At",
      width: 200,
      editable: false,
    },
    {
      field: "UpdateAt",
      headerName: "Update At",
      width: 200,
      editable: false,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button
              className="btn btn-primary ml-3"
              onClick={() => handlePutConfigEdit(params.row)}
            >
              edit
            </button>
            <button
              className="btn btn-danger ml-3"
              onClick={() => handleRemoveConfig(params.id)}
            >
              delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end mr-3">
        <button className="btn btn-primary mb-3" onClick={handlePutConfig}>
          + Thêm cấu hình
        </button>
      </div>
      <div className="ml-3 mr-3">
        <DataGrid
          disableMultipleSelection={true}
          disableSelectionOnClick
          // className="datagrid"
          autoHeight
          autoPageSize
          rows={rows}
          columns={Columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
      <ConfigSMTPs handlePutConfig={handlePutConfig} config={config} />
      <EditConfigSmtp
        handlePutConfigEdit={handlePutConfigEdit}
        configEdit={configEdit}
        fillConfig={fillConfig}
      />
    </div>
  );
}
