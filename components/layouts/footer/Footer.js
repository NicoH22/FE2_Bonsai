import { AiOutlineDown } from "react-icons/ai";
import { Disclosure, Transition } from "@headlessui/react";

export default function Footer() {
  return (
    <footer className="!bg-scroll maxmd:pb-[156px] maxmd:pt-[40px] maxlg:px-[5%] pt-[100px] px-[16%] pb-[96px]">
      <div className="!bg-scroll maxmd:flex-wrap flex max-w-[1220px] mx-auto justify-between">
        <div className="!bg-scroll maxmd:block maxmd:w-full maxmd:mt-[20px] maxmd:justify-between maxmd:flex-wrap maxmd:items-start w-[30%]">
          {/* FIRST BLOCK */}
          <div
            className="!bg-scroll maxmd:w-full maxmd:mb-[25px] maxmd:text-[18px] mb-[40px] 
                    text-[#4c4d5f] text-[17px] leading-[24px] font-semibold tracking-[0.12px] uppercase"
          >
            PRODUCT
          </div>
          <div className="!bg-scroll maxxs:w-full maxmd:w-[47%] flex mb-[25px] flex-col items-start">
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Proposals
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Contracts
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Invoicing
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Client CRM
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Time Tracking
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Task Tracking
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Forms
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Accounting
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Bonsai Tax
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Bonsai Cash
            </a>
          </div>
          <div className="!bg-scroll maxxs:w-full maxmd:w-[47%] flex mb-[25px] flex-col items-start">
            <a className="text-[#00b289] !bg-scroll maxmd:text-[16px] mb-[1px] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Pricing
            </a>
            <a className="text-[#4c4d5f] !bg-scroll maxmd:text-[16px] mb-[1px] leading-[30px] font-light tracking-[0.11px] no-underline cursor-pointer">
              Bonsai Reviews
            </a>
          </div>
        </div>
        <div className="!bg-scroll maxmd:block maxmd:w-full maxmd:mt-[20px] maxmd:justify-between maxmd:flex-wrap maxmd:items-start w-[30%]">
          {/* SECOND BLOCK */}
          <div
            className="!bg-scroll maxmd:w-full maxmd:mb-[25px] maxmd:text-[18px] mb-[40px] text-[#4c4d5f] 
                    text-[17px] leading-[24px] font-[600] tracking-[0.12px] uppercase"
          >
            FREE Resources
          </div>
          <div className="!bg-scroll maxxs:w-full maxmd:w-[47%] flex mb-[25px] flex-col items-start">
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.12px] no-underline cursor-pointer">
              Freelance Resources
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.12px] no-underline cursor-pointer">
              Freelance Blog by Bonsai
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.12px] no-underline cursor-pointer">
              How to Write a Contract
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.12px] no-underline cursor-pointer">
              Online Signature Maker
            </a>
          </div>
          <div className="!bg-scroll maxxs:w-full maxmd:w-[47%] flex mb-[25px] flex-col items-start">
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.12px] no-underline cursor-pointer">
              Self-Employed Taxes Hub
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.12px] no-underline cursor-pointer">
              Self-Employed Tax Calculator
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.12px] no-underline cursor-pointer">
              Self-Employed Tax Deductions
            </a>
          </div>
          <div className="!bg-scroll maxxs:w-full maxmd:w-[47%] flex mb-[25px] flex-col items-start">
            <div className="!bg-scroll maxmd:mb-[10px] maxmd:text-[16px] text-[#4c4d5f] text-[17px] leading-[22px] font-[600] tracking-[0.11px]">
              Templates
            </div>
            <div className="!bg-scroll">
              <Disclosure as="div">
                <Disclosure.Button className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer flex items-center">
                  Invoice Templates
                  <AiOutlineDown />
                </Disclosure.Button>
                <Transition
                  enter="transition-transform duration-200 ease-in"
                  enterFrom="transform translate-y-[-5%] opacity-0"
                  enterTo="transform translate-y-0 opacity-100"
                  leave="transition-all duration-[200ms] ease-in"
                  leaveFrom="transform translate-y-0 opacity-100"
                  leaveTo="transform translate-y-[-5%] opacity-0"
                >
                  <Disclosure.Panel className="!bg-scroll">
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Invoice Generator
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Blank Invoice Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Consultant Invoice Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Editable Invoice Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Graphic Design Invoice
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Web Design Invoice
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Contractor Invoice Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Photography Invoice Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Self Employed Invoice Template
                    </a>
                  </Disclosure.Panel>
                </Transition>
              </Disclosure>
            </div>
            <div className="!bg-scroll">
              <Disclosure as="div">
                <Disclosure.Button className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer flex items-center">
                  Proposal Templates
                  <AiOutlineDown />
                </Disclosure.Button>
                <Transition
                  enter="transition-transform duration-200 ease-in"
                  enterFrom="transform translate-y-[-5%] opacity-0"
                  enterTo="transform translate-y-0 opacity-100"
                  leave="transition-all duration-[200ms] ease-in"
                  leaveFrom="transform translate-y-0 opacity-100"
                  leaveTo="transform translate-y-[-5%] opacity-0"
                >
                  <Disclosure.Panel className="!bg-scroll">
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Website Proposal Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Digital Marketing Proposal Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Social Media Marketing Proposal
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Graphic Design Proposal
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Freelance Proposal Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      SEO Proposal Template
                    </a>
                  </Disclosure.Panel>
                </Transition>
              </Disclosure>
            </div>
            <div className="!bg-scroll">
              <Disclosure as="div">
                <Disclosure.Button className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer flex items-center">
                  Contract Templates
                  <AiOutlineDown />
                </Disclosure.Button>
                <Transition
                  enter="transition-transform duration-200 ease-in"
                  enterFrom="transform translate-y-[-5%] opacity-0"
                  enterTo="transform translate-y-0 opacity-100"
                  leave="transition-all duration-[200ms] ease-in"
                  leaveFrom="transform translate-y-0 opacity-100"
                  leaveTo="transform translate-y-[-5%] opacity-0"
                >
                  <Disclosure.Panel className="!bg-scroll">
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Online Contract
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Graphic Design Contract
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Freelance Contract Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Social Media Marketing Contract
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Software Development Contract
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Web Design Contract
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Video Production Contract
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Public Relations Contract
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Translation Contract
                    </a>
                  </Disclosure.Panel>
                </Transition>
              </Disclosure>
            </div>
            <div className="!bg-scroll">
              <Disclosure as="div">
                <Disclosure.Button className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer flex items-center">
                  Agreement Templates
                  <AiOutlineDown />
                </Disclosure.Button>
                <Transition
                  enter="transition-transform duration-200 ease-in"
                  enterFrom="transform translate-y-[-5%] opacity-0"
                  enterTo="transform translate-y-0 opacity-100"
                  leave="transition-all duration-[200ms] ease-in"
                  leaveFrom="transform translate-y-0 opacity-100"
                  leaveTo="transform translate-y-[-5%] opacity-0"
                >
                  <Disclosure.Panel className="!bg-scroll">
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Retainer Agreement Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Influencer Agreement Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Collaboration Agreement Template
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Software Development Agreement
                    </a>
                    <a
                      className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                    >
                      Marketing Agreement Template
                    </a>
                  </Disclosure.Panel>
                </Transition>
              </Disclosure>
            </div>
            <div className="!bg-scroll">
              <div className="!bg-scroll cursor-pointer touch-manipulation flex items-center">
                <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
                  Scope of Work Templates
                </a>
                <AiOutlineDown />
              </div>
              <div className="h-0 !bg-scroll block overflow-hidden">
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Website Development Scope of Work
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Digital Marketing Scope of Work
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Consultant Statement of Work Template
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Software Development Scope of Work
                </a>
              </div>
            </div>
            <div className="!bg-scroll">
              <div className="!bg-scroll cursor-pointer touch-manipulation flex items-center">
                <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
                  Quote Templates
                </a>
                <AiOutlineDown />
              </div>
              <div className="h-0 !bg-scroll block overflow-hidden">
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Freelance Quotation Template
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Web Design Quotation Template
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Graphic Design Quotation Template
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Interior Design Quotation Template
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Video Production Quotation Template
                </a>
                <a
                  className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] text-[#4c4d5f] leading-[30px] 
                    font-[300] tracking-[0.11px] no-underline cursor-pointer"
                >
                  Social Media Marketing Quotation
                </a>
              </div>
            </div>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Credit Note Templates
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Estimate Templates
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Form Templates
            </a>
          </div>
        </div>
        <div className="maxxs:w-full w-auto flex-[0_0_auto] !bg-scroll maxmd:block maxmd:mb-[20px] maxmd:justify-between maxmd:flex-wrap maxmd:items-start w-[30%]">
          {/* THIRD BLOCK */}
          <div
            className="!bg-scroll maxmd:w-full maxmd:mb-[25px] maxmd:text-[18px] mb-[40px] 
            text-[#4c4d5f] text-[17px] leading-[24px] font-[600] tracking-[0.12px] uppercase"
          >
            BONSAI
          </div>
          <div className="!bg-scroll maxxs:w-full maxmd:w-[47%] flex mb-[25px] flex-col items-start">
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              About
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Careers
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Support
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              LinkedIn
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Twitter
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Privacy policy
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Legal
            </a>
          </div>
          <div className="!bg-scroll maxxs:w-full maxmd:w-[47%] flex mb-[25px] flex-col items-start">
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Affiliates
            </a>
            <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
              Write for Us
            </a>
          </div>
          <div className="!bg-scroll">
            <div className="!bg-scroll cursor-pointer touch-manipulation flex items-center">
              <a className="!bg-scroll maxmd:text-[16px] mb-[1px] text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer">
                Comparisons
              </a>
              <AiOutlineDown />
            </div>
            <div className="h-0 !bg-scroll block overflow-hidden">
              <a
                className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] 
                    text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer"
              >
                Freshbooks Alternatives
              </a>
              <a
                className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] 
                    text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer"
              >
                Quickbooks Alternatives
              </a>
              <a
                className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] 
                    text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer"
              >
                Wave vs Quickbooks
              </a>
              <a
                className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] 
                    text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer"
              >
                Xero vs Quickbooks
              </a>
              <a
                className="block mr-0 ml-[8px] !bg-scroll maxmd:text-[16px] maxlg:hidden mb-[1px] 
                    text-[#4c4d5f] leading-[30px] font-[300] tracking-[0.11px] no-underline cursor-pointer"
              >
                Freshbooks vs Quickbooks
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
