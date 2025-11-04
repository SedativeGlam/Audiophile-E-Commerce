// import React from "react";

// export default function Form() {
//   return (
//     <div className="w-[1110px] mx-auto flex gap-[30px]  bg-[#ffffff] text-[#000000] rounded-lg">
//       <div className=" pb-[48px] px-[48px]">
//         <h3 className="w-[350px] font-bold text-[32px] leading-[36px] tracking-[1.14px] uppercase pt-[54px]">
//           Checkout
//         </h3>

//         <form>
//           <div>
//             <h6 className="font-bold text-[13px] text-[#d87d4a] leading-[25px] tracking-[0.93px] mt-[41px] mb-[16px] uppercase">
//               Billing details
//             </h6>

//             <div className="flex items-center gap-4 mb-24px">
//               <div className="flex flex-col">
//                 <label
//                   className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                   htmlFor="name"
//                 >
//                   Name
//                 </label>
//                 <input
//                   className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                   type="text"
//                   placeholder="Alexei Ward"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label
//                   className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                   htmlFor="email"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                   type="email"
//                   placeholder="alexei@mail.com"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col mt-[24px]">
//               <label
//                 className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                 htmlFor="number"
//               >
//                 Phone Number
//               </label>
//               <input
//                 className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                 type="number"
//                 placeholder="+1 202-555-0136"
//               />
//             </div>
//           </div>

//           <div>
//             <h6 className="font-bold text-[13px] text-[#d87d4a] leading-[25px] tracking-[0.93px] mb-[16px] mt-[53px] uppercase">
//               Shipping Info
//             </h6>

//             <div className="flex flex-col gap-[9px]">
//               <label
//                 className="font-bold text-[12px] tracking-[-0.2px]"
//                 htmlFor="address"
//               >
//                 Address
//               </label>
//               <input
//                 className="border border-[#cfcfcf] w-[100%] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                 placeholder="1137 Williams Avenue"
//               />
//             </div>

//             <div className="flex items-center gap-[16px]">
//               <div className="flex flex-col mt-[24px]">
//                 <label
//                   className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                   htmlFor="zip"
//                 >
//                   Zip Code
//                 </label>
//                 <input
//                   className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                   type="number"
//                   placeholder="10001"
//                 />
//               </div>

//               <div className="flex flex-col mt-[24px]">
//                 <label
//                   className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                   htmlFor="city"
//                 >
//                   City
//                 </label>
//                 <input
//                   className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                   type="text"
//                   placeholder="New York"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col mt-[24px]">
//               <label
//                 className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                 htmlFor="country"
//               >
//                 Country
//               </label>
//               <input
//                 className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                 type="text"
//                 placeholder="United States"
//               />
//             </div>
//           </div>

//           {/* payment details */}
//           <div className="mt-[61px]">
//             <h6 className="font-bold text-[13px] text-[#d87d4a]  leading-[25px] tracking-[0.93px] uppercase">
//               Payment Details
//             </h6>

//             <div>
//               <div className="flex justify-between items-center">
//                 <h6 className="font-bold text-[12px] tracking-[-0.21px]">
//                   Payment Method
//                 </h6>

//                 <div>
//                   <div className="w-[309px] px-[24px] py-[18px] rounded-lg border border-[#cfcfcf] flex items-center gap-[16px]">
//                     <input type="radio" />
//                     <span className="font-bold text-[14px]">e-Money</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <div className=" mt-[16px] w-[309px] px-[24px] py-[18px] rounded-lg border border-[#cfcfcf] flex items-center gap-[16px]">
//                   <input type="radio" />
//                   <span className="font-bold text-[14px]">
//                     Cash on Delivery
//                   </span>
//                 </div>
//               </div>

//               <div className="flex items-center gap-[16px] mt-[24px]">
//                 <div className="flex flex-col">
//                   <label
//                     className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                     htmlFor="e-money-num"
//                   >
//                     e-Money Number
//                   </label>
//                   <input
//                     className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                     type="number"
//                     placeholder="238521993"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label
//                     className="font-bold text-[12px] tracking-[-0.2px] mb-[9px]"
//                     htmlFor="e-money-pin"
//                   >
//                     e-Money PIN
//                   </label>
//                   <input
//                     className="border border-[#cfcfcf] w-[309px] px-[24px] py-[18px] rounded-lg "
//                     type="number"
//                     placeholder="6891"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// // import { submitOrder } from "@/app/checkout/actions";

