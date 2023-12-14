/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import SearchInput from "./SearchInput";
import AOS from "aos";
import "aos/dist/aos.css";

import TableFilter from "./TableFilter";

const Table = ({ colom, dataTable, button, setOpenModal, filter }) => {
  const [searchInput, setSearchInput] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const searchInputShow = () => {
    setSearchInput(true);
    AOS.init({
      once: true,
      duration: 300,
    });
    if (searchInput) {
      setSearchInput(false);
    }
  };

  const searchInputHide = () => {
    if (searchInput) {
      setSearchInput(false);
      AOS.init({
        once: true,
        duration: 300,
      });
    }
  };

  console.log(dataTable);
  return (
    <div className="relative overflow-x-auto">
      <div className="flex flex-col justify-end space-y-5 max-md:w-96 lg:flex-row lg:items-center">
        <div className="flex flex-row items-center space-x-3">
          <div className="p-1">
            <TableFilter
              hideSearchInput={searchInputHide}
              filter={filter}
              setFilter={(e) => setSelectedFilter(e.target.value)}
            />
          </div>
          {searchInput ? (
            <div data-aos="fade-right">
              <SearchInput setSearch={(e) => setSearch(e.target.value)} />
            </div>
          ) : (
            <button
              className="p-1 text-[#6148FF] text-2xl"
              onClick={searchInputShow}
            >
              <IoSearchSharp />
            </button>
          )}
        </div>
      </div>
      <div className="overflow-y-auto">
        <table className="w-full mt-3 text-sm text-left text-gray-500 rtl:text-right table-auto  ">
          <thead className="text-xs text-gray-700 uppercase bg-[#EBF3FC]">
            <tr>
              {colom.map((data, i) => (
                <th key={i} scope="col" className="px-6 py-3">
                  {data.col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTable
              .filter((data) => {
                return (
                  (selectedFilter === "" ||
                    Object.values(data).includes(selectedFilter)) &&
                  (search.toLowerCase() === "" ||
                    Object.values(data).some(
                      (value) =>
                        value && value.toString().toLowerCase().includes(search)
                    ))
                );
              })
              .map((data, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.courseCode ?? "-"}
                  </th>
                  <td className="px-6 py-4">{data.Category ?? "-"}</td>
                  <td className="px-6 py-4">{data.courseName ?? "-"}</td>
                  <td className="px-6 py-4">{data.courseType ?? "-"}</td>
                  <td className="px-6 py-4">{data.courseLevel ?? "-"}</td>
                  <td className="px-6 py-4">{data.coursePrice ?? "-"}</td>
                  {button && (
                    <td className="px-6 py-4 space-x-3">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-[#6148FF] hover:bg-[#6856db] focus:ring-4 focus:ring-[rgb(188,181,235)] font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Ubah
                      </button>

                      <button
                        onClick={setOpenModal}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Hapus
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
