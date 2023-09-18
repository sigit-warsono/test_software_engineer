import React, { useState } from 'react'

export default function Kasir({handlestruk, setNomorMeja, requiredNomorMeja, listOrder}: {handlestruk: any; setNomorMeja: any; requiredNomorMeja: any, listOrder:any}) {

  const result = listOrder.filter(
    (thing: { selectMeja: any; }, index: any, self: any[]) =>
      index === self.findIndex((t) => t.selectMeja === thing.selectMeja)
  );
 

  return (
    <div className='w-full'>
     <div className='flex flex-col gap-2'>
      <span>Meja {" "}  <span className="text-red-500 text-[12px]">{requiredNomorMeja}</span></span>
      <form className="flex gap-2" onSubmit={handlestruk}>
        <select className='p-3 w-[20rem] border border-r-[16px] border-white rounded-[4px] outline-none' onChange={(e)=>setNomorMeja(e.target.value)}>
          <option value="">Nomor meja</option>
          {result.map((data: any)=>(
          <option value={data.selectMeja} key={data.id}>{data.selectMeja=="meja1" ? 1 : data.selectMeja=="meja2" ? 2 : 3}</option>

          ))}
  
        </select>
        <button className='p-3 w-[8rem] bg-slate-500 text-white rounded-[4px]'>Print struk</button>
      </form>
    </div>
    </div>
   
  )
}
