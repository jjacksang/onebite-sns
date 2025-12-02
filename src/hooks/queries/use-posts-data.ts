import { fetchPosts } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";

export function usePostsData() {
  return useQuery({
    queryKey: QUERY_KEYS.post.list,
    queryFn: () => fetchPosts(),
  });
}
