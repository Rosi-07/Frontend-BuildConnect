import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/auth/useAxiosPrivate';
import useAuthStore from '../../hooks/auth/useAuth';
import ProjectModal from './components/ProjectModal';
import { AddCircleOutlineRounded } from '@mui/icons-material';

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const api = useAxiosPrivate();
    const { auth } = useAuthStore();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userResponse = await api.get(`users/${auth?.user?.id}`);
                const userData = userResponse.data;

                const ownerResponse = await api.get(`owners/${auth?.user?.id}`);
                const ownerData = ownerResponse.data.Owner;

                const combinedData = {
                    ...userData,
                    owner: ownerData,
                    projects: ownerData?.projects || [],
                };

                setUserProfile(combinedData);
            } catch (err) {
                setError(err.response ? err.response.data.message : 'Error fetching profile');
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [api, auth?.user]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg">
            <h2 className="mb-6 text-2xl font-semibold text-left text-gray-800">Perfil de Usuario</h2>

            <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                    <img
                        className="border-4 border-gray-300 rounded-full size-48"
                        src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png"
                        alt="User Profile"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Nombre</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg"
                            value={userProfile?.owner?.name || ''}
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Primer Apellido</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg"
                            value={userProfile?.owner?.lastname || ''}
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Segundo Apellido</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg"
                            value={userProfile?.owner?.lastname2 || ''}
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Correo Electrónico</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg"
                            value={userProfile?.email || ''}
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Teléfono</label>
                        {userProfile?.contacts?.numbers?.map((number, index) => (
                            <input
                                key={index}
                                type="text"
                                className="w-full px-4 py-2 mb-2 text-gray-700 bg-gray-100 border rounded-lg"
                                value={number || ''}
                                readOnly
                            />
                        ))}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Contacto</label>
                        {userProfile?.contacts?.emails?.map((email, index) => (
                            <input
                                key={index}
                                type="text"
                                className="w-full px-4 py-2 mb-2 text-gray-700 bg-gray-100 border rounded-lg"
                                value={email || ''}
                                readOnly
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button
                    className="inline-block pb-2 mt-3 text-xl font-medium text-gray-800 border-b-2 border-gray-300"
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                >
                    {isProjectsOpen ? 'Ocultar Proyectos' : 'Mostrar Proyectos'}
                </button>
                
            <button 
                onClick={() => setIsModalOpen(true)} 
                className="mr-48 inline-block mt-3 ml-4 text-lg font-medium text-[#00455E]"
            >
         <AddCircleOutlineRounded/>
            </button>
            <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    
                {isProjectsOpen && (
                    <div className="pt-4 mt-4 border-t">
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {userProfile.projects?.map((project) => (
                                <li key={project.id} className="p-4 border border-gray-100 rounded-md shadow-md cursor-pointer hover:bg-[#00455e0e]">
                                    <div className="relative mb-4">
                                        <img 
                                            src="https://www.simplespex.co.uk/wp-content/uploads/2013/06/frame_repair.png" 
                                            alt="project illustration" 
                                            className="w-16 h-16 mr-4 rounded-md"
                                        />
                                        <div className="w-full p-1 text-sm text-white bg-opacity-50 rounded-t-lg bg-slate-200 h-3/4">
                                            <h5 className="font-semibold text-gray-800">{project.title}</h5>
                                        </div>
                                    </div>
                                    
                                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">{project.description}</p>
                                    
                                    <div className="space-y-1 text-sm text-gray-500">
                                        <p className="flex items-center">
                                            <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 6.63 7 13 7 13s7-6.37 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                            Ubicación: {project.location.canton}, {project.location.province}
                                        </p>
                                        <p className="flex items-center">
                                            <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-13h2v4h-2zm0 6h2v6h-2z" />
                                            </svg>
                                            Fecha de inicio: {new Date(project.startDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
