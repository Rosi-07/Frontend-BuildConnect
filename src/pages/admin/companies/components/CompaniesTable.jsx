import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CompaniesTable({reset, setReset}) {
  // Datos quemados de empresas
  const empresas = [
    {
      id: 1,
      nombre: "Construcciones ABC",
      email: "contacto@abc.com",
      telefono: "123-456-7890",
    },
    {
      id: 2,
      nombre: "Reformas XYZ",
      email: "info@xyz.com",
      telefono: "321-654-9870",
    },
    {
      id: 3,
      nombre: "Vidrios y Más",
      email: "ventas@vidriosymas.com",
      telefono: "456-789-0123",
    },
    {
      id: 4,
      nombre: "Rehabilitaciones 123",
      email: "servicio@rehabilitaciones123.com",
      telefono: "567-890-1234",
    },
  ];

  // Definición de las columnas
  const columns = [
    { field: "nombre", headerName: "Nombre de la Empresa", flex: 1 },
    { field: "email", headerName: "Correo Electrónico", flex: 1 },
    { field: "telefono", headerName: "Teléfono", flex: 1 },
    {
      field: "acciones",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params) => {
        return (
          <div>
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Editar"
              onClick={() => alert(`Editando empresa: ${params.row.nombre}`)}
            />
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Eliminar"
              onClick={() => alert(`Eliminando empresa: ${params.row.nombre}`)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Box sx={{ overflow: "auto" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <DataGrid
          rows={empresas}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          disableSelectionOnClick
          sx={{ height: 400, width: "100%" }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default CompaniesTable;
