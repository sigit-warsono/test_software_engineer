"use client";

import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { v4 as uuidv4 } from "uuid";
import { NumericFormat } from "react-number-format";



export default function Menu({ListMenu, SetListMenu}:{ ListMenu: any; SetListMenu: any }) {
  const [menuMakanan, setMenuMakanan] = useState("");
  const [price, setPrice] = useState("");


  const handlePost = () => {
    const id = uuidv4();
    const newListMenu = { id, menuMakanan, price };

    SetListMenu([...ListMenu, newListMenu]);

    localStorage.setItem(
      "listMenu",
      JSON.stringify([...ListMenu, newListMenu])
    );
  };

  const handleDelete = (id: string) => {
    const deleteMenu = ListMenu.filter((menu:any) => menu.id !== id);

    SetListMenu(deleteMenu);

    localStorage.setItem("listMenu", JSON.stringify(deleteMenu));
  };
  return (
    <div>
      <span>Menu Makanan</span>
      <form className="flex gap-3 mt-4" onSubmit={handlePost}>
        <div className="flex justify-start flex-col">
          <input
            type="text"
            className="p-2 rounded-[4px] outline-none w-[20rem]"
            placeholder="Menu..."
            value={menuMakanan}
            onChange={(e) => setMenuMakanan(e.target.value)}
          />
        </div>
        <div className="flex justify-start flex-col">
          <NumericFormat
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={'Rp.'}
            className="p-2 rounded-[4px] outline-none w-[16rem]"
            placeholder="Harga..."
            value={price == null ? "" : price}
            onChange={(e: any) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex justify-start flex-col">
          <button className="p-2 bg-slate-600 text-white w-[9rem] rounded-[4px]">
            Tambah
          </button>
        </div>
      </form>
      <div>
        <table className="w-full mt-5">
          <tbody>
            <tr>
              <th className="p-2 border-b border-black">ID</th>
              <th className="p-2 border-b border-black">Menu</th>
              <th className="p-2 border-b border-black">Harga</th>
              <th className="p-2 border-b border-black">Hapus ?</th>
            </tr>
            {ListMenu.map((menu:any) => (
              <tr key={menu.id}>
                <td className="p-2 border-b border-black text-center">
                  {menu.id.substr(1, 6).toUpperCase()}
                </td>
                <td className="p-2 border-b border-black text-center">
                  {menu.menuMakanan}
                </td>
                <td className="p-2 border-b border-black text-center">
                  {menu.price}
                </td>
                <td className="p-2 border-b border-black text-center">
                  <div className="flex w-full justify-center">
                    <GoTrash
                      className="text-red-300 cursor-pointer text-[1.4rem]"
                      onClick={() => handleDelete(menu.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
