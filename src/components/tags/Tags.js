import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";
import { reset } from "../../features/filter/filterSlice";
import { pageSelected } from "../../features/pagination/paginationSlice";

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const handleResetBtn = () => {
        dispatch(reset());
        dispatch(pageSelected(1));
    }

    return (
        <div className="flex justify-center">
            {tags?.length > 0 ? (
                <section>
                    <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                        {tags.map((tag) => (
                            <Tag key={tag.id} title={tag.title} />
                        ))}
                    </div>
                </section>
            ) : null}
            <div className="mx-16">
                <button onClick={handleResetBtn} className="my-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Reset Filter
                </button>
            </div>
        </div>
    );
}
