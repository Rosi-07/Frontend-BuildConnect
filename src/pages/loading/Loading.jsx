const LoadingScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center mb-6 animate-pulse">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-16 h-16 text-yellow-500"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l-3.7 6.4H3v3h2v10h3v-5h4v5h3v-5h4v5h3V11h2V8.4h-5.3L12 2zM5.5 10.9l2.6-4.5 2.6 4.5H5.5zM15 10.9l2.6-4.5 2.6 4.5H15z" />
                </svg>
                <p className="mt-4 text-xl font-semibold text-gray-700">Cargando Proyectos de Construcción</p>
            </div>

            <div className="w-64 h-2 overflow-hidden bg-gray-300 rounded-full">
                <div className="h-full bg-yellow-500 animate-pulse"></div>
            </div>

            <p className="mt-4 text-sm text-center text-gray-600">
                Por favor, espera un momento mientras recopilamos los últimos proyectos de construcción para ti.
            </p>
        </div>
    );
};

export default LoadingScreen;
