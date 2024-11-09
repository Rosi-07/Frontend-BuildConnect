import { useState, useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/auth/useAxiosPrivate';
import { Rating as MRating } from '@mui/material';
import { useSnackbar } from 'notistack';

const Rating = ({ companyId, userId }) => {
  const api = useAxiosPrivate();
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState(0);
  const [ratings, setRatings] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const hasRating = (userId, companyId, ratings) => {
      if (ratings.length > 0) {
        const userRating = ratings.find(
          (rating) => rating.userId === userId && rating.companyId === companyId
        );
        if (userRating) {
          setValue(userRating.score);
        } else {
          setValue(0);
        }
      }
    };

    const fetchRating = async () => {
      try {
        const { data } = await api.get(`owners/${userId}/Rating`);
        setRatings(data);
        hasRating(userId, companyId, data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRating();
  }, [api, companyId, refresh]);

  const handleRatingChange = async (e, newValue) => {
    e.preventDefault();

    const hasRating = (userId, companyId, ratings) => {
      return ratings.some(
        (rating) => rating.userId === userId && rating.companyId === companyId
      );
    };

    if (hasRating(userId, companyId, ratings)) {
      const rating = ratings.find((rating) => rating.userId === userId);
      rating.score = newValue;
      await api.put(`owners/${userId}/Rating`, rating);
      setRefresh(!refresh);
      enqueueSnackbar('Calificación actualizada', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    } else {
      try {
        const rating = {
          score: newValue,
          companyId,
        };
        await api.post(`owners/${userId}/Rating`, rating);
        setRefresh(!refresh);
        enqueueSnackbar('Calificación guardada', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      } catch (error) {
        if (error.response.status === 400) {
          enqueueSnackbar('No tienes permisos para calificar esta compañia', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        }
      }
    }
  };

  return (
    <div className='flex items-center justify-start w-full mb-4'>
      <MRating
        name='propertyRating'
        precision={0.1}
        value={value}
        onChange={handleRatingChange}
        className='mr-2'
      />
      <span className='text-sm font-semibold text-gray-800'>
        {value === 0 ? 'Sin calificar' : value}
      </span>
    </div>
  );
};

export default Rating;