// export default function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     address: "",
//     zip: "",
//     city: "",
//     country: "",
//     paymentMethod: "e-Money",
//     eMoneyNumber: "",
//     eMoneyPin: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrors({});

//     // Simple front-end validation
//     if (!formData.name || !formData.email || !formData.address) {
//       setErrors({ general: "Please fill all required fields." });
//       setLoading(false);
//       return;
//     }

//     try {
//       await submitOrder(formData); // send to backend
//     } catch (err) {
//       console.error(err);
//       setErrors({ general: "Something went wrong. Try again." });
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-[1110px] mx-auto flex gap-[30px] bg-[#ffffff] text-[#000000] rounded-lg">
//       <div className="pb-12 px-12">
//         <h3 className="w-[350px] font-bold text-[32px] leading-9 tracking-[1.14px] uppercase pt-[54px]">
//           Checkout
//         </h3>

//         <form onSubmit={handleSubmit}>
//           {errors.general && (
//             <p className="text-red-500 font-semibold mt-3">{errors.general}</p>
//           )}

//           {/* Billing Details */}
//           <h6 className="font-bold text-[13px] text-[#d87d4a] leading-[25px] tracking-[0.93px] mt-[41px] mb-4 uppercase">
//             Billing details
//           </h6>

//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex flex-col">
//               <label className="font-bold text-[12px] mb-[9px]" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                 type="text"
//                 placeholder="Alexei Ward"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-bold text-[12px] mb-[9px]" htmlFor="email">
//                 Email Address
//               </label>
//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                 type="email"
//                 placeholder="alexei@mail.com"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label className="font-bold text-[12px] mb-[9px]" htmlFor="number">
//               Phone Number
//             </label>
//             <input
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//               className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//               type="tel"
//               placeholder="+1 202-555-0136"
//               required
//             />
//           </div>

//           {/* Shipping Info */}
//           <h6 className="font-bold text-[13px] text-[#d87d4a] leading-[25px] tracking-[0.93px] mb-4 mt-[53px] uppercase">
//             Shipping Info
//           </h6>

//           <div className="flex flex-col gap-[9px]">
//             <label className="font-bold text-[12px]" htmlFor="address">
//               Address
//             </label>
//             <input
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="border border-[#cfcfcf] w-full px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//               placeholder="1137 Williams Avenue"
//               required
//             />
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="flex flex-col mt-6">
//               <label className="font-bold text-[12px] mb-[9px]" htmlFor="zip">
//                 Zip Code
//               </label>
//               <input
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleChange}
//                 className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                 type="text"
//                 placeholder="10001"
//               />
//             </div>

//             <div className="flex flex-col mt-6">
//               <label className="font-bold text-[12px] mb-[9px]" htmlFor="city">
//                 City
//               </label>
//               <input
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                 type="text"
//                 placeholder="New York"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mt-6">
//             <label className="font-bold text-[12px] mb-[9px]" htmlFor="country">
//               Country
//             </label>
//             <input
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//               type="text"
//               placeholder="United States"
//             />
//           </div>

//           {/* Payment */}
//           <div className="mt-[61px]">
//             <h6 className="font-bold text-[13px] text-[#d87d4a] uppercase">
//               Payment Details
//             </h6>

//             <div>
//               <div className="flex justify-between items-center">
//                 <h6 className="font-bold text-[12px]">Payment Method</h6>

//                 <div>
//                   <div className="w-[309px] px-6 py-[18px] rounded-lg border border-[#cfcfcf] flex items-center gap-4">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="e-Money"
//                       checked={formData.paymentMethod === "e-Money"}
//                       onChange={handleChange}
//                     />
//                     <span className="font-bold text-[14px]">e-Money</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <div className="mt-4 w-[309px] px-6 py-[18px] rounded-lg border border-[#cfcfcf] flex items-center gap-4">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Cash on Delivery"
//                     checked={formData.paymentMethod === "Cash on Delivery"}
//                     onChange={handleChange}
//                   />
//                   <span className="font-bold text-[14px]">
//                     Cash on Delivery
//                   </span>
//                 </div>
//               </div>

//               {formData.paymentMethod === "e-Money" && (
//                 <div className="flex items-center gap-4 mt-6">
//                   <div className="flex flex-col">
//                     <label
//                       className="font-bold text-[12px] mb-[9px]"
//                       htmlFor="eMoneyNumber"
//                     >
//                       e-Money Number
//                     </label>
//                     <input
//                       name="eMoneyNumber"
//                       value={formData.eMoneyNumber}
//                       onChange={handleChange}
//                       className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                       type="text"
//                       placeholder="238521993"
//                     />
//                   </div>

