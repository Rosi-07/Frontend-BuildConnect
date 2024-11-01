import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import ReusableModal from "../../../../components/modal/ReusableModal";
import UpdateCompany from "./UpdateCompany";
import ReusableDialog from "../../../../components/dialog/ReusableDialog";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewCompany from "./ViewCompany";

function CompaniesTable({ reset, setReset }) {
  const api = useAxiosPrivate();
  const [companies, setCompanies] = useState([]);
  const pageSize = 10;
  const sizeOptions = [10, 20, 30];
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);

  const handleOpenModal = (company) => {
    setSelectedCompany(company);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCompany(null);
  };

  const handleOpenDeleteDialog = (company) => {
    setSelectedCompany(company);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setSelectedCompany(null);
    setOpenDeleteDialog(false);
  };

  const handleOpenViewDialog = (company) => {
    setSelectedCompany(company);
    setOpenViewDialog(true);
  };

  const handleCloseViewDialog = () => {
    setSelectedCompany(null);
    setOpenViewDialog(false);
  };

  const handleDeleteCompany = async () => {
    try {
      await api.delete(`/companies/${selectedCompany.companyId}`);
      setReset((prev) => !prev);
      enqueueSnackbar("Empresa eliminada correctamente", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Error al eliminar la empresa", { variant: "error" });
    } finally {
      setOpenDeleteDialog(false);
    }
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await api.get("/companies");
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
      headerName: "Nombre de la empresa",
      flex: 1,
      valueGetter: (value, row) => {
        return row.Company.name;
      },
    },

    {
      field: "address",
      headerName: "Ubicación",
      flex: 1,
      valueGetter: (value, row) => {
        return (
          row.Company.address.canton +
          ", " +
          row.Company.address.province +
          ", " +
          row.Company.address.district
        );
      },
    },
    {
      field: "streetDetails",
      headerName: "Dirección exacta",
      flex: 1,
      valueGetter: (value, row) => {
        return row.Company.address.streetDetails;
      },
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
            {/* <GridActionsCellItem
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
            /> */}
            <GridActionsCellItem
              icon={<VisibilityIcon />}
              label="Ver"
              onClick={() => {
                handleOpenViewDialog(params.row);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <DataGrid
            sx={{
              boxShadow: 2,
            }}
            style={{ height: 500, width: "100%" }}
            rows={companies}
            getRowId={(row) => row.id}
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
          content={`¿Estás seguro de que deseas eliminar la empresa ${selectedCompany.Company.name}?`}
          onConfirm={handleDeleteCompany}
        />
      )}

      <ReusableModal
        open={openViewDialog}
        onClose={handleCloseViewDialog}
        title="Ver Empresa"
        children={
          <ViewCompany
            company={selectedCompany}
            onClose={handleCloseViewDialog}
          />
        }
      ></ReusableModal>
    </>
  );
}

export default CompaniesTable;
