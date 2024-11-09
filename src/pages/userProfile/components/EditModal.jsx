import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import useAxiosPrivate from '../../../hooks/auth/useAxiosPrivate';
import useAuthStore from '../../../hooks/auth/useAuth';

const EditModal = ({ isOpen, onClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        lastname: '',
        lastname2: '',
        email: '',
        contacts: {
            numbers: [],
            emails: [],
        },
    });
    const [loading, setLoading] = useState(true);
    const api = useAxiosPrivate();
    const { auth } = useAuthStore();

    useEffect(() => {
        if (isOpen) {
            const fetchUserProfile = async () => {
                try {
                    const userResponse = await api.get(`users/${auth?.user?.id}`);
                    const ownerResponse = await api.get(`owners/${auth?.user?.id}`);

                    const combinedData = {
                        ...userResponse.data,
                        owner: ownerResponse.data.Owner,
                    };

                    setUserData({
                        ...combinedData.owner,
                        email: combinedData.email,
                        contacts: combinedData.contacts,
                    });
                } catch (error) {
                    enqueueSnackbar('Error al cargar los datos del usuario', { variant: 'error' });
                } finally {
                    setLoading(false);
                }
            };

            fetchUserProfile();
        }
    }, [isOpen, api, auth?.user, enqueueSnackbar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const updatedOwnerData = {
                email: userData.email,
                password: userData.password,
                role: "owner",
                contacts: userData.contacts,
                Owner: {
                    name: userData.name,
                    lastname: userData.lastname,
                    lastname2: userData.lastname2
                }
            };


            await api.put(`owners/${auth?.user?.id}`, updatedOwnerData);

            enqueueSnackbar("Usuario editado exitosamente", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });

            onClose();
            setUserData({
                id: '',
                name: '',
                lastname: '',
                lastname2: '',
                email: '',
                contacts: {
                    numbers: [],
                    emails: [],
                }
            });
        } catch (error) {
            enqueueSnackbar(
                `Error al editar usuario: ${error.response?.data?.message || "Error desconocido"}`,
                {
                    variant: "error",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "right",
                    },
                }
            );
        }
    };


    if (!isOpen || loading) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Editar Usuario</h3>
                    <button
                        type="button"
                        className="text-gray-400 hover:text-gray-900"
                        onClick={onClose}
                    >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            placeholder="Nombre"
                            required
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastname"
                            value={userData.lastname}
                            onChange={handleChange}
                            placeholder="Primer Apellido"
                            required
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastname2"
                            value={userData.lastname2}
                            onChange={handleChange}
                            placeholder="Segundo Apellido"
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Correo Electrónico"
                            required
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    {userData.contacts.numbers.map((number, index) => (
                        <input
                            key={index}
                            type="text"
                            value={number}
                            onChange={(e) => {
                                const updatedNumbers = [...userData.contacts.numbers];
                                updatedNumbers[index] = e.target.value;
                                setUserData((prevData) => ({
                                    ...prevData,
                                    contacts: {
                                        ...prevData.contacts,
                                        numbers: updatedNumbers,
                                    },
                                }));
                            }}
                            placeholder="Número de teléfono"
                            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
                        />
                    ))}

                    {userData.contacts.emails.map((email, index) => (
                        <input
                            key={index}
                            type="email"
                            value={email}
                            onChange={(e) => {
                                const updatedEmails = [...userData.contacts.emails];
                                updatedEmails[index] = e.target.value;
                                setUserData((prevData) => ({
                                    ...prevData,
                                    contacts: {
                                        ...prevData.contacts,
                                        emails: updatedEmails,
                                    },
                                }));
                            }}
                            placeholder="Correo Electrónico"
                            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
                        />
                    ))}

                    <button type="submit" className="w-full text-white bg-[#00455E] hover:bg-[#00334d] p-2 rounded-lg">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
