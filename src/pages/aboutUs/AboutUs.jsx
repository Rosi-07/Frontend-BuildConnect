import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className="relative w-full h-[450px]" >
                <div className="absolute inset-0 opacity-90">
                    <img 
                        src="https://gruposalva32.com/wp-content/uploads/2020/05/Blog4.jpg" 
                        alt="Background Image" 
                        className="object-cover object-center w-full h-full" 
                    />
                </div>
                <div className="absolute flex flex-col items-center justify-between mb-20 inset-2 md:flex-row">
                    <div className="md:w-1/2 md:mb-0">
                        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl ">Build Connect</h1>
                        <p className="mt-4 mb-8 text-xl font-bold text-white">Impulsa la Visibilidad de tus Necesidades</p>
                    </div>
                </div>
            </div>
            <section className="py-10" >
                <div className="container px-4 mx-auto">
                    <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Nuestros Servicios</h2>  
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <img 
                                src="https://static.vecteezy.com/system/resources/thumbnails/008/116/910/small_2x/real-estate-concept-business-home-insurance-and-real-estate-protection-buy-and-sell-houses-and-real-estate-online-on-a-virtual-screen-free-photo.jpg" 
                                alt="Promoción en Línea" 
                                className="object-cover w-full h-64" 
                            />
                            <div className="p-6 text-center">
                                <h3 className="mb-2 text-xl font-medium text-gray-800">Publicación de proyectos</h3>
                                <p className="text-base text-gray-700">
                                Nuestra plataforma te permite publicar fácilmente tus proyectos de construcción y remodelación. Nos encargamos de promover cada publicación para que alcance la máxima visibilidad entre las constructoras y profesionales del sector.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <img 
                                src="https://neilpatel.com/wp-content/uploads/2017/09/What-is-Relationship-Marketing-and-How-to-Use-it-to-Connect-With-Your-Customers.jpg" 
                                alt="Conexión" 
                                className="object-cover w-full h-64" 
                            />
                            <div className="p-6 text-center">
                                <h3 className="mb-2 text-xl font-medium text-gray-800">Conexión con proveedores</h3>
                                <p className="text-base text-gray-700">
                                Facilitamos la conexión directa entre quienes buscan servicios y las empresas que los ofrecen. Nuestra plataforma permite a las constructoras ver proyectos publicados y enviar propuestas adaptadas a las necesidades del cliente.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <img 
                                src="https://media.istockphoto.com/id/1397833533/photo/man-hand-using-a-calculator-and-fill-in-the-income-tax-online-return-form-for-payment.webp?b=1&s=170667a&w=0&k=20&c=S8uQiHFchcEX-YnN-HmxYk6n-aZYG2YEfeZe99QPzhU=" 
                                alt="Gestión" 
                                className="object-cover w-full h-64" 
                            />
                            <div className="p-6 text-center">
                                <h3 className="mb-2 text-xl font-medium text-gray-800">Gestión de solicitudes</h3>
                                <p className="text-base text-gray-700">
                                 Puedes gestionar todas tus solicitudes en un solo lugar. Desde la publicación inicial hasta la selección de la propuesta ideal, nuestra plataforma te facilita comparar y elegir las mejores ofertas para tu proyecto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100" >
                <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="max-w-lg">
                            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Sobre Nosotros</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                BuildConnect es una plataforma innovadora formada por un grupo de estudiantes. Nuestra misión es simplificar el proceso de búsqueda y contratación de servicios de construcción, brindando un entorno intuitivo y transparente. 
                                Aquí, los usuarios pueden publicar sus proyectos y recibir propuestas competitivas de constructoras interesadas, asegurando así una ejecución eficiente y con resultados de alta calidad.
                                Nos diferenciamos por nuestra dedicación a ofrecer un servicio orientado a facilitar las mejores conexiones en el sector.
                            </p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img 
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG91ciUyMHRlYW18ZW58MHx8MHx8fDA%3D" 
                                alt="Sobre Nosotros" 
                                className="object-cover rounded-lg shadow-md" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10 text-gray-700 body-font">
                <div className="flex justify-center text-3xl font-bold text-center text-gray-800">
                    ¿Por qué Nosotros?
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap justify-center text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transition duration-500 transform hover:scale-110">
                                <div className="flex justify-center">
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/512/2820/2820124.png" 
                                        className="w-32 mb-3" 
                                        alt="Visibilidad" 
                                    />
                                </div>
                                <h2 className="text-2xl text-gray-900 title-font font-regular">Visibilidad Máxima</h2>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transition duration-500 transform hover:scale-110">
                                <div className="flex justify-center">
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/512/7988/7988585.png" 
                                        className="w-32 mb-3" 
                                        alt="Tarifas Competitivas" 
                                    />
                                </div>
                                <h2 className="text-2xl text-gray-900 title-font font-regular">Tarifas Competitivas</h2>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transition duration-500 transform hover:scale-110">
                                <div className="flex justify-center">
                                    <img 
                                        src="https://cdn-icons-png.freepik.com/512/4371/4371226.png" 
                                        className="w-32 mb-3" 
                                        alt="Eficiencia" 
                                    />
                                </div>
                                <h2 className="text-2xl text-gray-900 title-font font-regular">Eficiencia</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
