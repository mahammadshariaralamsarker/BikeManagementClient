import { useEffect } from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection";
import { useLogedinUserGetQuery } from "../../redux/features/auth/AuthApi";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/Checkout/Checkout.slice";
import { useCreateOrderMutation } from "../../redux/features/Checkout/checkoutApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice } = useAppSelector((state) => state.checkouts);
  const { data: me } = useLogedinUserGetQuery(undefined);
  const [createOrder, { data, isLoading, isSuccess, isError, error }] =
    useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const dta = items?.map((data) => {
    return {
      product: data?.product,
      quantity: data.quantity,
    };
  });
  const handlePlaceOrder = async () => {
    await createOrder({ products: dta });

    // console.log("api Res", res?.data?.data);
  };

  const toastId = "paymentToast";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);
  console.log(items);
  return (
    <div>
      <section>
        <MyContainer>
          <MySection>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
              <a href="#" className="text-2xl font-bold text-gray-800">
                Cart List
              </a>
              <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                <div className="relative">
                  <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </a>
                      <span className="font-semibold text-gray-900">Shop</span>
                    </li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                        href="#"
                      >
                        2
                      </a>
                      <span className="font-semibold text-gray-900">
                        Shipping
                      </span>
                    </li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                        href="#"
                      >
                        3
                      </a>
                      <span className="font-semibold text-gray-500">
                        Payment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
              <div className="px-4 pt-8">
                <p className="text-xl font-medium">Order Summary</p>
                <p className="text-gray-400">
                  Check your items. And select a suitable shipping method.
                </p>
                <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                  {/* Product Item */}
                  {items?.map((cartData, idx) => (
                    <div
                      className="flex flex-col rounded-lg bg-white sm:flex-row"
                      key={idx}
                    >
                      <img
                        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src={cartData?.imageUrl}
                        alt=""
                      />
                      <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">{cartData?.name}</span>

                        <div className="flex justify-between">
                          <p className="mt-auto text-lg font-bold">
                            ${(cartData?.quantity * cartData?.price).toFixed(2)}
                          </p>
                          {/* Quantity Handle */}
                          <div className="flex items-center space-x-2">
                            {/* Decrease Button */}
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: cartData.product,
                                    quantity: Math.max(
                                      cartData.quantity - 1,
                                      1
                                    ),
                                  })
                                )
                              }
                              className="bg-gray-300 hover:bg-primary p-2 rounded hover:text-white transition group"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-700 group-hover:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 12H5"
                                />
                              </svg>
                            </button>

                            {/* Quantity Display */}
                            <input
                              type="text"
                              className="w-8 p-[2px] text-center border rounded text-gray-700"
                              // value={quantity}
                              value={cartData.quantity}
                              readOnly
                            />

                            {/* Increase Button */}
                            {/* <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: cartData.product,
                                    quantity: Math.min(
                                      cartData.quantity + 1,
                                      cartData.stock
                                    ),
                                  })
                                )
                              }
                              className="bg-gray-300 hover:bg-primary p-2 rounded hover:text-white transition group"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-700 group-hover:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 5v14m7-7H5"
                                />
                              </svg>
                            </button> */}
                            <button
                              onClick={() => {
                                if (cartData.quantity + 1 > cartData.stock) {
                                  toast.error("Insufficient Stock!");
                                } else {
                                  dispatch(
                                    updateQuantity({
                                      id: cartData?.product,
                                      quantity: Math.min(
                                        cartData?.quantity + 1,
                                        cartData?.stock
                                      ),
                                    })
                                  );
                                }
                              }}
                              className="bg-gray-300 hover:bg-primary p-2 rounded hover:text-white transition group"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-700 group-hover:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 5v14m7-7H5"
                                />
                              </svg>
                            </button>
                          </div>
                          ;{/* Quantity Handle */}
                          <button
                            onClick={() =>
                              dispatch(removeFromCart(cartData.product))
                            }
                            className="text-red-500 text-xs cursor-pointer hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-lg font-medium">Payment Methods</p>
                <form className="mt-5 ">
                  <div className="relative">
                    <input
                      className="peer hidden"
                      id="radio_1"
                      type="radio"
                      name="radio"
                      checked
                    />
                  </div>
                  <div className="relative">
                    <input
                      className="peer hidden"
                      id="radio_2"
                      type="radio"
                      name="radio"
                      checked
                    />
                    <span className="peer-checked:border-primary absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-primary peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      htmlFor="radio_2"
                    >
                      <img
                        className="w-14 object-contain"
                        src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/09/15/shurjopay_.jpg"
                        alt=""
                      />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">Shurjo Pay</span>
                        <p className="text-slate-500 text-sm leading-6">
                          The Secure Payment Gatway
                        </p>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
              <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">
                  Complete your order by providing your payment details.
                </p>
                <div className="">
                  <div>
                    <label
                      htmlFor="name"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={me?.data?.name}
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary"
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={me?.data?.email}
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary"
                        readOnly
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">N/A</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Shipping
                      </p>
                      <p className="font-semibold text-gray-900">N/A</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {totalPrice}BDT
                    </p>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="mt-4 mb-8 w-full rounded-md bg-primary px-6 py-3 font-medium text-white disabled:bg-primary/50"
                  disabled={totalPrice == 0 ? true : false}
                >
                  Order Now
                </button>
              </div>
            </div>
          </MySection>
        </MyContainer>
      </section>
    </div>
  );
};

export default Checkout;
