import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className="relative w-full h-[450px]" >
                <div className="absolute inset-0 opacity-90">
                    <img 
                        src="/logoConstrucccion.jpg" 
                        alt="Background Image" 
                        className="object-cover object-center w-full h-full" 
                    />
                </div>
                <div className="absolute flex flex-col items-center justify-between mb-20 inset-2 md:flex-row">
                    <div className="md:w-1/2 md:mb-0">
                        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl ">Visibilidad Inmobiliaria</h1>
                        <p className="mt-4 mb-8 text-xl font-bold text-white">Tu mejor aliado para alquilar o vender propiedades</p>
                    </div>
                </div>
            </div>
            <section className="py-10" >
                <div className="container px-4 mx-auto">
                    <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Nuestros Servicios</h2>  
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <img 
                                src="https://media.licdn.com/dms/image/D4E12AQEyW__44f1iUA/article-cover_image-shrink_600_2000/0/1654044038393?e=2147483647&v=beta&t=2KxkWgtHUwzMHDvgDi7n1ByW1mpJTTAJLIVVYUZ4_Ew" 
                                alt="Promoción en Línea" 
                                className="object-cover w-full h-64" 
                            />
                            <div className="p-6 text-center">
                                <h3 className="mb-2 text-xl font-medium text-gray-800">Promoción en Línea</h3>
                                <p className="text-base text-gray-700">
                                    Usamos estrategias de marketing digital para dar visibilidad a tus propiedades, asegurando que lleguen al público adecuado.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <img 
                                src="https://static.vecteezy.com/system/resources/thumbnails/008/116/910/small_2x/real-estate-concept-business-home-insurance-and-real-estate-protection-buy-and-sell-houses-and-real-estate-online-on-a-virtual-screen-free-photo.jpg" 
                                alt="Listado de Propiedades" 
                                className="object-cover w-full h-64" 
                            />
                            <div className="p-6 text-center">
                                <h3 className="mb-2 text-xl font-medium text-gray-800">Listado de Propiedades</h3>
                                <p className="text-base text-gray-700">
                                    Ofrecemos un listado extenso y actualizado de propiedades en alquiler y venta. Encuentra tu hogar ideal con nosotros.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <img 
                                src="https://media.istockphoto.com/id/1397833533/photo/man-hand-using-a-calculator-and-fill-in-the-income-tax-online-return-form-for-payment.webp?b=1&s=170667a&w=0&k=20&c=S8uQiHFchcEX-YnN-HmxYk6n-aZYG2YEfeZe99QPzhU=" 
                                alt="Asesoría Personalizada" 
                                className="object-cover w-full h-64" 
                            />
                            <div className="p-6 text-center">
                                <h3 className="mb-2 text-xl font-medium text-gray-800">Asesoría Personalizada</h3>
                                <p className="text-base text-gray-700">
                                    Brindamos asesoría personalizada para ayudarte a tomar las mejores decisiones en la compra, venta o alquiler de propiedades.
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
                                Somos una empresa joven y dinámica, formada por estudiantes emprendedores, dedicada a ofrecer visibilidad a propiedades para alquiler y venta. 
                                Nuestra misión es facilitar la conexión entre propietarios y potenciales inquilinos o compradores, aprovechando el poder de internet y las redes sociales.
                                Trabajamos sin una oficina física, lo que nos permite operar con bajos costos y ofrecer tarifas competitivas. 
                                Nos comprometemos a proporcionar un servicio rápido, eficiente y de alta calidad.
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
