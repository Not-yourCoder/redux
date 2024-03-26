import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchTodoFailure,
  fetchTodoSuccess,
} from "../features/todoFeatures/todoSlice";

interface FetchResult {
  loading: boolean;
  error: Error | null;
}

const useFetchTodo = (): FetchResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed To fetch Data");
        }
        const data = await response.json();
        dispatch(fetchTodoSuccess(data.slice(0, 5)));
        setLoading(false);
      } catch (error) {
        setError(error);
        dispatch(fetchTodoFailure(error.message));
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error };
};

export default useFetchTodo;
