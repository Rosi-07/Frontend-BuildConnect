import { useNavigate } from 'react-router-dom';

const OwnerSubscription = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-[#00455E]">
          Publica tus proyectos ¡gratis!
        </h1>
        
        <p className="mb-4 text-lg text-center text-gray-700">
          Publicar proyectos en nuestra plataforma es completamente <span className="font-semibold">gratis</span>. Comparte tus necesidades de construcción, remodelacion, demolición o reparación sin costo alguno.
        </p>
        
        <p className="text-lg text-center text-gray-700">
          ¿Quieres que más personas vean tus proyectos? Mejora la visibilidad de tus publicaciones con una pequeña inversión de{' '}
          <span className="font-semibold text-[#00455E]">$0.99</span>. Así, tus proyectos aparecerán en posiciones destacadas, ¡aumentando su alcance!
        </p>
        
        <div className="flex-col mt-8 sm:flex sm:flex-row sm:justify-center sm:space-x-4">
          <button className="px-6 py-3 font-semibold text-white bg-[#00455E] rounded-lg hover:bg-[#00455E]"
            onClick={() => navigate('/payment')}
          >
            Mejorar visibilidad por $0.99
          </button>

          <button className="px-6 py-3 ml-4 font-semibold text-[#00455E]rounded-lg hover:bg-gray-50"
            onClick={() => navigate('/login')}
          >
            Publicar gratis
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerSubscription;
