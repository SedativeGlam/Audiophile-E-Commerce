"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Cart() {
  const {
    items,
    totalPrice,
    removeItem,
    updateQuantity,
    clearCart,
    isLoading,
  } = useCart();

  const router = useRouter();

  if (isLoading) {
    return (
      <div className="w-[377px] bg-[#fafafa] rounded-lg px-[31px] py-[31px] mb-6">
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="w-[377px] absolute top-[120%] right-0 z-1000  bg-[#fafafa] rounded-lg px-[31px] py-[31px] mb-6 ">
      <div className="flex justify-between items-center mb-8">
        <h6 className="font-bold text-[18px] tracking-[1.29px] text-black">
          Cart ({items.length})
        </h6>
        <button
          onClick={clearCart}
          disabled={items.length === 0}
          className="opacity-50 font-medium text-[15px] text-black hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer"
        >
          Remove all
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-[15px] opacity-50 text-center mb-6 text-black">
          Your cart is empty.
        </p>
      ) : (
        items.map((item) => (
          <div
            key={item.productId}
            className="flex justify-between items-center mb-6 gap-[30px]"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#f1f1f1] flex justify-center items-center rounded-lg">
                <Image
                  className="rounded-md"
                  src={item.image}
                  width={36}
                  height={36}
                  alt={item.name}
                />
              </div>

              <div>
                <h6 className="font-bold text-[15px] text-black">
                  {item.name}
                </h6>
                <span className="font-bold text-[14px] opacity-50 text-black">
                  $ {item.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center h-8 text-[#000000] bg-[#f1f1f1] gap-5 px-4">
              <button
                onClick={() =>
                  updateQuantity(item.productId, Math.max(1, item.quantity - 1))
                }
                className=" opacity-25 font-bold text-[13px] tracking-[1px] leading-auto "
              >
                -
              </button>

              <span className="font-bold text-[13px] tracking-[1px]">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  updateQuantity(item.productId, item.quantity + 1)
                }
                className="opacity-25 font-bold text-[13px] trackin-[1px] leading-auto tracking-[1px]"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      <div className="flex justify-between items-center mt-[9px] mb-[24px] uppercase">
        <span className="font-bold text-[15px] leading-[25px] opacity-50">
          Total
        </span>
        <h6 className="font-bold text-[15px] leading-[25px]">
          ${totalPrice.toLocaleString()}
        </h6>
      </div>

      <button
        disabled={items.length === 0}
        onClick={() => router.push("/checkout")}
        className="w-full h-12 bg-[#d87d4a] text-[#ffffff] text-[13px] font-bold tracking-[1px] hover:bg-[#fbaf85] transition-colors duration-300 uppercase cursor-pointer"
      >
        Checkout
      </button>
    </div>
  );
}
