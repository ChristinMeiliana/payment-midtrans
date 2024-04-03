import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

// initialize midtrans terlebih dahulu
let snap = new Midtrans.Snap({
  //first , kita declare dulu karena kita bukan main di env production
  isProduction: false,
  serverKey: process.env.SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

// syarat menggunakan snap , butuh parameter apa saja . harus di cek terlebih dahulu

// request ini akan dapat dari frontend, try again
export async function POST(request) {
  const { id, productName, price, quantity } = await request.json();

  let parameter = {
    item_details: {
      name: productName,
      price: price,
      quantity: quantity,
    },
    transaction_details: {
      order_id: id,
    },
  };

  const token = await snap.createTransactionToken(parameter);
  console.log(token);
  NextResponse.json({ token });
}
