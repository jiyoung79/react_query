import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 커스텀 훅 만들기
const fetchPost = () => {
   //    const id = queryData.queryKey[1];
   return axios.get(`http://localhost:3004/posts`);
};

export const usePostQuery = () => {
   return useQuery({
      queryKey: ['posts'],
      queryFn: () => fetchPost(),
      retry: 1,
      select: data => {
         return data.data;
      },
   });
};
