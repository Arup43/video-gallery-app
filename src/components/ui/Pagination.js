import { useDispatch, useSelector } from "react-redux";
import { pageSelected } from "../../features/pagination/paginationSlice";

export default function Pagination() {
    const dispatch = useDispatch();
    const { selectedPage } = useSelector((state) => state.pagination);
    const { totalVideos } = useSelector((state) => state.videos);

    const pagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalVideos / 8); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    const handlePageClick = (e) => {
        dispatch(pageSelected(parseInt(e.target.id)));
    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {pagination().map((number) => (selectedPage === number) ? (
                    <div style={{cursor: 'pointer'}} key={number} onClick={handlePageClick} id={number} className="bg-blue-700 text-white px-4 py-1 rounded-full">
                    {number}
                </div>
                ): (
                    <div style={{cursor: 'pointer'}} key={number} onClick={handlePageClick} id={number} className="bg-blue-300 text-white px-4 py-1 rounded-full">
                        {number}
                    </div>
                ))}
            </div>
        </section>
    );
}