//                   <div className="flex flex-col">
//                     <label
//                       className="font-bold text-[12px] mb-[9px]"
//                       htmlFor="eMoneyPin"
//                     >
//                       e-Money PIN
//                     </label>
//                     <input
//                       name="eMoneyPin"
//                       value={formData.eMoneyPin}
//                       onChange={handleChange}
//                       className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
//                       type="text"
//                       placeholder="6891"
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

export default function Form({
  errors,
  formData,
  setFormData,
}: {
  errors: any;
  formData: any;
  setFormData: (data: any) => void;
}) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[1110px] mx-auto flex gap-[30px] bg-[#ffffff] text-[#000000] rounded-lg">
      <div className="pb-12 px-12">
        <h3 className="w-[350px] font-bold text-[32px] leading-9 tracking-[1.14px] uppercase pt-[54px]">
          Checkout
        </h3>

        <form id="checkout-form">
          {errors.general && (
            <p className="text-red-500 font-semibold mt-3">{errors.general}</p>
          )}

          {/* Billing Details */}
          <h6 className="font-bold text-[13px] text-[#d87d4a] leading-[25px] tracking-[0.93px] mt-[41px] mb-4 uppercase">
            Billing details
          </h6>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex flex-col">
              <label className="font-bold text-[12px] mb-[9px]" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
                type="text"
                placeholder="Alexei Ward"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-[12px] mb-[9px]" htmlFor="email">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
                type="email"
                placeholder="alexei@mail.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-[12px] mb-[9px]" htmlFor="number">
              Phone Number
            </label>
            <input
              name="number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
              type="tel"
              placeholder="+1 202-555-0136"
              required
            />
          </div>

          {/* Shipping Info */}
          <h6 className="font-bold text-[13px] text-[#d87d4a] leading-[25px] tracking-[0.93px] mb-4 mt-[53px] uppercase">
            Shipping Info
          </h6>

          <div className="flex flex-col gap-[9px]">
            <label className="font-bold text-[12px]" htmlFor="address">
              Address
            </label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-[#cfcfcf] w-full px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
              placeholder="1137 Williams Avenue"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col mt-6">
              <label className="font-bold text-[12px] mb-[9px]" htmlFor="zip">
                Zip Code
              </label>
              <input
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
                type="text"
                placeholder="10001"
              />
            </div>

            <div className="flex flex-col mt-6">
              <label className="font-bold text-[12px] mb-[9px]" htmlFor="city">
                City
              </label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
                type="text"
                placeholder="New York"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label className="font-bold text-[12px] mb-[9px]" htmlFor="country">
              Country
            </label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
              type="text"
              placeholder="United States"
            />
          </div>

          {/* Payment */}
          <div className="mt-[61px]">
            <h6 className="font-bold text-[13px] text-[#d87d4a] uppercase">
              Payment Details
            </h6>

            <div>
              <div className="flex justify-between items-center">
                <h6 className="font-bold text-[12px]">Payment Method</h6>

                <div>
                  <div className="w-[309px] px-6 py-[18px] rounded-lg border border-[#cfcfcf] flex items-center gap-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="e-Money"
                      checked={formData.paymentMethod === "e-Money"}
                      onChange={handleChange}
                    />
                    <span className="font-bold text-[14px]">e-Money</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="mt-4 w-[309px] px-6 py-[18px] rounded-lg border border-[#cfcfcf] flex items-center gap-4">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={formData.paymentMethod === "Cash on Delivery"}
                    onChange={handleChange}
                  />
                  <span className="font-bold text-[14px]">
                    Cash on Delivery
                  </span>
                </div>
              </div>

              {formData.paymentMethod === "e-Money" && (
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex flex-col">
                    <label
                      className="font-bold text-[12px] mb-[9px]"
                      htmlFor="eMoneyNumber"
                    >
                      e-Money Number
                    </label>
                    <input
                      name="eMoneyNumber"
                      value={formData.eMoneyNumber}
                      onChange={handleChange}
                      className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
                      type="text"
                      placeholder="238521993"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="font-bold text-[12px] mb-[9px]"
                      htmlFor="eMoneyPin"
                    >
                      e-Money PIN
                    </label>
                    <input
                      name="eMoneyPin"
                      value={formData.eMoneyPin}
                      onChange={handleChange}
                      className="border border-[#cfcfcf] w-[309px] px-6 py-[18px] rounded-lg placeholder:opacity-40 placeholder:font-bold placeholder:text-[14px]"
                      type="text"
                      placeholder="6891"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
