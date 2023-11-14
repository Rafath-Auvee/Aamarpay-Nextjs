"use client";

const HandleAamarPay = async (data) => {
  try {
    console.log("Payment initiation request:", JSON.stringify(data));

    const paymentResponse = await fetch(`/api/aamarpay/init/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await paymentResponse.json();
    // console.log("Payment initiation response:", result);

    const url = result.url;
    window.location.replace(url);
  } catch (error) {
    console.error("Error initiating payment:", error);
    // Handle error condition if needed
  }
};

const CardDetails = ({ data }) => {
  return (
    <div className="card-details">
      <h1>{data.title}</h1>
      <p>
        <strong>Order ID:</strong> {data.orderID}
      </p>
      <p>
        <strong>Price:</strong> ${data.price}
      </p>
      <p>
        <strong>VAT Amount:</strong> ${data.vatAmount}
      </p>
      <p>
        <strong>Total Amount:</strong> ${data.totalAmount}
      </p>
      <p>
        <strong>Status:</strong> {data.paid}
      </p>
      <p>
        <strong>Email:</strong> {data.userEmail}
      </p>
      <p>
        <strong>Description:</strong> {data.description}
      </p>
      <p>
        ButtonText: <button className="font-bold">{data.buttonText}</button>
      </p>
      <p>
        <strong>Popularity:</strong> {data.popularity}
      </p>
      <button
        className="bg-black text-white px-10 py-4 rounded-lg"
        onClick={() => HandleAamarPay(data)}
      >
        AamarPay
      </button>
    </div>
  );
};

export default function Home() {
  const cardData = {
    userName: "rafath auvee",
    userPhone: "01764951051",
    createdAt: "14:11:2023 19:24:50 PM",
    cardCode: "ES-24",
    orderID: "1699968290538-1285",
    paid: "pending",
    vatAmount: "50.00",
    totalAmount: "1050.00",
    userEmail: "rafath.auvee@gmail.com",
    id: "38361-68414-7740",
    title: "Delicate Petals",
    imageType: "single image",
    price: 1000,
    buttonText: "View Design",
    popularity: "0",
    description:
      "The card captures the essence of serene harmony between two families coming together. With soothing colors and a tranquil design, it symbolizes the peaceful union of hearts.",
    useraddress: "53, Gausul Azam Road, Sector-14, Dhaka, Bangladesh",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardDetails data={cardData} />
    </main>
  );
}
