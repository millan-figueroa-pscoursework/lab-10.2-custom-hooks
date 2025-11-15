# Project Requirements

You will create two custom Hooks in this lab. Each hook should be implemented in its own file (e.g., usePagination.ts or usePagination.js, useDebounce.ts or useDebounce.js).

You should also create an example components directory to demonstrate the usage of your custom hooks.

## usePagination Hook

### Objective:

Create a hook to manage pagination logic for a list of items.

### Functionality:

#### Inputs:

- [x] totalItems: The total number of items to be paginated.
- [x] itemsPerPage: The number of items to display per page (default to 10).
- [x] initialPage: The page to start on (default to 1).

#### Return Values (Object):

- [x] currentPage: The current active page number.
- [x] totalPages: The total number of pages calculated based on totalItems and itemsPerPage.
- [x] startIndex: The starting index of items for the current page (0-based).
- [x] endIndex: The ending index of items for the current page (0-based).
- [x]itemsOnCurrentPage: The actual number of items on the current page (useful for the last page).
- [x] setPage(pageNumber): A function to jump to a specific page number.
- [x] nextPage(): A function to go to the next page.
- [x] prevPage(): A function to go to the previous page.
- [x] canNextPage: Boolean indicating if there is a next page.
- [x] canPrevPage: Boolean indicating if there is a previous page.

### Implementation Details:

- [x] Calculate totalPages correctly (e.g., using Math.ceil).
- [] Ensure currentPage does not go below 1 or above totalPages.
- [x] startIndex and endIndex should be calculated based on the currentPage and itemsPerPage.
- [x] itemsOnCurrentPage should correctly reflect the count for the last page if it’s not full.

### Example Usage Component (PaginationDemo.tsx):

- [x] Create a component that uses your usePagination hook.
- [x] Simulate a list of items (e.g., an array of 100 numbers or strings).
- [x] Display the current page number, total pages, and the slice of items for the current page.
- [x] Include buttons for “Previous”, “Next”, and jumping to specific page numbers (if you wish to demonstrate setPage more thoroughly).
- [x] Disable Previous/Next buttons when canPrevPage or canNextPage is false.

### useDebounce Hook

<b>Objective</b>: Create a hook to debounce a rapidly changing value.

### Functionality:

#### Inputs:

- [] value: The value to debounce (e.g., a search string from an input field).
- [] delay: The debounce delay in milliseconds (default to 500ms).

#### Return Value:

- [] debouncedValue: The value after the debounce delay has passed without value changing.

### Implementation Details:

- [] Use useState to store the debouncedValue.
- [] Use useEffect to set up a timer (setTimeout) whenever the input value or delay changes.
- [] The effect should clear the timer (using clearTimeout) if value or delay changes before the timer fires (this is the core of debouncing).
- [] When the timer finally fires, update the debouncedValue state.

### Example Usage Component (DebounceSearchDemo.tsx):

- [] Create a component with an input field.
- [] As the user types into the input, use the useDebounce hook to get the debounced version of the input’s value.
- [] Display both the current input value and the debounced value.
- [] You can simulate an API call or filtering action whenever the debouncedValue changes by logging to the console (e.g., “Searching for: [debouncedValue]”).

## Implementation Guidelines

- <b>Hook Design</b>: Strive for clarity and reusability in your hook’s API.
- <b>State Management</b>: Use useState appropriately within your hooks.
- <b>Side Effects</b>: Use useEffect for any side effects. Ensure correct dependency arrays and cleanup functions.
- <b>TypeScript</b> (Optional but Recommended): If you are comfortable with TypeScript, try to type your hook inputs and return values for better self-documentation and safety.
