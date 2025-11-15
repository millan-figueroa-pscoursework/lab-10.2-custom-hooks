import { usePagination } from "./hooks/usePagination";

function App() {
  // assuming we got 105 pages total
  const totalItems = 105;

  // call custom hook
  const { currentPage, totalPages, canNextPage, canPrevPage, setPage } =
    usePagination(
      totalItems,
      10, // items per page
      1 // page to start on
    );

  return (
    <div>
      <h1>Pagination Demo</h1>

      <p>Current Page: {currentPage}</p>
      <p>Total Pages: {totalPages}</p>

      <p>Can go to next page: {canNextPage ? "yes" : "no"}</p>
      <p>Can go to previous page: {canPrevPage ? "yes" : "no"}</p>
      <button onClick={() => setPage(2)}>Go to page 2</button>
    </div>
  );
}

export default App;
