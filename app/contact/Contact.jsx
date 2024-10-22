"use client";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contactform = () => {
  const [state, handleSubmit] = useForm("mgeglwwv");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  if (showSuccess) {
    return (
      <div className="w-full mx-auto flex items-center justify-center p-2">
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            Your message has been sent successfully.
          </span>
        </div>
      </div>
    );
  }
  return (
    <section>
      <div
        id="map"
        className="h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:ml-10 lg:mr-10"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60924485.415671155!2d54.55272035376464!3d21.250260899922907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sin!4v1710246311482!5m2!1sen!2sin"
          width="100%"
          height={480}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-md w-full h-full shadow-md"
        />
      </div>
      <div className="container px-6 md:px-10">
        <div className="block rounded-lg bg-gray-950 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[90px] backdrop-blur-[30px] border-gray-500 border">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    className="text-gray-300"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                  <input
                    className="block w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                    id="exampleInput90"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="text-gray-300"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                  <input
                    className="block w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                    id="exampleInput91"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="text-gray-300"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    Message
                  </label>
                  <textarea
                    className="block w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear resize-none"
                    id="exampleFormControlTextarea1"
                    rows={4}
                    name="message"
                    placeholder="Message"
                    required
                  />
                  <ValidationError
                    prefix="message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition-all duration-200 ease-linear focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow text-gray-300">
                      <p className="mb-2 font-bold text-base ">
                        Technical support
                      </p>
                      <p className="text-sm ">
                        business@conturemedia.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-blue-500 p-4 text-white lg:ml-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 00-7.588 0 .751.751 0 00-.331.623v.491a.75.75 0 00.75.75h6.75a.75.75 0 00.75-.75v-.491a.75.75 0 00-.331-.623z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow text-gray-300">
                      <p className="mb-2 font-bold text-base ">Location</p>
                      <p className="text-sm">
                        Global Service Provider
                      </p>
                    </div>
                  </div>
                </div>
               {/*  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5M9 3.75h6M12 8.25v9m-6.75 1.5h13.5c.621 0 1.125-.504 1.125-1.125V9.75A1.125 1.125 0 0018.75 8.625h-13.5A1.125 1.125 0 004.125 9.75v7.875c0 .621.504 1.125 1.125 1.125z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow text-gray-300">
                      <p className="mb-2 font-bold text-base ">Billing Support</p>
                      <p className="text-sm">
                        support@conturemedia.com
                        <br />
                        billing.contureai@gmail.com
                      </p>
                    </div> 
                  </div>
                </div>*/}
                {/* <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"> 
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-blue-500 p-4 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 8.25v3.75H12m0 0V15m0-3.75H8.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                     <div className="ml-6 grow text-gray-300">
                      <p className="mb-2 font-bold text-base ">Others</p>
                      <p className="text-sm">
                        info@conturemedia.com
                        <br />
                        support.contureai@gmail.com
                      </p>
                    </div> 
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;