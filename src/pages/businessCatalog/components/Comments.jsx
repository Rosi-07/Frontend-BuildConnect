const Comments = ({ user, comments, companyId }) => {
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric' /* , hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true */,
    };
    return new Intl.DateTimeFormat('es-ES', options).format(
      new Date(dateString)
    );
  };

  return (
    <div
      className='p-4 mb-4 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-inner'
      data-testid='comments'
    >
      <div className='p-4 overflow-y-auto'>
        <div className='grid grid-cols-1 gap-4 bg-400 md:grid-cols-2'>
          {comments.map((comment, index) => (
            <div key={index} className='bg-white rounded-lg'>
              <div className='flex p-4'>
                <div>
                  <h4 className='text-lg font-semibold md:text-xl'>
                    {comment.Owner.name}
                  </h4>
                  <p className='text-gray-500 md:text-lg md:mt-2'>
                    {comment.text}
                  </p>
                </div>
              </div>
              <div className='p-4'>
                <p className='text-gray-500'>{formatDate(comment.updatedAt)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
