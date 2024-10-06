import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function UsersTable() {
  // Datos quemados
  const usuarios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
      telefono: "123-456-7890",
    },
    {
      id: 2,
      nombre: "Ana López",
      email: "ana.lopez@example.com",
      telefono: "321-654-9870",
    },
    {
      id: 3,
      nombre: "Carlos Sánchez",
      email: "carlos.sanchez@example.com",
      telefono: "456-789-0123",
    },
    {
      id: 4,
      nombre: "Marta Ramírez",
      email: "marta.ramirez@example.com",
      telefono: "567-890-1234",
    },
  ];

  // Definición de las columnas
  const columns = [
    { field: "nombre", headerName: "Nombre", flex: 1 },
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
              onClick={() => alert(`Editando usuario: ${params.row.nombre}`)}
            />
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Eliminar"
              onClick={() => alert(`Eliminando usuario: ${params.row.nombre}`)}
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
          rows={usuarios}
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

export default UsersTable;