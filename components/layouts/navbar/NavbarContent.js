import React, { useRef } from "react";
import { TbFileDollar } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";

export const NavbarMainNavigation = () => {
  const [hoverNav, setHoverNav] = React.useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const hoverNavClass = () => {
    if (hoverNav == true) {
      return " bg-[#fff] block mt-2";
    } else {
      return "hidden bg-[#fff] mt-2";
    }
  };

  return (
    <div className="absolute hidden group-hover:block">
      <div className="flex flex-row">
        <div>
          <div
            onMouseOver={() => {
              setHoverNav(true), console.log(hoverNav);
            }}
            onMouseOut={() => {
              setHoverNav(false), console.log(hoverNav);
            }}
            className="flex flex-wrap justify-start items-start flex-[0_0_auto] shadow-lg text-black mt-2 group/workflow"
          >
            <div className="bg-[#FCFCFC] flex w-full max-w-[352px] min-w-[352px] p-[40px_40px_0] flex-col justify-center cursor-pointer">
              <div className="border-b border-black/10 w-full pb-[40px] flex justify-between items-center">
                <div>
                  <div className="mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                    Bonsai Workflow
                  </div>
                  <div className="!bg-scroll text-[#4d4d4d]">
                    Look professional, win more clients and manage your business
                    from one place
                  </div>
                </div>
                <AiOutlineRight className="text-[25px] hidden absolute group-hover/workflow:block left-[22rem]" />
              </div>
            </div>
          </div>
          <a className="bg-[#FCFCFC] flex w-full max-w-[352px] min-w-[352px] p-[40px_40px_0] flex-col justify-center cursor-pointer">
            <div className="border-b border-black/10 w-full pb-[40px]">
              <div className="mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                Bonsai Tax
              </div>
              <div className="text-[#4d4d4d]">
                &quot;Track expenses, maximize tax write-offs, and estimate
                taxes without the headache&quot;
              </div>
            </div>
          </a>
          <a className="bg-[#FCFCFC] flex w-full max-w-[352px] min-w-[352px] p-[40px_40px_0] flex-col justify-center cursor-pointer">
            <div className="border-b border-black/10 w-full pb-[40px]">
              <div className="mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                Bonsai Cash
              </div>
              <div className="text-[#4d4d4d]">
                Bonsai&apos;s all in-one financial hub: No fees and lightning
                fast payouts
              </div>
            </div>
          </a>
        </div>
        <div
          className={classNames(
            hoverNav == true ? "bg-[#fff] block mt-2" : "hidden bg-[#fff] mt-2",
            ""
          )}
          onMouseOver={() => {
            setHoverNav(true), console.log(hoverNav);
          }}
          onMouseOut={() => {
            setHoverNav(false), console.log(hoverNav);
          }}
        >
          <div className="grid h-full p-[10px] auto-cols-fr gap-[16px] grid-cols-1 grid-rows-[auto_auto_auto_auto_auto]">
            <a className="flex min-w-[300px] p-[10px_20px] items-center rounded-[4px] max-w-full cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Invoices
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    Get paid faster with automatic invoicing, online payments
                    and more
                  </div>
                </div>
              </div>
            </a>
            <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Proposals
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    &quot;Create client-winning proposals with open receipts,
                    custom packages and electronic approvals&quot;
                  </div>
                </div>
              </div>
            </a>
            <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Contracts
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    &quot;Protect your business with fully-customizable contract
                    templates. Edit and e-sign hassle free.&quot;
                  </div>
                </div>
              </div>
            </a>
            <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Client CRM
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    Add leads, manage existing clients and track projects easily
                    fro one place
                  </div>
                </div>
              </div>
            </a>
            <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Forms & Automations
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    &quot;Boost client intake and automate feedback with custom
                    web forms and questionnaires&quot;
                  </div>
                </div>
              </div>
            </a>
            <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Time Tracking
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    &quot;Stay organized with Bonsai&apos;s all-in-one tracket,
                    automated timesheets and billing system&quot;
                  </div>
                </div>
              </div>
            </a>
            <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Accounting
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    &quot;Manage your finances easily with income reports,
                    expense tracking, tax reminders and more&quot;
                  </div>
                </div>
              </div>
            </a>
            <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
              <div className="flex items-start">
                <TbFileDollar />
                <div className="ml-[12px]">
                  <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                    Task Tracking
                  </div>
                  <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                    Stress-free task management with project templates and
                    integrated timesheets
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavbarBonsaiWorkflowNavigation = () => {
  return (
    <div className="opacity-0 maxlg:fixed maxlg:left-0 maxlg:right-0 maxlg:top-0 maxlg:bottom-0 maxlg:z-[2] maxlg:hidden bg-[#fff]">
      <div className="maxlg:flex maxlg:flex-col maxlg:grid-cols-1 grid h-full p-[10px] auto-cols-fr gap-[16px] grid-cols-1 grid-rows-[auto]">
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Invoices
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                Get paid faster with automatic invoicing, online payments and
                more
              </div>
            </div>
          </div>
        </a>
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Proposals
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                &quot;Create client-winning proposals with open receipts, custom
                packages and electronic approvals&quot;
              </div>
            </div>
          </div>
        </a>
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Contracts
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                &quot;Protect your business with fully-customizable contract
                templates. Edit and e-sign hassle free.&quot;
              </div>
            </div>
          </div>
        </a>
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Client CRM
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                Add leads, manage existing clients and track projects easily fro
                one place
              </div>
            </div>
          </div>
        </a>
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Forms & Automations
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                &quot;Boost client intake and automate feedback with custom web
                forms and questionnaires&quot;
              </div>
            </div>
          </div>
        </a>
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Time Tracking
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                &quot;Stay organized with Bonsai&apos;s all-in-one tracket,
                automated timesheets and billing system&quot;
              </div>
            </div>
          </div>
        </a>
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Accounting
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                &quot;Manage your finances easily with income reports, expense
                tracking, tax reminders and more&quot;
              </div>
            </div>
          </div>
        </a>
        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
          <div className="flex items-start">
            <TbFileDollar />
            <div className="ml-[12px]">
              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                Task Tracking
              </div>
              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                Stress-free task management with project templates and
                integrated timesheets
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
