import CompanyDetail from './CompanyDetail';
import Rating from './Rating';
import Comments from './Comments';
import useAuthStore from '../../../hooks/auth/useAuth';
import useAxiosPrivate from '../../../hooks/auth/useAxiosPrivate';

const Company = ({ company }) => {
  const auth = useAuthStore((state) => state.auth);
  const api = useAxiosPrivate();

  return (
    <div
      className='container flex flex-col h-full px-5 mx-auto mt-8'
      data-testid='company'
    >
      <div className='flex flex-col bg-gray-100 md:flex-row'>
        <CompanyDetail company={company} />
      </div>

      <div className='p-6 mt-5 bg-white border border-gray-300 rounded-md shadow-lg'>
        <div className='p-4 mb-4'>
          <span className='text-lg font-bold tracking-wide text-gray-800 md:text-xl lg:text-2xl'>
            Calificaciones y Comentarios
          </span>
          <div className='flex items-center justify-between mt-4'>
            <Rating companyId={company?.id} userId={auth?.user?.id} />
          </div>{' '}
          <div className='mb-10'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                api.post('comments', {
                  text: e.target[0].value,
                  companyId: company.id,
                  userId: auth.user.id,
                });

                e.target[0].value = '';
              }}
            >
              <span
                className='block mb-2 text-sm font-semibold text-gray-800'
                data-testid='add-comment'
              >
                Agrege un comentario
              </span>
              <textarea
                className='w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring focus:ring-blue-900'
                data-testid='comment-text'
              />
              <button
                className='px-4 py-2 mt-4 text-sm text-white bg-blue-900 rounded hover:bg-blue-800'
                data-testid='add-comment-button'
              >
                Agregar
              </button>
            </form>
          </div>{' '}
          <span className='text-lg font-semibold text-gray-800'>
            Comentarios
          </span>
          <Comments
            user={auth.user}
            comments={company.Company.Comments}
            companyId={company.id}
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
