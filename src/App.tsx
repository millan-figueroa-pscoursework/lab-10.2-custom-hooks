import { usePagination } from "./hooks/usePagination";

function App() {
  // assuming we got 105 pages total
  const totalItems = 105;

  // call custom hook
  const {
    currentPage,
    totalPages,
    canNextPage,
    canPrevPage,
    setPage,
    nextPage,
    prevPage,
  } = usePagination(
    totalItems,
    10, // items per page
    1 // page to start on
  );

  // create fake items
  const items = [];
  for (let i = 0; i < totalItems; i++) {
    items.push("Item " + (i + 1));
  }

  // figure out which items to show on this page
  const startIndex = (currentPage - 1) * 10;
  const endIndex = Math.min(startIndex + 9, totalItems - 1);
  // creates a new array containing only the items for the curren
  const visibleItems = items.slice(startIndex, endIndex + 1);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="p-6 max-w-2xl mx-auto text-gray-200 bg-black rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-6">
        Pagination Demo
      </h2>

      <div className="flex justify-between mb-4">
        <span>Items per page: 10</span>
        <span>Total Items: {totalItems}</span>
      </div>

      <ul className="space-y-1 mb-6">
        {visibleItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <button
          onClick={prevPage}
          disabled={!canPrevPage}
          className="px-3 py-1 disabled:text-gray-500"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="px-3 py-1 disabled:text-gray-500"
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-center">
        {/* shows which items are being shown and on current page */}
        Showing items {startIndex + 1} - {endIndex + 1} (Total on this page:{" "}
        {visibleItems.length})
      </p>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {/* renders row of numbered buttons when clicked changes current page */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-3 py-2 rounded border ${
              page === currentPage
                ? "bg-orange-600 border-orange-700"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
