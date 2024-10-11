import { useQuery } from '@tanstack/react-query';

function useGetToursById(id) {
  const tourUrl = import.meta.env.VITE_TOUR_SERVICE;
  const { data, error, isLoading } = useQuery({
    queryKey: ['toursByID', id],
    queryFn: async () => {
      const response = await fetch(`${tourUrl}/tours/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    cacheTime: 0,
    staleTime: 0,
  });

  return { data, error, isLoading };
}

export default useGetToursById;
