import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import ReusableModal from "../../../../components/modal/ReusableModal";
import UpdateUser from "./UpdateUser";
import ReusableDialog from "../../../../components/dialog/ReusableDialog";
import ViewUser from "./ViewUser";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Permission from "./Permission";
import ChatIcon from '@mui/icons-material/Chat';

function UsersTable({ reset, setReset }) {
  const api = useAxiosPrivate();
  const [users, setUsers] = useState([]);
  const pageSize = 10;
  const sizeOptions = [10, 20, 30];
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        enqueueSnackbar("Error al obtener los usuarios", {
          variant: "error",
        });
      }
    };
    fetchUsers();
  }, [api, reset]);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
  };

  const handleOpenDeleteDialog = (user) => {
    setSelectedUser(user);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setSelectedUser(null);
    setOpenDeleteDialog(false);
  };

  const handleOpenViewDialog = (user) => {
    setSelectedUser(user);
    setOpenViewDialog(true);
  };

  const handleCloseViewDialog = () => {
    setSelectedUser(null);
    setOpenViewDialog(false);
  };

  const handleOpenPermission = (user) => {
    setSelectedPermission(user);
    setOpenPermission(true);
  };

  const handleClosePermission = () => {
    setSelectedPermission(null);
    setOpenPermission(false);
  };

  const columns = [
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Rol",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      flex: 1,
      cellClassName: "actions",
      renderCell: (params) => {
        return (
          <div>
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Editar"
              onClick={() => {
                handleOpenModal(params.row);
              }}
            />
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Eliminar"
              onClick={() => {
                handleOpenDeleteDialog(params.row);
              }}
            />
            <GridActionsCellItem
              icon={<VisibilityIcon />}
              label="Ver"
              onClick={() => {
                handleOpenViewDialog(params.row);
              }}
            />
            <GridActionsCellItem
              icon={<ChatIcon />}
              label="Permisos"
              onClick={() => {
                handleOpenPermission(params.row);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleDeleteUser = async () => {
    try {
      await api.delete(`/users/${selectedUser.id}`);
      enqueueSnackbar("Usuario eliminado correctamente", {
        variant: "success",
      });
      setReset((prev) => !prev);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error al eliminar el usuario", {
        variant: "error",
      });
    }
    handleCloseDeleteDialog();
  };

  return (
    <>
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <DataGrid
            sx={{
              boxShadow: 2,
            }}
            style={{ height: 500, width: "100%" }}
            rows={users}
            getRowId={(row) => row.id}
            loading={users.length === 0}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            disableSelectionOnClick
            getRowHeight={() => "auto"}
            pageSize={pageSize}
            rowsPerPageOptions={pageSize}
            initialState={{
              ...users.initialState,
              pagination: { paginationModel: { pageSize } },
            }}
            pageSizeOptions={sizeOptions}
          />
        </Box>
      </Box>

      <ReusableModal
        open={openModal}
        onClose={handleCloseModal}
        title="Editar Usuario"
        children={
          <UpdateUser
            tittle={"Actualizar Usuario"}
            onClose={handleCloseModal}
            user={selectedUser}
            onUpdate={() => {
              handleCloseModal();
              setReset((prev) => !prev);
            }}
          />
        }
      ></ReusableModal>

      {selectedUser && (
        <ReusableDialog
          open={openDeleteDialog}
          onClose={handleCloseDeleteDialog}
          title="Eliminar Usuario"
          content={`¿Estás seguro de que deseas eliminar a ${selectedUser.email}?`}
          onConfirm={handleDeleteUser}
        />
      )}

      <ReusableModal
        open={openViewDialog}
        onClose={handleCloseViewDialog}
        title="Ver Usuario"
        children={
          <ViewUser user={selectedUser} onClose={handleCloseViewDialog} />
        }
      ></ReusableModal>


{selectedPermission && (
      <ReusableModal
        open={openPermission}
        onClose={handleClosePermission}
        title="Permisos"
        children={
          <Permission
            title={"Agregar Permiso"}
            user={selectedPermission}
            onClose={handleClosePermission}
            onUpdate={() => {
              handleClosePermission();
              setReset((prev) => !prev);
            }}
          />
        }
      ></ReusableModal>

    )}
    </>
  );
}

export default UsersTable;
