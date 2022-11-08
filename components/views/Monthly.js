import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

export default class Monthly extends Component {
  render() {
    return (
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
        no-underline uppercase inline-block border-none cursor-pointer
        text-white hover:bg-[#00a37e]"
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
          <div className="!bg-scroll max-w-[90%] text-[13px]">
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
        no-underline uppercase inline-block border-none cursor-pointer
        text-white hover:bg-[#00a37e]"
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
        no-underline uppercase inline-block border-none cursor-pointer
        text-white hover:bg-[#00a37e]"
            >
              Start Free
            </a>
          </div>
        </div>
        {/* PLAN DIV 4 */}
        <div className="!bg-scroll mx-0 mb-0 maxmd:mt-[4.5rem] mt-[5rem] w-full max-w-none text-[#4c525a]">
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
      !bg-scroll maxxs:px-[25px] maxmd:flex-col-reverse flex-wrap maxmd:items-start
      content-start maxlg:px-[40px] flex justify-between rounded-[8px] bg-[#fff]
      shadow-[0_0_60px_0_rgb(2,4,69,0.05)] items-center"
          >
            <div className="!bg-scroll maxmd:w-full w-[80%] max-w-[600px]">
              <div
                className="font-[600] !bg-scroll maxmd:text-[1rem] my-0 text-[1.375rem]
          leading-[1.4] font-[700]"
              >
                Collaborators
              </div>
              <div className="!bg-scroll text-[1rem] font-[300]">
                Invite other users to specific projects for limited access and
                functionality.
              </div>
            </div>
            <div
              className="maxxs:pt-0 !bg-scroll maxmd:py-[15px] maxmd:justify-start w-[20%]
        py-[36px]"
            >
              <div
                className="!bg-scroll maxmd:text-[1.5rem] align-center my-0 text-[2rem]
          leading-[140%] font-bold text-center"
              >
                Free
                <br />
              </div>
            </div>
          </div>
          <div
            className="maxmd:py-[20px] mb-[10px] pt-[10px] px-[40px] pb-[5px]
      !bg-scroll maxxs:px-[25px] maxmd:flex-col-reverse flex-wrap maxmd:items-start
      content-start maxlg:px-[40px] flex justify-between rounded-[8px] bg-[#fff]
      shadow-[0_0_60px_0_rgb(2,4,69,0.05)] items-center"
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
          leading-[140%] font-semibold leading-[130%] text-center"
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
            className="maxmd:py-[20px] mb-[10px] p-[30px_40px_25px]
            !bg-scroll maxxs:px-[25px] maxmd:flex-col-reverse flex-wrap maxmd:items-start
            content-start maxlg:px-[40px] flex justify-between rounded-[8px] bg-[#fff]
            shadow-[0_0_60px_0_rgb(2,4,69,0.05)] items-center"
          >
            <div className="!bg-scroll maxmd:w-full w-[80%] max-w-[600px]">
              <div
                className="font-[600] !bg-scroll maxmd:text-[1rem] my-0 text-[1.375rem]
          leading-[1.4]"
              >
                Bonsai Tax
              </div>
              <div className="!bg-scroll text-[1rem] font-[300] mx-0 ml-0 mr-[.625rem]">
                Track expenses, identify write-offs, and estimate quarterly
                taxes easily.
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
          leading-[140%] font-semibold leading-[130%] text-center"
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
    );
  }
}
