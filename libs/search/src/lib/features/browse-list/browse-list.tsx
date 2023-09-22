import { useSpotify } from "@spotify-clone/shared";
import { useEffect } from "react";
import { useCategory } from "../../data-access/categories.store";
import { search, searchList } from "../../search.css";
import { SearchCard } from "../../ui/search-card";

export function BrowseList() {
    const { sdk } = useSpotify();
    const { data: categories, fetchData: fetchCategories } = useCategory();

    useEffect(() => {
        fetchCategories(sdk);
    }, [sdk]);
    
    return (
        <div className={`${search}`}>
          <h1>Browse All</h1>
          <div className={`${searchList}`}>
            {categories.map((item, index) => {
              return <SearchCard key={index} name={item.name} imgSrc={item.icons[0].url} />;
            })}
          </div>
        </div>
      );
}