import React, { useState } from 'react';
import { useSnackbar } from 'notistack'; 
import useAxiosPrivate from '../../../hooks/auth/useAxiosPrivate';
import useAuthStore from '../../../hooks/auth/useAuth';
import { ConstructionOutlined } from '@mui/icons-material';

const ProjectModal = ({ isOpen, onClose }) => {
    const { enqueueSnackbar } = useSnackbar(); 
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        location: {
            province: '',
            canton: ''
        },
        startDate: '',
        endDate: '',
        budget: '',
        pricing: {
            plan: '',
            billingCycle: '',
            billingDate: ''
        },
        UserId: ''
    });
   
    const api = useAxiosPrivate();
    const { auth } = useAuthStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('location.')) {
            setProjectData({
                ...projectData,
                location: {
                    ...projectData.location,
                    [name.split('.')[1]]: value
                }
            });
        } else {
            setProjectData({
                ...projectData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('projects',  { ...projectData, UserId:auth?.user?.id});
            enqueueSnackbar("Proyecto añadido exitosamente", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });
            onClose(); 
            setProjectData({
                title: '',
                description: '',
                location: { province: '', canton: '' },
                startDate: '',
                endDate: '',
                budget: '',
                pricing: { plan: '', billingCycle: '', billingDate: '' },
                UserId: ''
            });
        } catch (error) {
            enqueueSnackbar(
                `Error al añadir proyecto: ${error.response?.data?.message || "Error desconocido"}`, 
                { variant: "error",
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                  }
                }
            );
        }
    };
console.log(auth);
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Añadir Nuevo Proyecto</h3>
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
                            name="title"
                            id="title"
                            value={projectData.title}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Título"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="description"
                            id="description"
                            value={projectData.description}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Descripción"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="location.province"
                            value={projectData.location.province}
                            onChange={handleChange}
                            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Provincia"
                            required
                        />
                        <input
                            type="text"
                            name="location.canton"
                            value={projectData.location.canton}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Cantón"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900">Fecha de Inicio</label>
                            <input 
                                type="date" 
                                name="startDate" 
                                value={projectData.startDate} 
                                onChange={handleChange} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900">Fecha de Fin</label>
                            <input 
                                type="date" 
                                name="endDate" 
                                value={projectData.endDate} 
                                onChange={handleChange} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type="number"
                            name="budget"
                            id="budget"
                            value={projectData.budget}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Presupuesto estimado"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full text-white bg-[#00455E] hover:bg-[#00334d] focus:ring-4 focus:ring-blue-300 rounded-lg p-2">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;
