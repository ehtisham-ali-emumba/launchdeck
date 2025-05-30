import { useMutation } from "@tanstack/react-query";
import { doLLMProductSearch } from "~/api/services";
import { QUERY_KEYS } from "~/constants/reactQueryKeys";

export const useLLMProductSearch = () => {
  return useMutation({
    mutationFn: (query: string) => doLLMProductSearch(query),
    mutationKey: [QUERY_KEYS.LLM_PRODUCT_SEARCH],
  });
};
