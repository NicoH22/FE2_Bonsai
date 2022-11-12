import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavbarProductNavigation = () => {
  const [hoverNavProduct, sethoverNavProduct] = React.useState(false);

  return (
    <div className="absolute hidden group-hover:block">
      <div className="flex flex-row">
        <div>
          <div
            onMouseOver={() => {
              sethoverNavProduct(true);
            }}
            onMouseOut={() => {
              sethoverNavProduct(false);
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
            hoverNavProduct == true
              ? "bg-[#fff] block mt-2"
              : "hidden bg-[#fff] mt-2"
          )}
          onMouseOver={() => {
            sethoverNavProduct(true);
          }}
          onMouseOut={() => {
            sethoverNavProduct(false);
          }}
        >
          <div className="grid h-full p-[10px] auto-cols-fr gap-[16px] grid-cols-1 grid-rows-[auto_auto_auto_auto_auto]">
            <a className="flex min-w-[300px] p-[10px_20px] items-center rounded-[4px] max-w-full cursor-pointer">
              <div className="flex items-start">
                <FaFileInvoiceDollar className="text-[20px]" />
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
                <FaFileInvoiceDollar className="text-[20px]" />
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
                <FaFileInvoiceDollar className="text-[20px]" />
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
                <FaFileInvoiceDollar className="text-[20px]" />
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
                <FaFileInvoiceDollar className="text-[20px]" />
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
                <FaFileInvoiceDollar className="text-[20px]" />
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
                <FaFileInvoiceDollar className="text-[20px]" />
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
                <FaFileInvoiceDollar className="text-[20px]" />
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

const Invoice = (onHover) => {
  return (
    <div
      className={classNames(
        onHover.name == "Invoice" ? "block" : "hidden",
        "!bg-scroll pt-[10px] pb-[44px] px-[44px] flex-col"
      )}
    >
      <div className="!bg-scroll mb-[24px]">
        <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
          Featured Invoice Templates
        </div>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Social Media Invoice Templates
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Contractor Invoice Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Web Design Invoice Template
          </div>
        </a>
        <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Influencer Invoice Template
          </div>
        </a>
      </div>
      <a className="flex mx-auto justify-center text-center">
        See All Templates
      </a>
    </div>
  );
};

const Contract = (onHover) => {
  return (
    <div
      className={classNames(
        onHover.name == "Contract" ? "block" : "hidden",
        "!bg-scroll pt-[10px] pb-[44px] px-[44px] flex-col"
      )}
    >
      <div className="!bg-scroll mb-[24px]">
        <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
          Featured Contract Templates
        </div>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Free Contract Maker
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Social Media Management Contract Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Graphic Design Contract Template
          </div>
        </a>
        <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Digital Marketing Contract Template
          </div>
        </a>
      </div>
      <a className="flex mx-auto justify-center text-center">
        See All Templates
      </a>
    </div>
  );
};

const Proposal = (onHover) => {
  return (
    <div
      className={classNames(
        onHover.name == "Proposal" ? "block" : "hidden",
        "!bg-scroll pt-[10px] pb-[44px] px-[44px] flex-col"
      )}
    >
      <div className="!bg-scroll mb-[24px]">
        <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
          Featured Proposal Templates
        </div>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Graphic Design Proposal Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Business Proposal Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Brand Ambassador Proposal Template
          </div>
        </a>
        <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Data Entry Proposal Letter Template
          </div>
        </a>
      </div>
      <a className="flex mx-auto justify-center text-center">
        See All Templates
      </a>
    </div>
  );
};

const Agreement = (onHover) => {
  return (
    <div
      className={classNames(
        onHover.name == "Agreement" ? "block" : "hidden",
        "!bg-scroll pt-[10px] pb-[44px] px-[44px] flex-col"
      )}
    >
      <div className="!bg-scroll mb-[24px]">
        <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
          Featured Agreement Templates
        </div>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Influencer Agreement Templates
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Influencer Collaboration Agreement Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Monthly Retainer Agreement Template
          </div>
        </a>
        <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Writer Agreement Template
          </div>
        </a>
      </div>
      <a className="flex mx-auto justify-center text-center">
        See All Templates
      </a>
    </div>
  );
};

const Quote = (onHover) => {
  return (
    <div
      className={classNames(
        onHover.name == "Quote" ? "block" : "hidden",
        "!bg-scroll pt-[10px] pb-[44px] px-[44px] flex-col"
      )}
    >
      <div className="!bg-scroll mb-[24px]">
        <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
          Featured Quote Templates
        </div>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Web Design Quotation Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Interior Design Quotation Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Digital Marketing Quotation Template
          </div>
        </a>
        <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Video Production Template
          </div>
        </a>
      </div>
      <a className="flex mx-auto justify-center text-center">
        See All Templates
      </a>
    </div>
  );
};

const Brief = (onHover) => {
  return (
    <div
      className={classNames(
        onHover.name == "Brief" ? "block" : "hidden",
        "!bg-scroll pt-[10px] pb-[44px] px-[44px] flex-col"
      )}
    >
      <div className="!bg-scroll mb-[24px]">
        <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
          Featured Brief Templates
        </div>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Design Brief Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Architecture Design Brief
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Fashion Design Brief
          </div>
        </a>
        <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Creative Brief Template
          </div>
        </a>
      </div>
    </div>
  );
};

const Work = (onHover) => {
  return (
    <div
      className={classNames(
        onHover.name == "Work" ? "block" : "hidden",
        "!bg-scroll pt-[10px] pb-[44px] px-[44px] flex-col"
      )}
    >
      <div className="!bg-scroll mb-[24px]">
        <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
          Featured Scope of Work Templates
        </div>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Website Development Scope of Work Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Digital Marketing Scope of Work Template
          </div>
        </a>
        <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Consultant Scope of Work Template
          </div>
        </a>
        <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-black/10 border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
            Interior Design Scope of Work Template
          </div>
        </a>
      </div>
      <a className="flex mx-auto justify-center text-center">
        See All Templates
      </a>
    </div>
  );
};

export const NavbarTemplatesNavigation = () => {
  const [hoverNavTemplates, setHoverNavTemplates] = React.useState("Contract");

  return (
    <div className="absolute hidden group-hover:block justify-between mt-2">
      <div className="flex flex-row w-full min-w-[200px]">
        <div className="!bg-scroll flex justify-between">
          <div className="!bg-scroll flex pt-[10px] pb-[10px] flex-col justify-start items-start flex-[0_0_auto] bg-[#fff] shadow-[0_1px_60px_0_rgba(2,4,69,0.1)]">
            <a
              onMouseOver={() => {
                setHoverNavTemplates("Contract");
              }}
              className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent no-underline cursor-pointer group/templates"
            >
              <div className="!bg-scroll flex w-full my-[10px] p-[10px_55px_10px_45px]">
                <FaFileInvoiceDollar className="text-[20px] align-middle inline-block max-w-full" />
                <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                  Contract Templates
                </div>
                <AiOutlineRight className="text-[20px] hidden absolute group-hover/templates:block left-[20rem] text-black" />
              </div>
            </a>
            <a
              onMouseOver={() => {
                setHoverNavTemplates("Proposal");
              }}
              className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent no-underline cursor-pointer group/templates"
            >
              <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                <FaFileInvoiceDollar className="text-[20px] align-middle inline-block max-w-full" />
                <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                  Proposal Templates
                </div>
                <AiOutlineRight className="text-[20px] hidden absolute group-hover/templates:block left-[20rem] text-black" />
              </div>
            </a>
            <a
              onMouseOver={() => {
                setHoverNavTemplates("Invoice");
              }}
              className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent no-underline cursor-pointer group/templates"
            >
              <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                <FaFileInvoiceDollar className="text-[20px] align-middle inline-block max-w-full" />
                <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                  Invoice Templates
                </div>
                <AiOutlineRight className="text-[20px] hidden absolute group-hover/templates:block left-[20rem] text-black" />
              </div>
            </a>
            <a
              onMouseOver={() => {
                setHoverNavTemplates("Agreement");
              }}
              className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent no-underline cursor-pointer group/templates"
            >
              <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                <FaFileInvoiceDollar className="text-[20px] align-middle inline-block max-w-full" />
                <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                  Agreement Templates
                </div>
                <AiOutlineRight className="text-[20px] hidden absolute group-hover/templates:block left-[20rem] text-black" />
              </div>
            </a>
            <a
              onMouseOver={() => {
                setHoverNavTemplates("Quote");
              }}
              className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent no-underline cursor-pointer group/templates"
            >
              <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                <FaFileInvoiceDollar className="text-[20px] align-middle inline-block max-w-full" />
                <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                  Quote Templates
                </div>
                <AiOutlineRight className="text-[20px] hidden absolute group-hover/templates:block left-[20rem] text-black" />
              </div>
            </a>
            <a
              onMouseOver={() => {
                setHoverNavTemplates("Work");
              }}
              className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent no-underline cursor-pointer group/templates"
            >
              <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                <FaFileInvoiceDollar className="text-[20px] align-middle inline-block max-w-full" />
                <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                  Scope of Work Templates
                </div>
                <AiOutlineRight className="text-[20px] hidden absolute group-hover/templates:block left-[20rem] text-black" />
              </div>
            </a>
            <div
              onMouseOver={() => {
                setHoverNavTemplates("Brief");
              }}
              className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer group/templates"
            >
              <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                <FaFileInvoiceDollar className="text-[20px] align-middle inline-block max-w-full" />
                <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                  Brief Templates
                </div>
                <AiOutlineRight className="text-[20px] hidden absolute group-hover/templates:block left-[20rem] text-black" />
              </div>
            </div>
          </div>
          <div className="!bg-scroll bg-[#fff]">
            <Invoice name={hoverNavTemplates} />
            <Contract name={hoverNavTemplates} />
            <Proposal name={hoverNavTemplates} />
            <Agreement name={hoverNavTemplates} />
            <Quote name={hoverNavTemplates} />
            <Brief name={hoverNavTemplates} />
            <Work name={hoverNavTemplates} />
          </div>
        </div>
      </div>
    </div>
  );
};
