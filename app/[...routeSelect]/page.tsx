"use client";

import { BiRefresh } from "react-icons/bi";
import Menu from "../menu";
import Order from "../order";
import Dapur from "../dapur";
import Kasir from "../kasir";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ModalStruk from "../modalStruk";

type MenuMakanan = {
  id: string;
  menuMakanan: string;
  price: string;
};

type Orders = {
  id: string;
  selectMeja: string;
  menu: string;
  qty: string;
};

export default function RouteSelect({
  params,
}: {
  params: { routeSelect: string };
}) {
  const [listMenu, setListMenu] = useState<MenuMakanan[]>([]);
  const [listOrder, setListOrder] = useState<Orders[]>([]);
  const [listMeja1, setListMeja1] = useState([]);
  const [listMeja2, setListMeja2] = useState([]);
  const [listMeja3, setListMeja3] = useState([]);
  const router = useRouter();

  const [nomorMeja, setNomorMeja] = useState("");
  const [nomorMejaDefault, setNomorMejaDefault] = useState("");
  const [resultStruk, setResultStruk] = useState([]);
  const [requiredNomorMeja, setRequiredNomorMeja] = useState("");
  const [modal, setModal] = useState(false);


  useEffect(() => {
    const getListMenu = JSON.parse(localStorage.getItem("listMenu")!);
    const getListOrder = JSON.parse(localStorage.getItem("listOrder")!);

    if (getListMenu == null) {
      setListMenu([]);
    } else {
      setListMenu(getListMenu);
    }

    if (getListOrder == null) {
      setListOrder([]);
      setListMeja1([]);
      setListMeja2([]);
      setListMeja3([]);
    } else {
      setListOrder(getListOrder);

      //Data retrieve dapur
      var result = getListOrder.map((b: { [x: string]: any; menu: any }) => {
        getListMenu.forEach((c: { [x: string]: any; id: any }) => {
          if (c.id === b.menu)
            for (const key in c) {
              key !== "id" ? (b[key] = c[key]) : null;
            }
        });
        return b;
      });

      var resultSearchMeja1 = result.filter((data: any) => {
        return data.selectMeja === "meja1";
      });

      setListMeja1(resultSearchMeja1);

      var resultSearchMeja2 = result.filter((data: any) => {
        return data.selectMeja === "meja2";
      });

      setListMeja2(resultSearchMeja2);

      var resultSearchMeja3 = result.filter((data: any) => {
        return data.selectMeja === "meja3";
      });

      setListMeja3(resultSearchMeja3);

      var resultKasir1 = result.filter((data: any) => {
        return data.selectMeja === nomorMejaDefault;
      });
      setResultStruk(resultKasir1);
    }
  }, [nomorMejaDefault]);

  const handlestruk = (e: any) => {
    e.preventDefault();
    if (!nomorMeja) {
      setRequiredNomorMeja("Pilih nomor meja");
    } else {
      setModal(true);
      setNomorMejaDefault(nomorMeja);
    }
  };

  const handleReset=(e:any)=>{
    e.preventDefault();

    localStorage.removeItem("listMenu");
    localStorage.removeItem("listOrder");

    const getListMenu = JSON.parse(localStorage.getItem("listMenu")!);
  if (getListMenu== null) {
    localStorage.setItem(
      "listMenu",
      JSON.stringify([{"id":"ad8dfbf7-46ea-4d54-b672-fb81e14339d0","menuMakanan":"Ayam Kecap Manis","price":"Rp.31.000"},{"id":"0d4080a9-d630-47b4-97cc-090b7fa51c9d","menuMakanan":"Nasi Goreng Spesial","price":"Rp.30.000"}])
    );
    router.push('/menu')
  }
  }

  return (
    <>
      {modal && (
        <ModalStruk
          setModal={setModal}
          nomorMeja={nomorMeja}
          resultStruk={resultStruk}
        />
      )}
      <div className="p-5 flex justify-center w-full overflow-x-hidden overflow-y-hidden">
        <div className="p-1 w-[80%] h-auto">
          <div className="flex justify-between">
            <div className="flex gap-2 bg-slate-300 p-1 rounded-[5px]">
              <span
                className={
                  params.routeSelect[0] == "menu"
                    ? "p-1 w-[6rem] text-center bg-slate-50 rounded-[4px] cursor-pointer"
                    : "p-1 w-[6rem] text-center hover:bg-slate-50 hover:rounded-[4px] cursor-pointer"
                }
                onClick={() => router.push("/menu")}
              >
                Menu
              </span>
              <span
                className={
                  params.routeSelect[0] == "order"
                    ? "p-1 w-[6rem] text-center bg-slate-50 rounded-[4px] cursor-pointer"
                    : "p-1 w-[6rem] text-center hover:bg-slate-50 hover:rounded-[4px] cursor-pointer"
                }
                onClick={() => router.push("/order")}
              >
                Order
              </span>
              <span
                className={
                  params.routeSelect[0] == "dapur"
                    ? "p-1 w-[6rem] text-center bg-slate-50 rounded-[4px] cursor-pointer"
                    : "p-1 w-[6rem] text-center hover:bg-slate-50 hover:rounded-[4px] cursor-pointer"
                }
                onClick={() => router.push("/dapur")}
              >
                Dapur
              </span>
              <span
                className={
                  params.routeSelect[0] == "kasir"
                    ? "p-1 w-[6rem] text-center bg-slate-50 rounded-[4px] cursor-pointer"
                    : "p-1 w-[6rem] text-center hover:bg-slate-50 hover:rounded-[4px] cursor-pointer"
                }
                onClick={() => router.push("/kasir")}
              >
                Kasir
              </span>
            </div>
            <div className="flex gap-1 justify-center items-center bg-slate-200 p-2 w-[8rem] rounded-[5px] cursor-pointer" onClick={handleReset}>
              <BiRefresh className="text-[1.4rem]" />
              <span className="text-[1rem]">Reset</span>
            </div>
          </div>
          <div className="p-3 flex bg-slate-200 w-[100%] h-auto pb-20 mt-2 rounded-[2px]">
            {params.routeSelect[0] == "menu" ? (
              <Menu ListMenu={listMenu} SetListMenu={setListMenu} />
            ) : params.routeSelect[0] == "order" ? (
              <Order
                ListMenu={listMenu}
                ListOrder={listOrder}
                SetListOrder={setListOrder}
              />
            ) : params.routeSelect[0] == "dapur" ? (
              <Dapur
                ListMeja1={listMeja1}
                ListMeja2={listMeja2}
                ListMeja3={listMeja3}
              />
            ) : (
              <Kasir
                handlestruk={handlestruk}
                setNomorMeja={setNomorMeja}
                requiredNomorMeja={requiredNomorMeja}
                listOrder={listOrder}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
