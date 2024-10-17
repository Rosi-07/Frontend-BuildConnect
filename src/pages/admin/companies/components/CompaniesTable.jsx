import {
  DataGrid,
  // esES,
  GridToolbar,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import ReusableModal from "../../../../components/modal/ReusableModal";
import UpdateCompany from "./UpdateCompany";
import ReusableDialog from "../../../../components/dialog/ReusableDialog";



function CompaniesTable({reset, setReset}) {
 
  const api = useAxiosPrivate();
  const [companies, setCompanies] = useState([]);
  const pageSize = 10;
  const sizeOptions = [10, 20, 30];
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleOpenModal = (company) => {
    setSelectedCompany(company);
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCompany(null);
  }

  const handleOpenDeleteDialog = (company) => {
    setSelectedCompany(company);
    setOpenDeleteDialog(true);
  }

  const handleCloseDeleteDialog = () => {
    setSelectedCompany(null);
    setOpenDeleteDialog(false);
  }

  const handleDeleteCompany = async () => {
    try {
      await api.delete(`api/companies/${selectedCompany.companyId}`);
      setReset((prev) => !prev);
      enqueueSnackbar("Empresa eliminada correctamente", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Error al eliminar la empresa", { variant: "error" });
    } finally {
      setOpenDeleteDialog(false);
    }
  };



  

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await api.get("api/companies");
        setCompanies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompanies();
  }, [api, reset]);

  const columns = [
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
    }, 
    {
      field: "email",
      headerName: "Correo",
      flex: 1,
    },
    {
      field: "phone.mobile",
      headerName: "Teléfono",
      flex: 1,
      valueGetter: (value, row) => {
        return row.phone.mobile || "N/A";
      },
    },
    {
      field: "phone.landline",
      headerName: "Teléfono fijo",
      flex: 1,
      valueGetter: (value, row) => {
        return row.phone.landline || "N/A";
      },
    },
    {
      field: "address",
      headerName: "Dirección",
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
          </div>
        );
      },
    },  
  ]
  

  return (
    <>
    <Box sx={{ overflow: "auto" }}>
    <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
      <DataGrid
        sx={{
          boxShadow: 2,
        }}
        style={{ height: 500, width: "100%" }}
        //  localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={companies}
        getRowId={(row) => row.companyId}
        loading={companies.length === 0}
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
          ...companies.initialState,
          pagination: { paginationModel: { pageSize } },
        }}
        pageSizeOptions={sizeOptions}
      />
    </Box>
     </Box>


      <ReusableModal
        open={openModal}
        onClose={handleCloseModal}
        title="Editar Empresa"
        children={
          <UpdateCompany
            tittle={"Actualizar Empresa"}
            onClose={handleCloseModal}
            company={selectedCompany}
            onUpdate={() => {
              handleCloseModal();
              setReset((prev) => !prev);
            }}
          />
        }
      ></ReusableModal>


      {selectedCompany && (
        <ReusableDialog
          open={openDeleteDialog}
          onClose={handleCloseDeleteDialog}
          title="Eliminar Empresa"
          content={`¿Estás seguro de que deseas eliminar la empresa ${selectedCompany.name}?`}
          onConfirm={handleDeleteCompany}
        />
      )}


     </>
  );
}

export default CompaniesTable;
