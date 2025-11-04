// "use server";

// import { redirect } from "next/navigation";
// import { fetchMutation } from "convex/nextjs";
// import { Resend } from "resend";
// import { api } from "../../../convex/_generated/api";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function submitOrder(data) {
//   const orderId = await fetchMutation(api.orders.createOrder, data);

//   await resend.emails.send({
//     from: "Audiophile <orders@yourdomain.com>",
//     to: [data.email],
//     subject: `Order Confirmation (${orderId})`,
//     html: `<h2>Hi ${data.name},</h2><p>Your order <b>${orderId}</b> was placed successfully!</p>`,
//   });

//   redirect(`/order/${orderId}`);
// }
