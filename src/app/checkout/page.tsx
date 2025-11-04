"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Form from "@/app/checkout/Form";
import OrderSuccess from "@/components/OrderSuccess";
import Cart from "@/components/Cart";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { useCart } from "@/context/CartContext";
import { api } from "@/convex/_generated/api";

export default function CheckOut() {
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const router = useRouter();
  const createOrder = useMutation(api.orders.create);
  const { items: cartItems, clearCart } = useCart();
  const [orderSuccessDetails, setOrderSuccessDetails] = useState(undefined);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const totals: any = {
    subtotal: cartItems.reduce((s, it) => s + it.price * it.quantity, 0),
    shipping: 50, // optionally compute
    taxes: Math.round(
      cartItems.reduce((s, it) => s + it.price * it.quantity, 0) * 0.2
    ), // example 20% VAT
  };
  totals.grandTotal = totals.subtotal + totals.shipping + totals.taxes;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Required";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      e.email = "Invalid email";
    if (!formData.address.trim()) e.address = "Required";
    // ...add other validations as before
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setSubmitting(true);

    try {
      // Prepare items in the shape expected by Convex mutation
      const itemsForConvex = cartItems.map((it: any) => ({
        productId: String(it.id),
        name: it.title || it.name,
        price: it.price,
        quantity: it.quantity,
        image: it.image || "/images/placeholder.png",
        slug: it.slug || undefined,
      }));

      const itemsDetails = {
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          zip: formData.zip,
          city: formData.city,
          country: formData.country,
        },
        items: itemsForConvex,
        totals,
      };

      // Create order in Convex
      const orderId = await createOrder({
        sessionId:
          localStorage.getItem("audiophile-session-id") ||
          `session-${Date.now()}`,
        userId: undefined, // provide if user signed in
        ...itemsDetails,
      });

      // Send confirmation email via server route
      await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          orderId,
          items: itemsForConvex.map((it) => ({
            name: it.name,
            price: it.price,
            quantity: it.quantity,
          })),
          totals,
          shipping: {
            address: formData.address,
            zip: formData.zip,
            city: formData.city,
            country: formData.country,
          },
        }),
      });

      // Clear cart and show success
      clearCart();
      setShowOrderSuccess(true);
      setOrderSuccessDetails(itemsDetails);
    } catch (err) {
      console.error("Checkout error", err);
      alert("Could not complete checkout. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <article className="bg-[#f1f1f1]">
      <div className="bg-[#000000]">
        <NavBar />
      </div>

      <div className="w-[1110px] mx-auto text-[#000000] pb-[141px] ">
        <div className="mt-[79px]">
          <Link
            className="opacity-50 text-[15px] font-medium leading-[25px]"
            href="/"
          >
            Go Back
          </Link>
        </div>

        <div className="flex gap-[30px] mt-[38px]">
          <Form
            formData={formData}
            setFormData={(data) => setFormData(data)}
            errors={errors}
          />

          <div className="w-[350px] h-[612px] text-[#000000] bg-[#ffffff]  py-8 px-[33px] rounded-lg uppercase">
            <h6 className="font-bold text-[18px] tracking-[1.29px] mb-[31px] uppercase">
              Summary
            </h6>

            <div className="flex justify-between mb-8">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 bg-[#f1f1f1] flex justify-center items-center rounded-lg">
                  <Image
                    className="w-[36.19px] h-10"
                    src="/images/headphone1/display_image.png"
                    width={64}
                    height={64}
                    alt="summary-image"
                  />
                </div>

                <div>
                  <h6 className="font-bold text-[15px]">xx99 mk II</h6>
                  <span className="font-bold text-[14px] leading-[25px] opacity-50">
                    $ 2,999
                  </span>
                </div>
              </div>

              <span className="font-bold text-[15px] leading-[25px] opacity-50 lowercase">
                x1
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[15px] leading-[25px] opacity-50">
                  Total
                </span>
                <h6 className="font-bold text-[15px] leading-[25px]">
                  $ 5,396
                </h6>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[15px] leading-[25px] opacity-50">
                  Shipping
                </span>
                <h6 className="font-bold text-[15px] leading-[25px]">$ 50</h6>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-[15px] leading-[25px] opacity-50">
                  Vat (Included)
                </span>
                <h6 className="font-bold text-[15px] leading-[25px]">
                  $ 1,079
                </h6>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-[15px] leading-[25px] opacity-50">
                  Grand Total
                </span>
                <h6 className="font-bold text-[#d87d4a] text-[15px] leading-[25px]">
                  $ 5,446
                </h6>
              </div>
            </div>

            <button
              onClick={() => {
                handleSubmit();
              }}
              className="w-[284px] cursor-pointer h-12 bg-[#d87d4a] text-[#ffffff] text-[13px] font-bold tracking-[1px] uppercase"
            >
              Continue & Pay
            </button>
          </div>
        </div>

        {showOrderSuccess && (
          <OrderSuccess orderDetails={orderSuccessDetails} />
        )}
        {/* <Cart /> */}
      </div>
    </article>
  );
}
