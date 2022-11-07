export default function Navbar() {
  return (
    <div className="!bg-scroll sticky left-0 top-0 right-0 bottom-auto z-[100000] bg-[#fff]">
      <div className="will-change-[background] bg-transparent !bg-scroll maxmd:mb-0 maxlg:absolute maxlg:left-0 maxlg:top-0 maxlg:right-0 maxlg:bottom-auto maxlg:overflow-visible maxlg:w-screen maxlg:pl-[5%] maxlg:pr-[5%] mr-auto ml-auto py-[12px] px-0 z-[1000]">
        <div className="!bg-scroll maxmd:pr-5 maxmd:pl-5 pr-10 pl-10">
          <div className="!bg-scroll w-full max-w-[70rem] mr-auto ml-auto">
            <a className="!bg-scroll maxlg:top-[17px] maxlg:z-1 maxlg:pl-0 top-[12px] maxmd:pl-[10px] bg-transparent text-[#00b289] no-underline cursor-pointer">
              <h1>FE2_BONSAI</h1>
            </a>
            <nav className="translate-x-0 translate-y-0 maxlg:hidden !bg-scroll maxxs:flex maxxs:h-screen maxxs:pt-[105px] maxxs:px-[30px] maxxs:flex-col maxmd:flex maxmd:w-full maxmd:px-[50px] maxmd:flex-col maxlg:left-0 maxlg:top-0 maxlg:right-0 maxlg:bottom-0 maxlg:z-[9998] maxlg:block maxlg:w-screen maxlg:h-full maxlg:max-w-full maxlg:min-h-screen maxlg:pt-[123px] maxlg:px-[40px] maxlg:justify-center maxlg:bg-[#fff] flex w-full max-w-[75%] justify-end items-center relative float-right block">
              <div className="!bg-scroll maxlg:flex-col flex mr-[5%] justify-between">
                <div className="relative cursor-pointer !bg-scroll touch-manipulation maxlg:mr-0 maxlg:p-y-[16px] maxlg:border-b-1 maxlg:border-b-solid maxlg:border-b-[#c3c3c3] relative flex mr-[40px] justify-between items-center text-[#4c4d5f] text-[17px] leading-[22px]">
                  <div className="maxlg:pt-0 maxlg:pb-0 pr-[8px] flex py-[16px] pr-[12px] pl-0 justify-between text-[#4c4d5f] text-[17px] font-[400]">
                    Product
                  </div>
                  <div className="relative mr-0 mr-[6px] bg-50% bg-auto bg-no-repeat bg-transparent absolute top-0 right-0 bottom-0 my-auto ml-auto mr-[20px] w-[1em] h-[1em] not-italic font-normal normal-nums normal-case leading-none "></div>
                  <div className="hidden absolute left-[-150%] top-full flex justify-between">
                    <div className="fixed left-0 top-0 right-0 bottom-0 z-[2] hidden w-full h-screen mt-[76px] justify-start items-center">
                      <div className="maxmd:max-w-none maxmd:items-start maxlg:max-w-none maxlg:items-start maxlg:text-left flex w-full max-w-[352px] min-w-[350px] pt-[40px] pb-0 px-[40px] flex-col justify-center">
                        <div className="border-transparent maxmd:flex maxmd:flex-col maxmd:items-start maxmd:text-left w-full pb-[40px] border-b border-solid border-transparent">
                          <div className="!bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px] ">
                            Bonsai Workflow
                          </div>
                          <div className="!bg-scroll text-[#4d4d4d]">
                            Look professional, win more clients and manage your
                            business from one place
                          </div>
                        </div>
                      </div>
                      <a className="!bg-scroll maxmd:max-w-none maxlg:max-w-none maxlg:items-start text-left flex w-full max-w-[352px] min-w-[350px] pt-[40px] px-[40px] pb-0 flex-col justify-center max-w-full inline-block bg-transparent text-[#00b289] cursor-pointer">
                        <div className="bg-transparent !bg-scroll maxmd:flex maxmd:flex-col maxmd:items-start maxmd:text-left w-full pb-[40px] border-b border-solid border-transparent">
                          <div className="!bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Bonsai Tax
                          </div>
                          <div className="text-[#4d4d4d]">
                            &quot;Track expenses, maximize tax write-offs, and
                            estimate taxes without the headache&quot;
                          </div>
                        </div>
                      </a>
                      <a className="maxmd:max-w-none maxlg:max-w-none maxlg:items-start maxlg:text-left flex w-full max-w-[352px] max-w-[350px] pt-[40px] pb-0 px-[40px] flex-col justify-center w-full inline-block bg-transparent text-[#00b289] cursor-pointer">
                        <div className="border-transparent maxmd:flex maxmd:flex-col maxmd:items-start maxmd:text-left w-full pb-[40px] border border-solid ">
                          <div className="mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Bonsai Cash
                          </div>
                          <div className="text-[#4d4d4d]">
                            Bonsai&apos;s all in-one financial hub: No fees and
                            lightning fast payouts
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="opacity-0 maxlg:fixed maxlg:left-0 maxlg:right-0 maxlg:top-0 maxlg:bottom-0 maxlg:z-[2] maxlg:hidden bg-[#fff]">
                      <div className="maxlg:flex maxlg:flex-col maxlg:grid-cols-1 grid h-full p-[10px] auto-cols-fr gap-[16px] grid-cols-1 grid-rows-[auto]">
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Invoices
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                Get paid faster with automatic invoicing, online
                                payments and more
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Proposals
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                &quot;Create client-winning proposals with open
                                receipts, custom packages and electronic
                                approvals&quot;
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Contracts
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                &quot;Protect your business with
                                fully-customizable contract templates. Edit and
                                e-sign hassle free.&quot;
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Client CRM
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                Add leads, manage existing clients and track
                                projects easily fro one place
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Forms & Automations
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                &quot;Boost client intake and automate feedback
                                with custom web forms and questionnaires&quot;
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Time Tracking
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                &quot;Stay organized with Bonsai&apos;s
                                all-in-one tracket, automated timesheets and
                                billing system&quot;
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Accounting
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                &quot;Manage your finances easily with income
                                reports, expense tracking, tax reminders and
                                more&quot;
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="maxlg:min-w-0 flex min-w-[300px] py-[10px] px-[20px] items-center rounded max-w-full inline-block bg-transparent text-[00b289] no-underline cursor-pointer">
                          <div className="flex items-start">
                            <img />
                            <div className="ml-[12px]">
                              <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                                Task Tracking
                              </div>
                              <div className="text-[#6d6d6d] text-[13px] leading-[13px] font-normal">
                                Stress-free task management with project
                                templates and integrated timesheets
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative cursor-pointer maxlg:mr-0 maxlg:pt-[16px] maxlg:pb-[16px] maxlg:border maxlg:border-solid maxlg:border-[#c3c3c3] flex justify-between items-center text-[#4c4d5f] text-[17px] leading-[22px]">
                  <div className="maxlg:py-0 pr-[8px] flex py-[16px] pr-[12px] pl-0 justify-between text-[#4c4d5f] text-[17px] font-normal">
                    Templates
                  </div>
                  <div className="relative mr-0 mr-[6px] bg-[50%] bg-auto bg-no-repeat text-transparent absolute top-0 right-0 bottom-0 my-auto mr-[20px] ml-auto w-[1em] h-[1em] not-italic font-normal normal-nums normal-case leading-none"></div>
                  <div className="hidden !bg-scroll hidden absolute left-[-150%] top-[100%] flex justify-between">
                    <div className="!bg-scroll maxlg:pt-[47px] flex pt-[10px] pb-[10px] flex-col justify-start items-start flex-[0_0_auto] bg-[#fff] shadow-[0_1px_60px_0_rgba(2,4,69,0.1)]">
                      <a className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                        <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                          <img />
                          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                            Contract Templates
                          </div>
                        </div>
                      </a>
                      <a className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                        <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                          <img />
                          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                            Proposal Templates
                          </div>
                        </div>
                      </a>
                      <a className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                        <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                          <img />
                          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                            Invoice Templates
                          </div>
                        </div>
                      </a>
                      <a className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                        <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                          <img />
                          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                            Agreement Templates
                          </div>
                        </div>
                      </a>
                      <a className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                        <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                          <img />
                          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                            Quote Templates
                          </div>
                        </div>
                      </a>
                      <a className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                        <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                          <img />
                          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                            Scope of Work Templates
                          </div>
                        </div>
                      </a>
                      <div className="!bg-scroll flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer">
                        <div className="!bg-scroll flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                          <img />
                          <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                            Brief Templates
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="!bg-scroll bg-[#fff]">
                      <div className="!bg-scroll hidden pt-[10px] pb-[44px] px-[44px] flex-col">
                        <div className="!bg-scroll mb-[24px]">
                          <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Featured Invoice Templates
                          </div>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Social Media Invoice Templates
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Contractor Invoice Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Web Design Invoice Template
                            </div>
                          </a>
                          <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Influencer Invoice Template
                            </div>
                          </a>
                        </div>
                        <a className="flex mx-auto justify-center text-center">
                          See All Templates
                        </a>
                      </div>
                      <div className="!bg-scroll hidden pt-[10px] pb-[44px] px-[44px] flex-col">
                        <div className="!bg-scroll mb-[24px]">
                          <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Featured Contract Templates
                          </div>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Free Contract Maker
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Social Media Management Contract Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Graphic Design Contract Template
                            </div>
                          </a>
                          <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Digital Marketing Contract Template
                            </div>
                          </a>
                        </div>
                        <a className="flex mx-auto justify-center text-center">
                          See All Templates
                        </a>
                      </div>
                      <div className="!bg-scroll hidden pt-[10px] pb-[44px] px-[44px] flex-col">
                        <div className="!bg-scroll mb-[24px]">
                          <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Featured Agreement Templates
                          </div>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Influencer Agreement Templates
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Influencer Collaboration Agreement Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Monthly Retainer Agreement Template
                            </div>
                          </a>
                          <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Writer Agreement Template
                            </div>
                          </a>
                        </div>
                        <a className="flex mx-auto justify-center text-center">
                          See All Templates
                        </a>
                      </div>
                      <div className="!bg-scroll hidden pt-[10px] pb-[44px] px-[44px] flex-col">
                        <div className="!bg-scroll mb-[24px]">
                          <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Featured Quote Templates
                          </div>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Web Design Quotation Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Interior Design Quotation Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Digital Marketing Quotation Template
                            </div>
                          </a>
                          <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Video Production Template
                            </div>
                          </a>
                        </div>
                        <a className="flex mx-auto justify-center text-center">
                          See All Templates
                        </a>
                      </div>
                      <div className="!bg-scroll hidden pt-[10px] pb-[44px] px-[44px] flex-col">
                        <div className="!bg-scroll mb-[24px]">
                          <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Featured Brief Templates
                          </div>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Design Brief Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Architecture Design Brief
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Fashion Design Brief
                            </div>
                          </a>
                          <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Creative Brief Template
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="!bg-scroll hidden pt-[10px] pb-[44px] px-[44px] flex-col">
                        <div className="!bg-scroll mb-[24px]">
                          <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Featured Proposal Templates
                          </div>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Graphic Design Proposal Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Business Proposal Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Brand Ambassador Proposal Template
                            </div>
                          </a>
                          <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Data Entry Proposal Letter Template
                            </div>
                          </a>
                        </div>
                        <a className="flex mx-auto justify-center text-center">
                          See All Templates
                        </a>
                      </div>
                      <div className="!bg-scroll hidden pt-[10px] pb-[44px] px-[44px] flex-col">
                        <div className="!bg-scroll mb-[24px]">
                          <div className="mb-[24px] whitespace-nowrap !bg-scroll mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                            Featured Scope of Work Templates
                          </div>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Website Development Scope of Work Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Digital Marketing Scope of Work Template
                            </div>
                          </a>
                          <a className="bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Consultant Scope of Work Template
                            </div>
                          </a>
                          <a className="mb-0 bg-[50%] bg-cover bg-no-repeat !bg-scroll w-full min-w-[387px] mb-[10px] py-[28px] px-[32px] border border-transparent border-solid rounded text-center whitespace-nowrap max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                            <div className="!bg-scroll ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                              Interior Design Scope of Work Template
                            </div>
                          </a>
                        </div>
                        <a className="flex mx-auto justify-center text-center">
                          See All Templates
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="maxlg:mr-0 maxlg:py-[16px] maxlg:border maxlg:border-solid maxlg:border-[#c3c3c3] flex mr-[40px] justify-between justify-between text-[#4c4d5f] text-[17px] leading-[22px] bg-transparent text-[#00b289] no-underline cursor-pointer">
                  Pricing
                </a>
                <a className="maxlg:mr-0 maxlg:py-[16px] maxlg:border maxlg:border-solid maxlg:border-[#c3c3c3] hidden flex mr-[40px] justify-between justify-between text-[#4c4d5f] text-[17px] leading-[22px] bg-transparent text-[#00b289] no-underline cursor-pointer">
                  Resource Hub
                </a>
                <a className="maxlg:mr-0 maxlg:py-[16px] maxlg:border maxlg:border-solid maxlg:border-[#c3c3c3] flex mr-[40px] justify-between justify-between text-[#4c4d5f] text-[17px] leading-[22px] bg-transparent text-[#00b289] no-underline cursor-pointer">
                  Reviews
                </a>
                <a className="maxlg:mb-[48px] maxlg:mr-0 maxlg:py-[16px] maxlg:border maxlg:border-solid maxlg:border-[#c3c3c3] hidden flex mr-[40px] justify-between justify-between text-[#4c4d5f] text-[17px] leading-[22px] bg-transparent text-[#00b289] no-underline cursor-pointer">
                  Company
                </a>
                <img />
              </div>
              <div className="maxlg:mt-[20px] maxlg:flex-col">
                <a className="px-[22px] border border-solid border-[#00b289] bg-transparent text-[#00b289] maxxs:block maxxs:w-auto maxlg:w-full maxlg:mb-[20px] maxlg:ml-0 maxlg:py-[13px] ml-[17px] pt-[12px] px-[27px] pb-[9px] border border-solid border-[#00b289] rounded bg-[#00b289] text-[#fff] text-[13px] leading-[16px] font-bold text-center tracking-[.6px] uppercase inline-block py-[9px] px-[15px] bg-[#3898ec] text-[#fff] border-0 cursor-pointer rounded-none bg-transparent text-[#00b289] no-underline cursor-pointer">
                  Log In
                </a>
                <a className="maxxs:block maxxs:w-auto maxlg:w-full maxlg:mb-[20px] maxlg:ml-0 maxlg:my-[13px] ml-[17px] pt-[12px] px-[27px] pb-[9px] border border-solid border-[#00b289] rounded bg-[#00b289] text-[#fff] text-[13px] leading-[16px] font-bold text-center tracking-[.6px] uppercase inline-block py-[9px] px-[15px] bg-[#3898ec] text-[#fff] border-0 cursor-pointer rounded-none bg-transparent text-[#00b289] no-underline cursor-pointer">
                  start free
                </a>
              </div>
              <div className="maxmd:hidden maxlg:absolute maxlg:left-0 maxlg:right-0 maxlg:top-0 maxlg:bottom-0 maxlg:z-[5] maxlg:hidden maxlg:w-full maxlg:mt-[76px] maxlg:pt-[47px] maxlg:bg-[#fff] hidden">
                <div className="maxlg:z-[2] bg-[#fff]">
                  <div className="maxlg:flex maxlg:flex-col grid-cols-1 grid h-full p-2.5 auto-cols-fr gap-[16px] grid-cols-1 grid-rows-[auto]">
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="side-dropdown-content">
                        <div className="side-dropdown-heading">Invoices</div>
                      </div>
                    </a>
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="ml-[12px]">
                        <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                          Proposals
                        </div>
                      </div>
                    </a>
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="ml-[12px]">
                        <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                          Contracts
                        </div>
                      </div>
                    </a>
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="ml-[12px]">
                        <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                          Client CRM
                        </div>
                      </div>
                    </a>
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="ml-[12px]">
                        <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                          Forms & Automations
                        </div>
                      </div>
                    </a>
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="ml-[12px]">
                        <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                          Time Tracking
                        </div>
                      </div>
                    </a>
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="ml-[12px]">
                        <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                          Accounting
                        </div>
                      </div>
                    </a>
                    <a className="maxlg:min-w-0 flex min-w-[300px] px-[20px] py-[10px] items-center rounded max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                      <img />
                      <div className="ml-[12px]">
                        <div className="maxlg:font-semibold mb-[10px] text-[#4d4d4d] text-[15px] leading-[18px]">
                          Task Tracking
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden maxlg:absolute maxlg:left-0 maxlg:top-0 maxlg:right-0 maxlg:bottom-0 maxlg:z-[3] maxlg:hidden maxlg:w-full maxlg:mt-[76px] maxlg:bg-[#fff] hidden">
                <div className="maxmd:items-start maxlg:z-[2] maxlg:w-full maxlg:h-screen maxlg:pt-[47px] maxlg:justify-start maxlg:items-center flex flex-col justify-start items-start grow-0 shrink-0 basis-0 bg-[#fff] shadow-[0_1px_60px_0_rgba(2,4,69,0.1)]">
                  <div className="maxmd:max-w-none maxmd:items-start maxmd:max-w-none maxlg:max-w-none maxlg:items-start maxlg:text-left flex w-full max-w-[352px] min-w-[350px] pt-[40px] pb-0 px-[40px] flex-col justify-center">
                    <div className="border-transparent maxmd:flex maxmd:flex-col maxmd:items-start maxmd:text-left w-full pb-[40px] border border-solid border-transparent">
                      <div className="mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                        Bonsai Workflow
                      </div>
                      <div className="text-[#4d4d4d]">
                        Organize your business & look professional
                      </div>
                    </div>
                  </div>
                  <a className="maxmd:max-w-none maxlg:max-w-none maxlg:items-start maxlg:text-left flex w-full max-w-[352px] min-w-[350px] pt-[40px] pb-0 px-[40px] flex-col justify-center max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="border-transparent maxmd:flex maxmd:flex-col maxmd:items-start maxmd:text-left w-full pb-[40px] border border-solid border-transparent">
                      <div className="mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                        Bonsai Tax
                      </div>
                      <div className="text-[#4d4d4d]">
                        Maximize write-offs, and estimate and save for 1099
                        taxes
                      </div>
                    </div>
                  </a>
                  <a className="maxmd:max-w-none maxlg:max-w-none maxlg:items-start maxlg:text-left flex w-full max-w-[352px] min-w-[350px] pt-[40px] pb-0 px-[40px] flex-col justify-center max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="border-transparent maxmd:flex maxmd:flex-col maxmd:items-start maxmd:text-left w-full pb-[40px] border border-solid border-transparent">
                      <div className="mb-[10px] text-[#292a2d] text-[22px] leading-[26px]">
                        Bonsai Cash
                      </div>
                      <div className="text-[#4d4d4d]">
                        Manage your money with a no-fee business account
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="maxmd:hidden maxlg:absolute maxlg:left-0 maxlg:right-0 maxlg:top-0 maxlg:bottom-0 maxlg:z-[2] maxlg:hidden maxlg:w-full maxlg:mt-[76px] maxlg:bg-[#fff] hidden">
                <div className="maxlg:pt-[47px] flex pt-[10px] pb-[10px] flex-col justify-start items-start grow-0 shrink-0 basis-0 bg-[#fff] shadow-[0_1px_60px_0_rgba(2,4,69,0.1)]">
                  <a className="flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                      <img />
                      <div className="ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                        Contract Templates
                      </div>
                    </div>
                  </a>
                  <a className="flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                      <img />
                      <div className="ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                        Proposal Templates
                      </div>
                    </div>
                  </a>
                  <a className="flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                      <img />
                      <div className="ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                        Invoice Templates
                      </div>
                    </div>
                  </a>
                  <a className="flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                      <img />
                      <div className="ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                        Agreement Templates
                      </div>
                    </div>
                  </a>
                  <a className="flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                      <img />
                      <div className="ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                        Quote Templates
                      </div>
                    </div>
                  </a>
                  <a className="flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                      <img />
                      <div className="ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                        Scope of Work Templates
                      </div>
                    </div>
                  </a>
                  <a className="flex w-full min-w-[202px] items-center whitespace-nowrap cursor-pointer max-w-full inline-block bg-transparent text-[#00b289] no-underline cursor-pointer">
                    <div className="flex w-full my-[10px] py-[10px] pr-[55px] pl-[45px]">
                      <img />
                      <div className="ml-[10px] text-[#292a2d] text-[15px] leading-[18px]">
                        Brief Templates
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
            <div className="maxlg:block maxlg:!bg-scroll maxlg:z-[9999] maxlg:bg-transparent overflow-hidden w-[60px] h-[60px] bg-[#4de79d] relative float-right p-[18px] t-[24px] hidden cursor-pointer select-none">
              <div className="maxlg:h-[3px] maxlg:rounded-[10px] maxlg:bg-[#4c4d5f] maxlg:text-[#4c4d5f] bg-[#fff] top-[18px] !bg-scroll absolute left-0 top-[10px] right-0 z-[2] block w-[35px] h-[2px] mr-auto ml-auto bg-[#7a7a7a]"></div>
              <div className="opacity-100 maxlg:h-[3px] maxlg:rounded-[10px] maxlg:bg-[#4c4d5f] bg-[#fff] top-[28px] !bg-scroll absolute left-0 top-[20px] right-0 z-[1] block w-[35px] h-[2px] mr-auto ml-auto bg-[#7a7a7a]"></div>
              <div className="maxlg:h-[3px] maxlg:rounded-[10px] maxlg:bg-[#4c4d5f] bg-[#fff] top-[38px] !bg-scroll absolute left-0 top-[30px] right-0 z-[2] block w-[35px] h-[2px] mr-auto ml-auto bg-[#7a7a7a]"></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}