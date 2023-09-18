import React from "react";

export default function Dapur({
  ListMeja1,
  ListMeja2,
  ListMeja3,
}: {
  ListMeja1: any;
  ListMeja2: any;
  ListMeja3: any;
}) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-between w-[70%]">
        <div className="flex flex-col">
          <span className="text-[1.2rem] font-semibold p-2 text-center">
            Meja 1
          </span>
          <div className="flex flex-col">
            {ListMeja1.length > 0 ? (
              ListMeja1.map((data: any) => (
                <span
                  className="p-2 border-b-[1px] border-blue-300 text-[15px]"
                  key={data.id}
                >
                  {data.menuMakanan}, {data.qty} Porsi                  
                </span>
              ))
            ) : (
              <span className="p-2 border-b-[1px] text-[9px]">
                Tidak ada pesanan
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[1.2rem] font-semibold p-2 text-center">
            Meja 2
          </span>
          <div className="flex flex-col">
            {ListMeja2.length > 0 ? (
              ListMeja2.map((data: any) => (
                <span
                  className="p-2 border-b-[1px] border-blue-300 text-[15px]"
                  key={data.id}
                >
                  {data.menuMakanan}, {data.qty} Porsi
                </span>
              ))
            ) : (
              <span className="p-2 border-b-[1px] text-[9px]">
                Tidak ada pesanan
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[1.2rem] font-semibold p-2 text-center">
            Meja 3
          </span>
          <div className="flex flex-col">
            {ListMeja3.length > 0 ? (
              ListMeja3.map((data: any) => (
                <span
                  className="p-2 border-b-[1px] border-blue-300 text-[15px]"
                  key={data.id}
                >
                  {data.menuMakanan}, {data.qty} Porsi
                </span>
              ))
            ) : (
              <span className="p-2 border-b-[1px] text-[9px]">
                Tidak ada pesanan
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
