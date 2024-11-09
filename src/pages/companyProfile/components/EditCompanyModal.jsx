import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import useAxiosPrivate from '../../../hooks/auth/useAxiosPrivate';
import useAuthStore from '../../../hooks/auth/useAuth';

const EditCompanyModal = ({ isOpen, onClose }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [companyData, setCompanyData] = useState({
        id: '',
        name: '',
        address: {
            province: '',
            canton: '',
            district: '',
        },
        contacts: {
            numbers: [],
            emails: [],
        },
    });
    const [loading, setLoading] = useState(false);
    const api = useAxiosPrivate();
    const { auth } = useAuthStore();

    useEffect(() => {
        if (isOpen) {
            setLoading(true); // Establece loading en true al abrir el modal
            const fetchCompanyProfile = async () => {
                try {
                    const response = await api.get(`companies/${auth?.user?.id}`);
                    setCompanyData(response.data);
                } catch (error) {
                    enqueueSnackbar('Error al cargar los datos de la empresa', { variant: 'error' });
                } finally {
                    setLoading(false);
                }
            };
            fetchCompanyProfile();
        }
    }, [isOpen, api, auth?.user, enqueueSnackbar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddressChange = (field, value) => {
        setCompanyData((prevData) => ({
            ...prevData,
            address: {
                ...prevData.address,
                [field]: value,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`companies/${auth?.user?.id}`, companyData);
            enqueueSnackbar("Empresa editada exitosamente", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });
            onClose();
            setCompanyData({
                id: '',
                name: '',
                address: { province: '', canton: '', district: '' },
                contacts: { numbers: [], emails: [] },
            });
        } catch (error) {
            enqueueSnackbar(
                `Error al editar empresa: ${error.response?.data?.message || "Error desconocido"}`,
                {
                    variant: "error",
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                }
            );
        }
    };

    if (!isOpen || loading) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Editar Empresa</h3>
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
                            value={companyData.name}
                            onChange={handleChange}
                            placeholder="Nombre de la Empresa"
                            required
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <input
                        type="text"
                        value={companyData.address?.province || ''}
                        onChange={(e) => handleAddressChange('province', e.target.value)}
                        placeholder="Provincia"
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="text"
                        value={companyData.address?.canton || ''}
                        onChange={(e) => handleAddressChange('canton', e.target.value)}
                        placeholder="Cantón"
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="text"
                        value={companyData.address?.district || ''}
                        onChange={(e) => handleAddressChange('district', e.target.value)}
                        placeholder="Distrito"
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />

                    {companyData.contacts.numbers.map((number, index) => (
                        <input
                            key={index}
                            type="text"
                            value={number}
                            onChange={(e) => {
                                const updatedNumbers = [...companyData.contacts.numbers];
                                updatedNumbers[index] = e.target.value;
                                setCompanyData((prevData) => ({
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

                    {companyData.contacts.emails.map((email, index) => (
                        <input
                            key={index}
                            type="email"
                            value={email}
                            onChange={(e) => {
                                const updatedEmails = [...companyData.contacts.emails];
                                updatedEmails[index] = e.target.value;
                                setCompanyData((prevData) => ({
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

export default EditCompanyModal;
