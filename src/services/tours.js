import { useQuery } from '@tanstack/react-query';

function useGetTours() {
  const tourUrl = import.meta.env.VITE_TOUR_SERVICE;
  const { data, error, isLoading } = useQuery({
    queryKey: ['tours'],
    queryFn: async () => {
      const response = await fetch(`${tourUrl}/tours`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    },
  });

  return { data, error, isLoading };
}

export default useGetTours;
