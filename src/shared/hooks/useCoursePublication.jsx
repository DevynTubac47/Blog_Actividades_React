import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getPublicationByCourse as getPublicationByCourseRequest } from "../../services";

export const usePublicationsByCourse = () => {
  const [publications, setPublications] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getPublicationsByCourse = useCallback(async (course) => {
    setIsFetching(true);

    const response = await getPublicationByCourseRequest(course);

    if (response.error) {
      toast.error(response.message || "Error al obtener publicaciones por curso");
      setIsFetching(false);
      return;
    }

    setPublications(response.data.publications);
    setIsFetching(false);
  }, []);

  return {
    getPublicationsByCourse,
    publications,
    isFetching,
  };
};
