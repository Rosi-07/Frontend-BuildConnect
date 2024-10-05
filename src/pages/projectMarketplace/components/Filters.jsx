
const filters = [
  "Todos", "Antiguos", "Cercanos", "Madera", "Vidrios", 
  "Reparaciones", "Revisión y Mantenimiento", "Techos", "Eléctrico"
];

const Filters = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {filters.map((filter) => (
        <button key={filter} className="p-2 transition-colors border rounded-md hover:bg-gray-700 hover:text-white">
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filters;
