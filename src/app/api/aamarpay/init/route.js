import axios from "axios";
import { v4 as uuid } from "uuid";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    // Parse the request body
    // console.log("First");
    const reqBody = await request.json();

    // console.log("Second");
    const formData = {
      cus_name: reqBody.userName,
      cus_email: reqBody.userEmail,
      cus_phone: reqBody.userPhone,
      amount: reqBody.totalAmount,
      tran_id: uuid(),
      signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
      store_id: "aamarpaytest",
      currency: "BDT",
      desc: reqBody.description,
      cus_add1: reqBody.useraddress,
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      success_url: "http://localhost:3000/api/aamarpay/callback",
      fail_url: "http://localhost:3000/api/aamarpay/callback",
      cancel_url: "http://localhost:3000/api/aamarpay/callback",
      type: "json", //This is must required for JSON request
    };

    // console.log("Third");
    const response = await axios.post(
      "https://sandbox.aamarpay.com/jsonpost.php",
      formData
    );

    // console.log("Forth");
    // console.log(response);

    if (response.data.result !== "true") {
      let errorMessage = Object.values(response.data).join(". ") + ".";
      return new Response(
        JSON.stringify({
          error: errorMessage,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    // console.log("Fifth");
    // Redirect to payment URL
    return NextResponse.json({ url: response.data.payment_url})
    // return NextResponse.redirect(response.data.payment_url);
  } catch (error) {
    console.error("Error in processing:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
