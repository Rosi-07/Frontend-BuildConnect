import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

function UserProfile() {
  const navigate = useNavigate(); // Inicializa el navegador
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [publications, setPublications] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);

  // Simula la carga del nombre de usuario y publicaciones del registro o backend
  useEffect(() => {
    // Aquí deberías obtener los datos desde una API o tu sistema de autenticación
    setName("Juan Pérez"); // Supongamos que obtienes este nombre desde el registro
    setLocation("San José, Costa Rica"); // Cargar ubicación del backend si es posible
    setPublications([
      "Mi publicación 1",
      "Mi publicación 2",
      "Mi publicación 3",
    ]);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
      setIsEditingProfilePic(false); // Oculta el lápiz después de cargar la imagen
    }
  };

  const handleEditPublication = (index) => {
    setEditIndex(index);
    setEditText(publications[index]);
  };

  const handleSavePublication = () => {
    const updatedPublications = [...publications];
    updatedPublications[editIndex] = editText;
    setPublications(updatedPublications);
    setEditIndex(null);
    setEditText("");
  };

  const handleSaveLocation = () => {
    setIsEditingLocation(false);
    // Aquí podrías agregar lógica para guardar la ubicación en la base de datos
  };

  return (
<div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <h4 className="mb-6 text-2xl font-bold text-center text-gray-800">
        Perfil de Usuario
      </h4>
      {/* Contenedor horizontal */}
      <div className="flex items-center mb-6 space-x-8">
        <div>
          {/* Botón personalizado para seleccionar archivo */}
          {!profilePicture && (
            <>
              <label className="px-4 py-2 text-white bg-gray-500 rounded cursor-pointer">
                Seleccionar Foto
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </>
          )}
          {profilePicture && (
            <div className="relative">
              <img
                src={profilePicture}
                alt="Foto de Perfil"
                className="w-32 h-32 border border-gray-300 rounded-full"
              />
              <button
                onClick={() => setIsEditingProfilePic(true)}
                className="absolute top-0 right-0 p-1 bg-white border rounded-full shadow-md"
              >
                <FaRegEdit className="text-blue-600" />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-start space-y-2">
          <h5 className="text-xl font-semibold">{name}</h5>
          <div className="flex items-center space-x-2">
            {isEditingLocation ? (
              <>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="px-2 py-1 border rounded"
                />
                <button
                  onClick={handleSaveLocation}
                  className="px-2 py-1 text-white bg-blue-500 rounded"
                >
                  Guardar
                </button>
              </>
            ) : (
              <p className="text-gray-600">{location}</p>
            )}
            <button
              onClick={() => setIsEditingLocation(true)}
              className="text-blue-500"
            >
              <FaRegEdit />
            </button>
          </div>
        </div>
        {/* Botón Catálogo de empresas */}
        <button
          onClick={() => navigate("/businessCatalog")}
          className="px-4 py-2 text-white bg-[#00455E] rounded"
        >
          Catálogo de empresas
        </button>
      </div>
      <hr className="my-4" />
      <div>
        <h4 className="mb-4 text-lg font-semibold">Publicaciones</h4>
        {publications.map((pub, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="px-2 py-1 border rounded"
              />
            ) : (
              <span>{pub}</span>
            )}
            <div>
              {editIndex === index ? (
                <button
                  onClick={handleSavePublication}
                  className="px-2 py-1 text-white bg-blue-500 rounded"
                >
                  Guardar
                </button>
              ) : (
                <button
                  onClick={() => handleEditPublication(index)}
                  className="px-2 py-1 text-white bg-green-500 rounded"
                >
                  Editar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {isEditingProfilePic && (
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2"
        />
      )}
    </div>
  );
}

export default UserProfile;
