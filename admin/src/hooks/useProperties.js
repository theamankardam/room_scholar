import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getAllProperties,
  getPropertiesByStatus,
  updateProperty,
  deleteProperty,
} from "../services/properties.api";

import toast from "react-hot-toast";

export function useProperties(filter = "") {
  const queryClient = useQueryClient();

  // ALL PROPERTIES
  const {
    data: allProperties = [],
    isLoading,
  } = useQuery({
    queryKey: ["all-properties"],
    queryFn: getAllProperties,
  });

  // FILTERED PROPERTIES
  const { data: filteredData } = useQuery({
    queryKey: ["properties", filter],

    queryFn: () =>
      filter
        ? getPropertiesByStatus(filter)
        : getAllProperties(),
  });

  const properties = filter
    ? filteredData?.properties ?? []
    : filteredData ?? [];

  // UPDATE
  const { mutate: updateAProperty } = useMutation({
    mutationFn: ({ id, data }) =>
      updateProperty(id, data),

    onSuccess: () => {
      toast.success("Property updated");

      queryClient.invalidateQueries({
        queryKey: ["properties"],
      });

      queryClient.invalidateQueries({
        queryKey: ["all-properties"],
      });
    },

    onError: () => {
      toast.error("Failed to update property");
    },
  });

  // DELETE
  const { mutate: deleteAProperty } = useMutation({
    mutationFn: deleteProperty,

    onSuccess: () => {
      toast.success("Property deleted");

      queryClient.invalidateQueries({
        queryKey: ["properties"],
      });

      queryClient.invalidateQueries({
        queryKey: ["all-properties"],
      });
    },

    onError: () => {
      toast.error("Failed to delete property");
    },
  });

  return {
    properties,
    allProperties,
    isLoading,

    updateAProperty,
    deleteAProperty,
  };
}