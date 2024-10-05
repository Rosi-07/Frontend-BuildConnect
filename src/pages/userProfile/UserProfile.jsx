import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

function UserProfile() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("Nombre Apellido/S");
  const [location, setLocation] = useState("ubicación");
  const [publications, setPublications] = useState([
    "Mi publicación 1",
    "Mi publicación 2",
    "Mi publicación 3",
    "Mi publicación 4",
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);

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

  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <h4 className="mb-6 text-2xl font-bold text-center text-gray-800">
        Perfil de Usuario
      </h4>
      <div className="relative flex items-center mb-6">
        <div className="mr-6">
          {/* Ocultar el botón de selección de archivo si ya hay una imagen de perfil */}
          {!profilePicture && (
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2"
            />
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
        <div>
          <h5 className="text-xl font-semibold">{name}</h5>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
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
      {/* Mostrar el input de archivo si se está editando la foto de perfil */}
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
