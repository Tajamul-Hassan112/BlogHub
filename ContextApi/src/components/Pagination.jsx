import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

function Pagination() {
  const { handlePageChange, totalPages, page } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center mt-8">
      {page > 1 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
        >
          Previous
        </button>
      )}
      {page < totalPages && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
        >
          Next
        </button>
      )}
      <p className="text-gray-500">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}

export default Pagination;
