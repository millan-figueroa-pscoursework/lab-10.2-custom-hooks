import { useState, useMemo } from "react";

export function usePagination(
    totalItems: number,
    itemsPerPage: number = 10,
    initialPage: number = 1
) {
    // keep track of the current page
    const [currentPage, setCurrentPage] = useState<number>(initialPage);

    // function to jump to a specific page
    const setPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // calculate total pages based on total items and items per page
    const totalPages = useMemo(() => {
        if (itemsPerPage <= 0) return 0;
        return Math.ceil(totalItems / itemsPerPage);
    }, [totalItems, itemsPerPage]);


    // booleans to know if we can move forward/backward
    const canNextPage = currentPage < totalPages;
    const canPrevPage = currentPage > 1;

    // move forward one page
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // move backward one page
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    // return all values and helpers
    return {
        currentPage,
        totalPages,
        canNextPage,
        canPrevPage,
        setPage,
        nextPage,
        prevPage
    };
}