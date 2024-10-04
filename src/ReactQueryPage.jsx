import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { usePostQuery } from './hooks/usePosts';

// 리액트 쿼리를 사용하면 데이터를 수정했을 때 우선 저장되어있던 캐시 데이터를 불러오고
// 데이터 fetch를 끝내고 새로운 데이터를 화면에 보여주면서 캐시도 업데이트 한다.
// 캐시 타임 조절 가능
const ReactQueryPage = () => {
   // const fetchPost = queryData => {
   //    const id = queryData.queryKey[1];
   //    return axios.get(`http://localhost:3004/posts/${id}`);
   // };
   // const { isLoading, data, isError, error, refetch } = useQuery({
   //    // 객체 타입의 매개변수를 가져옴
   //    queryKey: ['posts', 1],
   //    queryFn: fetchPost,
   //    retry: 1,
   //    // fresh인 상태에서는 캐시에서 데이터를 가져온다. api를 호출하지 않음.
   //    // fresh에서 stale로 넘어가는데 걸리는 시간
   //    // staleTime은 자주 호출할 필요가 없는 api만 설정을 하는게 좋다.
   //    // staleTime: 5000,

   //    // garbage collect time(micro second 단위, 캐시 타임 조절, 기본값은 5분)
   //    // staleTime 보다 gcTime이 더 짧으면(그 시간 동안 cache가 없다는 의미) stale이 아무리 길어도 cache가 없으면 다시 api 호출을 한다.
   //    // staleTime < gcTime
   //    // gcTime: 5000,
   //    select: data => {
   //       return data.data;
   //    },
   //    // enabled를 설정하면 맨 처음에 api호출을 하지 않고 버튼이 클릭 되었을 때만 api를 호출함
   //    // true, false 말고도 keyword를 가져와서 사용해도 된다.
   //    // enabled: false,
   // });

   const { data, isLoading, isError, error, refetch } = usePostQuery();
   console.log(data, isLoading);
   console.log('error', isError, error);

   if (isLoading) {
      return <h1>Loading...</h1>;
   }
   if (isError) {
      return <h1>{error.message}</h1>;
   }
   return (
      <div>
         {data?.map(item => (
            <div>{item.title}</div>
         ))}
         <button onClick={refetch}>Post 리스트 다시 불러오기</button>
      </div>
   );
};

export default ReactQueryPage;
