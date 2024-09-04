import React, { useState } from "react";

interface IProps {
  data?: any[];
  columns: {
    header: string;
    accessor: string;
  }[];
  itemsPerPage?: number;
}

const Table: React.FC<IProps> = ({ data = [], columns, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickNext = () => {
    setCurrentPage((old) => Math.min(old + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((old) => Math.max(old - 1, 1));
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getNestedProperty = (obj: any, accessor: string) => {
    return accessor.split(".").reduce((o, i) => o[i], obj);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              {columns.map((column, i) => (
                <td key={column.accessor + i}>
                  {getNestedProperty(item, column.accessor)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {`${(currentPage - 1) * itemsPerPage + 1}-${
            currentPage * itemsPerPage
          } of ${data.length}`}
        </div>
        <div>
          <button onClick={handleClickPrev} disabled={currentPage === 1}>
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => handleClickPage(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
