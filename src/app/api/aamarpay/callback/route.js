import axios from "axios";
import { v4 as uuid } from "uuid";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();

  try {
    console.log(body);
    return Response.redirect(`http://localhost:3000/test`, 302);
  } catch (error) {
    console.error("Error Body:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // No need to close the connection, let it be reused.
};

// export const POST = async (request) => {
//   console.log("Callback Start");
//   console.log(request.json());
//   console.log("Callback End");
//   try {
//     // Parse the request body
//     // const reqBody = await request.json();
//     console.log("First Try");

//     // const {
//     //     pay_status,
//     //   cus_name,
//     //   cus_phone,
//     //   cus_email,
//     //   currency,
//     //   pay_time,
//     //   amount,
//     // } = reqBody;

//     // console.log("Second")

//     // return new Response(
//     //   JSON.stringify({
//     //     title: "Payment Status",
//     //     pay_status,
//     //     cus_name,
//     //     cus_phone,
//     //     cus_email,
//     //     currency,
//     //     pay_time,
//     //     amount,
//     //   }),
//     //   {
//     //     status: 200,
//     //     headers: { "Content-Type": "application/json" },
//     //   }
//     // );

//     console.log("End Try");
//   } catch (error) {
//     console.error("Error in processing:", error);
//     return new Response(
//       JSON.stringify({
//         message: "Internal server error",
//         details: error.message,
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// };
