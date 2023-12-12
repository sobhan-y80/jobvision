import { useQuery } from "@tanstack/react-query";
import supabaseFetch from "../Services/supabaseFetch";
import useAdsFilterType from "./useAdsFilterType";
import { getItem } from "../Utils/Utils";
import { Type_category_merged_array, Type_category_filter } from "../Components/JobsFilter/JobsFilter.type";
const useAdsFilterCategories = () => {
    const { data: categoryTypes } = useQuery({
        queryKey: ["category_filter_type"],
        queryFn: async () =>
            await supabaseFetch.get<Type_category_filter[]>("category_filter_type?select=*").then((res) => res.data),
    });
    const { filterTypes } = useAdsFilterType();
    const categoryMergeArray: Type_category_merged_array[] = Array.isArray(categoryTypes)
        ? categoryTypes.map((category) => ({
              ...category,
              ...{
                  sub: getItem({ main_id: category.category_type, array: filterTypes, key: "category" }),
              },
          }))
        : [];
    return { categoryTypes, categoryMergeArray };
};
export default useAdsFilterCategories;
