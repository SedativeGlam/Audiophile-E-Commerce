import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrderSuccess({ orderDetails }: { orderDetails: any }) {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.5)] z-1000">
      <div className="text-[#000000] bg-[#ffffff] w-[540px] px-12 py-12 rounded-lg ">
        <Image
          src="/images/check-icon.png"
          width={64}
          height={64}
          alt="check-icon"
        />
        <h3 className="font-bold leading-9 tracking-[1.14px] mt-[33px] mb-6 uppercase">
          Thank You For Your Order
        </h3>
        <p className="w-[444px] font-medium text-[15px] opacity-50 leading-[25px] ">
          You will receive your email confirmation shortly
        </p>

        <div className="mt-[33px] w-[444px] h-[140px] bg-[#f1f1f1] flex rounded-lg ">
          <div className="py-6 px-6">
            <div className="flex justify-between w-[198px] gap-[9px] mb-3 ">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] flex justify-center items-center  ">
                  <Image
                    src="/images/headphone1/display_image.png"
                    width={28}
                    height={32}
                    alt="check-image"
                  />
                </div>

                <div>
                  <h6 className="font-bold text-[15px] leading-[25px] ">
                    xx99 mk II
                  </h6>
                  <span className="opacity-50 font-bold text-[14px] leading-[25px] ">
                    $ 2,999
                  </span>
                </div>
              </div>

              <span className="opacity-50 font-bold text-[15px] leading-[25px]">
                x1
              </span>
            </div>
            <div className="border border-[#000000] w-[198] h-[1] opacity-8 ">
              {" "}
            </div>

            <p className="opacity-50 text-[12px] font-bold tracking-[-0.21px] text-center mt-3">
              and 2 other item(s)
            </p>
          </div>

          <div className="bg-[#000000] w-[198px] h-[140px] text-[#ffffff] flex flex-col justify-center rounded-br-lg rounded-tr-lg">
            <div className="ml-8">
              {" "}
              <span className="opacity-50 font-medium text-[15px] leading-[25px] uppercase mb-2">
                Grand Total
              </span>
              <h6 className="font-bold text-[18px]">
                ${orderDetails?.totals?.grandTotal}
              </h6>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            router.push("/");
          }}
          className="w-[444px] h-12 bg-[#d87d4a] text-[#ffffff] mt-12 "
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
