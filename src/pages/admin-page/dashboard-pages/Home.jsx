import { BiMoneyWithdraw } from "react-icons/bi";

import CardStatistic from "../../../components/dashboard-components/CardStatistic";
import Table from "../../../components/dashboard-components/Table";

const Home = () => {
  const tableColumns = [
    { col: "ID" },
    { col: "KATEGORI" },
    { col: "KELAS PREMIUM" },
    { col: "STATUS" },
    { col: "METODE PEMBAYARAN" },
    { col: "TANGGAL BAYAR" },
  ];

  return (
    <>
      <CardStatistic />
      <div className="mt-16 md:mt-12 xl:mt-24 max-md:ml-8">
        <div className="flex flex-row items-centers space-x-2">
          <p className="font-bold md:text-2xl text-xl ">Status pembayaran</p>
          <BiMoneyWithdraw className="text-4xl text-green-500" />
        </div>
        <Table colom={tableColumns} />
      </div>
    </>
  );
};

export default Home;
