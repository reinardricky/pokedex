import { getFavoriteListApi } from "@/api/favoriteApi";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useFavorite = (): UseQueryResult<
  { name: string; id: string }[]
> => {
  return useQuery<{ name: string; id: string }[]>({
    queryKey: ["pokemon favorite"],
    queryFn: () => getFavoriteListApi(),
  });
};
