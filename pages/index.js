import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/layouts/navbar/Navbar.js";
import { AiOutlineRight } from "react-icons/ai";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Home() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://www.dafontfree.net/embed/YW1lcmlnby1idC1yb21hbiZkYXRhLzQ2L2EvNTkxNDQvQW1lcmlnbyBCVC50dGY"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      {/* NAVBAR */}
      {/* <div><Navbar /></div> */}

      <main className="!bg-scroll block overflow-hidden w-full">
        <div className="pt-[110px] pb-[40px] !bg-scroll relative">
          <div className="relative z-2 !bg-scroll maxmd:px-[1.25rem] px-10">
            {/* LEFT CONTENT */}
            <div className="!bg-scroll w-full max-w-[70rem] mx-auto">
              <div
                className="pr-0 maxmd:flex-wrap maxlg:mt-0 flex mx-auto w-full mt-[4%]
                justify-between items-center maxlg:top-0 relative max-w-[36rem]"
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
                  className="!bg-scroll maxxs:mt-[50px] justify-center maxmd:mt-[60px]
                justify-end flex-1 relative flex items-center"
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
                    <div
                      className="!bg-scroll w-[25px] h-[25px] px-[2px] rounded-[200px]
                    bg-white"
                    ></div>
                  </div>
                  <div
                    className="!bg-scroll relative z-2 opacity-[.65] text-[#4c4d5f]
                  text-[16px] font-[600] tracking-[1.22px] uppercase"
                  >
                    Yearly
                  </div>
                </div>
              </div>
              {/* PRICING MONTHLY */}
              <div className="flex !bg-scroll maxlg:flex-col pt-[40px] justify-between flex-wrap">
                {/* PLAN DIV 1 */}
                <div
                  className="!bg-scroll maxxs:px-[23px] maxxs:pb-[40px] maxlg:w-full maxlg:mb-[30px]
                maxlg:py-[50px] relative flex overflow-hidden w-[32%] py-[6%] px-[4%] flex-col
                border-[0.3px] border-solid border-[rgba(2,4,69, 0.15)] rounded-[4px]
                shadow-[0_0_68_px_0_rgba(2,4,69,8%)]"
                >
                  <div
                    className="!bg-scroll maxmd:text-[1.5rem] font-[600] my-0 text-[1.625rem]
                  leading-[1.4] font-[700]"
                  >
                    Starter
                  </div>
                  <div className="!bg-scroll max-w-[90%]">
                    Ideal for freelancers and contractors just starting out.
                  </div>
                  <div className="!bg-scroll w-full mt-[20px] border-b-[2px] border-b-solid border-b-[#01b289]">
                    <div
                      className="!bg-scroll maxmd:text-[70px] maxmd:leading-[80px] flex items-end text-[62px]
                    leading-[72px] font-[600]"
                    >
                      <span
                        className="!bg-scroll maxxs:text-[28px] leading-[43px] maxmd:leading-[49px]
                      relative top-[10px] mr-[10px] self-start text-[30px] leading-[28px] font-[400]"
                      >
                        $
                      </span>
                      24
                      <span
                        className="!bg-scroll my-0 mr-0 maxmd:text-[1.5rem] maxmd:ml-[1.25rem]
                      maxlg:my-0 maxlg:mr-0 maxlg:ml-[1.5rem] uppercase font-[400] text-[1.625rem]
                      leading-[1.4] font-[700] m-[0.9375rem]"
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <div className="!bg-scroll mb-[25px] pt-[40px]">
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>All Templates</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Unlimited Clients &amp; Projects</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Invoicing &amp; Payments</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Proposals &amp; Contracts</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Tasks &amp; Time Tracking</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Client CRM</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Expense Tracking</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Up to 5 Project Collaborators</div>
                    </div>
                  </div>
                  <div className="mt-auto !bg-scroll mx-0 ml-0">
                    <a
                      className="!bg-scroll maxmd:text-[15px] w-full py-[22px] px-[25px]
                    rounded-[4px] bg-[#00b289] font-bold text-center tracking-[.7px]
                    no-underline uppercase inline-block border-none cursor-pointer"
                    >
                      Start Free
                    </a>
                  </div>
                </div>
                {/* PLAN DIV 2 */}
                <div
                  className="!bg-scroll maxxs:px-[23px] maxxs:pb-[40px] maxlg:w-full maxlg:mb-[30px]
                maxlg:py-[50px] relative flex overflow-hidden w-[32%] py-[6%] px-[4%] flex-col
                border-[0.3px] border-solid border-[rgba(2,4,69, 0.15)] rounded-[4px]
                shadow-[0_0_68_px_0_rgba(2,4,69,8%)]"
                >
                  <div
                    className="!bg-scroll maxmd:text-[1.5rem] font-[600] my-0 text-[1.625rem]
                  leading-[1.4] font-[700]"
                  >
                    Professionnal
                  </div>
                  <div className="!bg-scroll max-w-[90%]">
                    Everything a growing independent business needs to thrive.{" "}
                  </div>
                  <div className="!bg-scroll w-full mt-[20px] border-b-[2px] border-b-solid border-b-[#01b289]">
                    <div
                      className="!bg-scroll maxmd:text-[70px] maxmd:leading-[80px] flex items-end text-[62px]
                    leading-[72px] font-[600]"
                    >
                      <span
                        className="!bg-scroll maxxs:text-[28px] leading-[43px] maxmd:leading-[49px]
                      relative top-[10px] mr-[10px] self-start text-[30px] leading-[28px] font-[400]"
                      >
                        $
                      </span>
                      39
                      <span
                        className="!bg-scroll my-0 mr-0 maxmd:text-[1.5rem] maxmd:ml-[1.25rem]
                      maxlg:my-0 maxlg:mr-0 maxlg:ml-[1.5rem] uppercase font-[400] text-[1.625rem]
                      leading-[1.4] font-[700] m-[0.9375rem]"
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <div className="!bg-scroll mb-[25px] pt-[40px]">
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Everything in Starter plus...</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Custom Branding</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Forms & Questionnaires</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Workflow Automations</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Client Portal</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>QuickBooks Integration</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Calendly Integration</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Zapier Integration</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Up to 15 Project Collaborators</div>
                    </div>
                  </div>
                  <div className="mt-auto !bg-scroll mx-0 ml-0">
                    <a
                      className="!bg-scroll maxmd:text-[15px] w-full py-[22px] px-[25px]
                    rounded-[4px] bg-[#00b289] font-bold text-center tracking-[.7px]
                    no-underline uppercase inline-block border-none cursor-pointer"
                    >
                      Start Free
                    </a>
                  </div>
                </div>
                {/* PLAN DIV 3 */}
                <div
                  className="!bg-scroll maxxs:px-[23px] maxxs:pb-[40px] maxlg:w-full maxlg:mb-[30px]
                maxlg:py-[50px] relative flex overflow-hidden w-[32%] py-[6%] px-[4%] flex-col
                border-[0.3px] border-solid border-[rgba(2,4,69, 0.15)] rounded-[4px]
                shadow-[0_0_68_px_0_rgba(2,4,69,8%)]"
                >
                  <div
                    className="!bg-scroll maxmd:text-[1.5rem] font-[600] my-0 text-[1.625rem]
                  leading-[1.4] font-[700]"
                  >
                    Business
                  </div>
                  <div className="!bg-scroll max-w-[90%]">
                    The perfect package for small businesses and agencies.{" "}
                  </div>
                  <div className="!bg-scroll w-full mt-[20px] border-b-[2px] border-b-solid border-b-[#01b289]">
                    <div
                      className="!bg-scroll maxmd:text-[70px] maxmd:leading-[80px] flex items-end text-[62px]
                    leading-[72px] font-[600]"
                    >
                      <span
                        className="!bg-scroll maxxs:text-[28px] leading-[43px] maxmd:leading-[49px]
                      relative top-[10px] mr-[10px] self-start text-[30px] leading-[28px] font-[400]"
                      >
                        $
                      </span>
                      79
                      <span
                        className="!bg-scroll my-0 mr-0 maxmd:text-[1.5rem] maxmd:ml-[1.25rem]
                      maxlg:my-0 maxlg:mr-0 maxlg:ml-[1.5rem] uppercase font-[400] text-[1.625rem]
                      leading-[1.4] font-[700] m-[0.9375rem]"
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <div className="!bg-scroll mb-[25px] pt-[40px]">
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Everything in Starter and Professional plus...</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Subcontractor Management</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Hiring Agreement Templates (1099 contracts)</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Subcontractor Onboarding</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Talent Pool</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>3 Team Seats (additional seats $9/month)</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Accountant Access</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Connect Multiple Bank Accounts</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Unlimited Subcontractors</div>
                    </div>
                    <div className="!bg-scroll flex pb-[18px] items-center text-[#4c4d5f] text-[16px] leading-[23px]">
                      <FaCheck
                        className="maxxs:my-0 maxxs:ml-0 maxmd:my-0 maxmd:ml-0 maxlg:my-0 maxlg:ml-0
                      my-0 ml-0 mr-[.625rem] text-[#00b289] border-none align-middle inline-block max-w-full
                      w-[12px]"
                      />
                      <div>Unlimited Project Collaborators</div>
                    </div>
                  </div>
                  <div className="mt-auto !bg-scroll mx-0 ml-0">
                    <a
                      className="!bg-scroll maxmd:text-[15px] w-full py-[22px] px-[25px]
                    rounded-[4px] bg-[#00b289] font-bold text-center tracking-[.7px]
                    no-underline uppercase inline-block border-none cursor-pointer"
                    >
                      Start Free
                    </a>
                  </div>
                </div>
                {/* PLAN DIV 4 */}
                <div className="!bg-scroll mx-0 mb-0 maxmd:mt-[4.5rem] w-full max-w-none text-[#4c525a]">
                  <div className="mt-[20px] mb-[40px] !bg-scroll">
                    <h2
                      className="font-normal !bg-scroll maxmd:text-[1.5rem] text-center
                    my-0 leading-[140%] maxmd:text-[24px] maxmd:leading-[36px] mt-[20px]
                    mb-[10px] text-[#4c525a] text-[32px]"
                    >
                      Super charge your work with add-ons
                    </h2>
                  </div>
                  <div
                    className="maxmd:py-[20px] mb-[10px] pt-[10px] px-[40px] pb-[5px]
                  !bg-scroll maxxs:px-[25px] maxmd:flex-col-reverse flex-wrap items-start
                  content-start maxlg:px-[40px] flex justify-between rounded-[8px] bg-[#fff]
                  shadow-[0_0_60px_0_rgb(2,4,69,0.05)]"
                  >
                    <div className="!bg-scroll maxmd:w-full w-[80%] max-w-[600px]">
                      <div
                        className="font-[600] !bg-scroll maxmd:text-[1rem] my-0 text-[1.375rem]
                      leading-[1.4] font-[700]"
                      >
                        Collaborators
                      </div>
                      <div className="!bg-scroll text-[1rem] font-[300]">
                        Invite other users to specific projects for limited
                        access and functionality.
                      </div>
                    </div>
                    <div
                      className="maxxs:pt-0 !bg-scroll maxmd:py-[15px] maxmd:justify-start w-[20%]
                    py-[36px]"
                    >
                      <div
                        className="!bg-scroll maxmd:text-[1.5rem] align-center my-0 text-[2rem]
                      leading-[140%] font-bold"
                      >
                        Free
                        <br />
                      </div>
                    </div>
                  </div>
                  <div
                    className="maxmd:py-[20px] mb-[10px] pt-[10px] px-[40px] pb-[5px]
                  !bg-scroll maxxs:px-[25px] maxmd:flex-col-reverse flex-wrap items-start
                  content-start maxlg:px-[40px] flex justify-between rounded-[8px] bg-[#fff]
                  shadow-[0_0_60px_0_rgb(2,4,69,0.05)]"
                  >
                    <div className="!bg-scroll maxmd:w-full w-[80%] max-w-[600px]">
                      <div
                        className="font-[600] !bg-scroll maxmd:text-[1rem] my-0 text-[1.375rem]
                      leading-[1.4]"
                      >
                        Partners
                      </div>
                      <div className="!bg-scroll text-[1rem] font-[300]">
                        Invite other users for full account access and company
                        management.
                      </div>
                    </div>
                    <div
                      className="!bg-scroll maxmd:py-[15px] maxmd:justify-start w-[20%]
                    py-[36px]"
                    >
                      <div
                        className="!bg-scroll maxmd:text-[2.5rem] align-center my-0 text-[2.75rem]
                      leading-[140%] font-semibold leading-[130%]"
                      >
                        $9
                        <br />
                      </div>
                      <div
                        className="!bg-scroll uppercase text-center text-[.875rem] leading-[133%]
                      font-[400]"
                      >
                        /month
                      </div>
                    </div>
                  </div>
                  {/* ADDONBOX */}
                  <div
                    className="maxmd:py-[20px] mb-[10px] pt-[10px] px-[40px] pb-[5px]
                    !bg-scroll maxxs:px-[25px] maxmd:flex-col-reverse flex-wrap items-start
                    content-start maxlg:px-[40px] flex justify-between rounded-[8px] bg-[#fff]
                    shadow-[0_0_60px_0_rgb(2,4,69,0.05)]"
                  >
                    <div className="!bg-scroll maxmd:w-full w-[80%] max-w-[600px]">
                      <div
                        className="font-[600] !bg-scroll maxmd:text-[1rem] my-0 text-[1.375rem]
                      leading-[1.4]"
                      >
                        Bonsai Tax
                      </div>
                      <div className="!bg-scroll text-[1rem] font-[300] mx-0 ml-0 mr-[.625rem]">
                        Track expenses, identify write-offs, and estimate
                        quarterly taxes easily.
                      </div>
                      <a
                        className="!bg-scroll uppercase flex font-[600] max-w-full inline-block
                      text-[#00b289] no-underline cursor-pointer"
                      >
                        <div>Learn More</div>
                        <AiOutlineRight
                          className="text-[#00b289] relative top-[-1] ml-[6px]
                        border-none align-middle inline-block max-w-full self-center"
                        />
                      </a>
                    </div>
                    <div
                      className="!bg-scroll maxmd:py-[15px] maxmd:justify-start w-[20%]
                    py-[36px]"
                    >
                      <div
                        className="!bg-scroll maxmd:text-[2.5rem] align-center my-0 text-[2.75rem]
                      leading-[140%] font-semibold leading-[130%]"
                      >
                        $10
                        <br />
                      </div>
                      <div
                        className="!bg-scroll uppercase text-center text-[.875rem] leading-[133%]
                      font-[400]"
                      >
                        /month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PRICING YEARLY */}
              <div className="pricing_yearly">YEARLY</div>
            </div>
          </div>
        </div>
        {/* SECTION MAIN 2 */}
        <div className="py-[40px] !bg-scroll relative">
          <div className="!bg-scroll maxmd:px-[1.25rem] px-[2.5rem]">
            <div className="!bg-scroll w-full max-w-[58rem] mx-auto">
              <div
                className="maxxs:pt-[40px] maxxs:px-[15px] maxxs:pb-[50px] justify-center
              maxlg:relative maxlg:z-1 maxlg:py-[3rem] maxlg:py-[2rem] flex flex-wrap text-center
              py-[4rem] px-[3rem] rounded-[8px] bg-[#f2faff]"
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
                py-[9px] px-[15px] border-none no-underline cursor-pointer"
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
                    className="maxxs:mr-[20px] maxxs:pr-[20px] maxms:mx-[9%]
                  mx-[9%] maxmd:text-left maxmd:text-[24px] maxmd:leading-[36px] mt-[20px] font-bold
                  mb-[10px] text-[24px] leading-[38px]"
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
                    className="maxxs:mr-[20px] maxxs:pr-[20px] maxms:mx-[9%]
                  mx-[9%] maxmd:text-left maxmd:text-[24px] maxmd:leading-[36px] mt-[20px] font-bold
                  mb-[10px] text-[24px] leading-[38px]"
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
                    className="maxxs:mr-[20px] maxxs:pr-[20px] maxms:mx-[9%]
                  mx-[9%] maxmd:text-left maxmd:text-[24px] maxmd:leading-[36px] mt-[20px] font-bold
                  mb-[10px] text-[24px] leading-[38px]"
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
                    className="maxxs:mr-[20px] maxxs:pr-[20px] maxms:mx-[9%]
                  mx-[9%] maxmd:text-left maxmd:text-[24px] maxmd:leading-[36px] mt-[20px] font-bold
                  mb-[10px] text-[24px] leading-[38px]"
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

      <footer>FOOTER</footer>
    </div>
  );
}
