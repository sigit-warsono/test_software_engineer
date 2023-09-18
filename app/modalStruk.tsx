import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NumericFormat } from "react-number-format";

export default function ModalStruk({
  setModal,
  nomorMeja,
  resultStruk,
}: {
  setModal: any;
  nomorMeja: any;
  resultStruk: any;
}) {
  let subTotal = 0;
  return (
    <div className="flex justify-center items-center absolute w-full h-[100vh] bg-black-rgba">
      <div className="w-[30rem] h-[30rem] bg-slate-400 rounded-[10px] flex flex-col p-3">
        <div className="flex justify-end">
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-white text-[1.3rem] font-semibold">
            Struk Pesanan
          </span>
          <span className="text-white text-[0.9rem] font-semibold">
            Meja {nomorMeja == "meja1" ? 1 : nomorMeja == "meja2" ? 2 : 3}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-between w-full px-3 mt-3">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className="p-2 text-white">Menu</th>
                  <th className="p-2 text-white">Harga</th>
                  <th className="p-2 text-white">Porsi</th>
                  <th className="p-2 text-white">Total</th>
                </tr>
                {resultStruk.map((data: any) => {
                  var price = data.price.replace(/\D/g, "");
                  var total = parseInt(price) * parseInt(data.qty);
                  subTotal += total;
                  return (
                    <tr key={data.id}>
                      <td className="p-2 text-center text-[12px] text-white">
                        {data.menuMakanan}
                      </td>
                      <td className="p-2 text-center text-[12px] text-white">
                        {data.price}
                      </td>
                      <td className="p-2 text-center text-[12px] text-white">
                        {data.qty}
                      </td>
                      <td className="p-2 text-center text-[12px] text-white">
                        <NumericFormat
                          thousandSeparator={"."}
                          displayType={"text"}
                          decimalSeparator={","}
                          prefix={"Rp."}
                          value={total}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td
                    className="p-2 text-center font-semibold text-white"
                    colSpan={3}
                  >
                    Subtotal
                  </td>
                  <td className="p-2 text-center text-[12px] font-semibold text-white">
                    {" "}
                    <NumericFormat
                      thousandSeparator={"."}
                      displayType={"text"}
                      decimalSeparator={","}
                      prefix={"Rp."}
                      value={subTotal}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
