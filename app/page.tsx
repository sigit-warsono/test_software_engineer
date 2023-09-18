"use client";

import { useRouter } from 'next/navigation'
export default function Home() {
  const getListMenu = JSON.parse(localStorage.getItem("listMenu")!);
  if (getListMenu== null) {
    localStorage.setItem(
      "listMenu",
      JSON.stringify([{"id":"ad8dfbf7-46ea-4d54-b672-fb81e14339d0","menuMakanan":"Ayam Kecap Manis","price":"Rp.31.000"},{"id":"0d4080a9-d630-47b4-97cc-090b7fa51c9d","menuMakanan":"Nasi Goreng Spesial","price":"Rp.30.000"}])
    );
  }
  const router = useRouter()
  return (
    router.push('/menu')
  );
}
