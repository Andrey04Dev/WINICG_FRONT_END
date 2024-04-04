import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel, //Sirve para ordernar las
  getPaginationRowModel,
} from "@tanstack/react-table";
import React, { Fragment, useMemo, useState } from "react";

const TableExample = ({ data, column }) => {
  if (data === null) {
    data = [];
  } else {
    // eslint-disable-next-line no-self-assign
    data = data;
  }
  const finalData = useMemo(() => data, [data]);
  const finalColumnDef = useMemo(() => column, [column]);

  const [filtering, setFiltering] = React.useState("");
  const [sorting, setSorting] = useState([]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: filtering,
      sorting,
    },
    onGlobalFilterChanged: setFiltering,
    onSortingChange: setSorting,
  });

  //   console.log("test", tableInstance.getHeaderGroups());

  return (
    <div className="my-5">
      <div className="form-floating mb-3">
        <input
          id="search"
          name="search"
          className="form-control"
          placeholder="HOla mundo"
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
        <label className="mt-3" htmlFor="search">Searching....</label>
      </div>
      <table className=" text-center table table-hover table-bordered table-responsive-sm table-responsive-md table-responsive">
        <thead className="table-dark">
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th
                      key={columnEl.id}
                      colSpan={columnEl.colSpan}
                      onClick={columnEl.column.getToggleSortingHandler()} //Funcion para ordernar cuando se da click en eheader de la tabla
                    >
                      {columnEl.isPlaceholder //isPlaceholder funciona para que no se repitan los header y se quiten los nombres
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                      {/* COde for UP and DOWN SORTING */}
                      {
                        { asc: "-UP", desc: "-DOWN" }[
                          columnEl.column.getIsSorted() ?? null
                        ]
                      }
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td
                      className={
                        cellEl.column.id === "action" ? "d-flex my-auto" : ""
                      }
                      key={cellEl.id}
                    >
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <div>
        <button className="btn btn-outline-danger mx-2"
          onClick={() => tableInstance.setPageIndex(0)}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button className="btn btn-outline-danger mx-2"
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button className="btn btn-outline-danger mx-2"
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          Next Page
        </button>
        <button className="btn btn-outline-danger mx-2"
          onClick={() =>
            tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
          }
          disabled={!tableInstance.getCanNextPage()}
        >
          {">>"}
        </button>
        </div>
        <select
        className="form-select w-25 position-absolute end-0 "
        value={tableInstance.options.state.pagination.pageSize}
        onChange={(e) => tableInstance.setPageSize(e.target.value)}
      >
        {[10, 25, 50].map((pageSizeEl) => {
          return (
            <option key={pageSizeEl} value={pageSizeEl}>
              {pageSizeEl}
            </option>
          );
        })}
      </select>
      </div>
    </div>
  );
};

export default TableExample;
