"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

export default function Order({
  ListMenu,
  ListOrder,
  SetListOrder,
}: {
  ListMenu: any;
  ListOrder: any;
  SetListOrder: any;
}) {
  const [selectMeja, setSelectMeja] = useState("");
  const [requiredMeja, setRequiredMeja] = useState("");
  const [requiredSelMenu, setRequiredSelMenu] = useState("");
  const [menu, setMenu] = useState("");
  const [requiredSelQty, setRequiredSelQty] = useState("");
  const [qty, setQty] = useState("");
  const handleOder = (e: any) => {
    e.preventDefault();

    if (!selectMeja) {
      setRequiredMeja("Pilih salah satu meja");
    } else if (!menu) {
      setRequiredSelMenu("Pilih salah satu menu");
    } else if (!qty) {
      setRequiredSelQty("Pilih jumlah pesanan");
    } else {
      const id = uuidv4();
      const newListOrder = { id, selectMeja, menu, qty };

      SetListOrder([...ListOrder, newListOrder]);

      localStorage.setItem(
        "listOrder",
        JSON.stringify([...ListOrder, newListOrder])
      );

      Swal.fire({
        icon: "success",
        title: "Thank you...",
        text: "Order makanan sedang diproses",
      });
    }
  };

  return (
    <form onSubmit={handleOder}>
      <span className="text-red-500 text-[12px]">{requiredMeja}</span>
      <div className="flex border rounded-[24px]">
        <span
          className={
            selectMeja == "meja1"
              ? "p-5 w-[20rem] bg-black text-white rounded-l-[6px] text-center"
              : "p-5 w-[20rem] bg-white border-r-[0.8px] border-slate-300 rounded-l-[6px] text-center"
          }
          onClick={() => setSelectMeja("meja1")}
        >
          Meja 1
        </span>
        <span
          className={
            selectMeja == "meja2"
              ? "p-5 w-[20rem] bg-black text-white text-center"
              : "p-5 w-[20rem] border-r-[0.8px] border-slate-300 bg-white text-center"
          }
          onClick={() => setSelectMeja("meja2")}
        >
          Meja 2
        </span>
        <span
          className={
            selectMeja == "meja3"
              ? "p-5 w-[20rem] bg-black text-white rounded-r-[6px] text-center"
              : "p-5 w-[20rem] border-r-[0.8px] border-slate-300 bg-white text-center rounded-r-[6px]"
          }
          onClick={() => setSelectMeja("meja3")}
        >
          Meja 3
        </span>
      </div>

      <div className="flex gap-2 mt-2">
        <div className="flex flex-col gap-1 outline-none">
          <span>
            Menu{" "}
            <span className="text-red-500 text-[12px]">{requiredSelMenu}</span>
          </span>
          <select
            className="p-3 w-[39rem] border border-r-[16px] bg-white border-r-white rounded-[10px]"
            onChange={(e) => setMenu(e.target.value)}
          >
            <option value="">Pilih menu</option>
            {ListMenu.map((menu: any) => (
              <option value={menu.id} key={menu.id}>
                {menu.menuMakanan}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 items-end outline-none">
          <div className="flex flex-col gap-1">
            <span>
              Jumlah{" "}
              <span className="text-red-500 text-[12px]">{requiredSelQty}</span>
            </span>
            <select
              className="p-3 w-[15rem] border border-r-[16px] bg-white border-r-white rounded-[10px]"
              onChange={(e) => setQty(e.target.value)}
            >
              <option value="">Kuantitas</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button className="bg-slate-600 p-2 w-[9rem] text-white rounded-[4px]">
            Tambah
          </button>
        </div>
      </div>
    </form>
  );
}
