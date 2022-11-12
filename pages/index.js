import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/layouts/navbar/Navbar.js";
import Footer from "../components/layouts/footer/Footer.js";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Monthly from "../components/views/Monthly";
import Yearly from "../components/views/Yearly";

export default function Home() {
  const [yearly, setYearly] = useState(false);
  const [open, setOpen] = useState(1);
  let yearlyContent;

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function toggleYearly(e) {
    setYearly(e.target.checked);
  }

  if (yearly) {
    yearlyContent = <Yearly />;
  } else {
    yearlyContent = <Monthly />;
  }

  return (
    <div>
      <Head>
        <title>FE2_Bonsai</title>
        <meta name="description" content="Bonsai template" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://www.dafontfree.net/embed/YW1lcmlnby1idC1yb21hbiZkYXRhLzQ2L2EvNTkxNDQvQW1lcmlnbyBCVC50dGY"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      {/* NAVBAR */}
      <div>
        <Navbar />
      </div>

      <main className="!bg-scroll block overflow-hidden w-full">
        <div className="pt-[110px] pb-[40px] !bg-scroll relative">
          <div className="relative z-2 !bg-scroll maxmd:px-[1.25rem] px-10">
            {/* LEFT CONTENT */}
            <div className="!bg-scroll w-full max-w-[70rem] mx-auto">
              <div
                className="pr-0 flex maxmd:flex-wrap maxlg:mt-0 mx-auto w-full mt-[4%]
                justify-between items-center maxlg:top-0 relative max-w-[40rem]"
              >
                <div
                  className="!bg-scroll maxxs:mt-0 maxxs:mx-0 maxmd:mb-5
                maxlg:mt-0 maxlg:mx-0 maxlg:mb-6 mt-0 mx-0 mb-[0.9375rem]"
                >
                  <h1
                    className="font-normal !bg-scroll maxmd:text-2xl my-0
                  text-[2.5rem] leading-[120%] maxxs:leading-[36px]
                  maxmd:text-[28px] maxmd:leading-[42px] font-[amerigo-bt-roman]"
                  >
                    Plans & Pricing
                  </h1>
                </div>
                <div
                  className="!bg-scroll maxxs:mt-[50px] maxxs:justify-center maxmd:mt-[60px]
                maxmd:justify-end maxmd:flex-[1] flex relative flex items-center"
                >
                  <div
                    className="!bg-scroll text-[17px] font-[600] tracking-[1.22px]
                  uppercase"
                  >
                    Monthly
                  </div>
                  <div
                    className="!bg-scroll cursor-pointer touch-manipulation flex
                  w-[50px] h-[29px] mx-[28px] px-0 items-center rounded-[200px]
                  bg-[#0b289]"
                  >
                    <label
                      htmlFor="toggle-yearly"
                      className="inline-flex relative items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value="yearly"
                        id="toggle-yearly"
                        className="sr-only peer"
                        onChange={toggleYearly}
                      />
                      <div
                        className="w-[50px] h-[25px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
                        dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
                        peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300
                        after:border after:rounded-full after:h-[25px] after:w-[25px]
                        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="!bg-scroll relative z-2 opacity-[.65] text-[#4c4d5f]
                  text-[16px] font-[600] tracking-[1.22px] uppercase"
                  >
                    Yearly
                  </div>
                </div>
              </div>
              {yearlyContent}
            </div>
          </div>
        </div>
        {/* SECTION MAIN 2 */}
        <div className="py-[40px] !bg-scroll relative">
          <div className="!bg-scroll maxmd:px-[1.25rem] px-[2.5rem]">
            <div className="!bg-scroll w-full max-w-[58rem] mx-auto">
              <div
                className="maxxs:pt-[40px] maxxs:px-[15px] maxxs:pb-[50px] maxxs:justify-center
              maxlg:relative maxlg:z-1 maxlg:py-[3rem] maxlg:px-[2rem] flex maxlg:flex-wrap maxlg:text-center
              py-[4rem] px-[3rem] justify-center items-center rounded-[8px] bg-[#f2faff]"
              >
                <div className="w-[70%] !bg-scroll text-[#4C525A]">
                  <div className="!bg-scroll maxmd:text-[2.5rem] my-0 text-[2.75rem] leading-[130%]">
                    It&apos;s <span className="text-[#00b289]">your</span>{" "}
                    business.
                    <br />
                    We&apos;re here to help it grow.
                  </div>
                </div>
                <a
                  className="!bg-scroll maxxs:text-center inline-block w-auto pt-[15px] px-[25px]
                pb-[13px] rounded-[4px] bg-gradient-to-r from-[#00b289] to-cyan-500 transition-colors
                duration-[400ms] ease-in delay-[0ms] text-center tracking-[.07em] uppercase inline-block
                py-[9px] px-[15px] border-none no-underline cursor-pointer text-white hover:bg-gradient-to-r
                hover:from-cyan-500 hover:to-[#00b289]"
                >
                  start free
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION MAIN 3 */}
        <div className="px-[40px] !bg-scroll relative">
          <div className="!bg-scroll maxmd:px-[1.25rem] px-[2.5rem]">
            <div className="!bg-scroll w-full max-w-[58rem] mx-auto">
              <div className="mx-0 my-[2.5rem]">
                <h2
                  className="!bg-scroll text-[#00b289] text-center maxmd:text-[24px] maxmd:leading-[36px]
                mt-[36px] mt-[20px] mb-[10px] text-[32px] leading-[38px] font-bold"
                >
                  Frenquently Asked Questions
                </h2>
              </div>
              <Fragment>
                <Accordion open={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="maxxs:mr-[20px] maxxs:pr-[20px] mb-[10px] text-[24px] leading-[38px]
                    maxmd:text-left maxmd:text-[24px] maxmd:leading-[36px] mt-[20px] font-bold
                  "
                  >
                    How does the free trial work?
                  </AccordionHeader>
                  <AccordionBody
                  //   className="mx-[9%] !bg-scroll text-left maxmd:text-[14px] maxmd:leading-[24px]
                  // text-[#4c4d5f] mt-0 mb-[10px] text-[28px] leading-[28px] no-underline"
                  >
                    When you start your trial with Bonsai you&apos;ll receive
                    full, unlimited access to all of Bonsai&apos;s Workflow or
                    Workflow Plus Features! You will need to enter your credit
                    card information to begin your trial, but don&apos;t worry -
                    we won&apos;t charge you anything until the subscription
                    ends! If you wish to cancel at any time during the trial
                    period, you can do so through your Subscriptions Settings
                    Page.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="maxxs:mr-[20px] maxxs:pr-[20px] maxmd:text-left maxmd:text-[24px]
                    maxmd:leading-[36px] mt-[20px] font-bold mb-[10px] text-[24px] leading-[38px]"
                  >
                    Can I change plans anytime?
                  </AccordionHeader>
                  <AccordionBody>
                    Yes, you can from within your account. If you have already
                    subscribed to a plan, or want to downgrade or upgrade your
                    current one, you can do this by going to your
                    &quot;Settings&quot; and &quot;Subscription&quot;.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="maxxs:mr-[20px] maxxs:pr-[20px] mb-[10px] text-[24px] leading-[38px]
                    maxmd:text-left maxmd:text-[24px] maxmd:leading-[36px] mt-[20px] font-bold"
                  >
                    How do I pause my Bonsai subscription?
                  </AccordionHeader>
                  <AccordionBody>
                    We totally understand that with the nature of freelancing,
                    work ebbs and flows so you might not always need your Bonsai
                    subscription to remain active! The good news is that you can
                    cancel or pause your monthly subscription at any time
                    without penalty. Once cancelled, you&apos;ll be able to
                    continue logging in to access all your documents and even
                    continue to use our free features, like Time Tracking! In
                    order to cancel your subscription, login to your Bonsai
                    account.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4}>
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className="maxxs:mr-[20px] maxxs:pr-[20px] maxmd:text-left maxmd:text-[24px]
                    maxmd:leading-[36px] mt-[20px] font-bold mb-[10px] text-[24px] leading-[38px]"
                  >
                    What is your refund policy?
                  </AccordionHeader>
                  <AccordionBody>
                    If you contact us within 2 weeks of being charged for your
                    subscription, we will be happy to issue a refund for
                    you!Beyond those 2 weeks, you will need to cancel or modify
                    the subscription from the Subscriptions Tab in Settings to
                    avoid future charges, but refunds will not be issued. This
                    applies to both monthly and annual plans.
                  </AccordionBody>
                </Accordion>
              </Fragment>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
