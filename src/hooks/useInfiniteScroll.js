import { useDispatch } from "react-redux";
import { useCallback, useRef } from "react";
import { getNextPage, setUnmount } from "redux/transactions/transactionsSlice";

export const useInfiniteScroll = () => {
    const dispatch = useDispatch();
    const observer = useRef();
  
    const lastElement = useCallback(item => {
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          dispatch(setUnmount(false));
  
          // console.log('ОЧИСТИЛИ НАБЛЮДЕНИЕ :', entries[0].target,);
  
          // observer.current.unobserve(entries[0].target);
          observer.current.unobserve(item);
          dispatch(getNextPage());
        }
      }, { rootMargin: '5px',threshold: 0.95});
  
        if (item)  {
          // console.log('НАБЛЮДЕНИЕ ВЕДЕТСЯ ЗА :', item);
          observer.current.observe(item);
        }
      },[dispatch]);
  
    return lastElement
}