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
                            <div className="maxlg:pt-0 maxlg:pb-0 pr-[8px] flex py-[16px] pr-[12px] pl-0 justify-between text-[#4c4d5f] text-[17px] font-[400]">Product</div>
                            <div className="relative mr-0 mr-[6px] bg-50% bg-auto bg-no-repeat bg-transparent absolute top-0 right-0 bottom-0 my-auto ml-auto mr-[20px] w-[1em] h-[1em] not-italic font-normal normal-nums normal-case leading-none "></div>
                            <div className="main-nav-dropdown-wrapper hidden">
                                <div className="main-nav-left-content">
                                    <div className="main-nav-inside-dropdown-toggle arrow-bg">
                                        <div className="main-nav-inside-content-wrapper">
                                            <div className="main-nav-inside-dropdown-heading">Bonsai Workflow</div>
                                            <div className="main-nav-inside-dropdown-subheading">Look professional, win more clients and manage your business from one place</div>
                                        </div>
                                    </div>
                                    <a className="main-nav-inside-dropdown-toggle w-inline-block">
                                        <div className="main-nav-inside-content-wrapper">
                                            <div className="main-nav-inside-dropdown-heading">Bonsai Tax</div>
                                            <div className="main-nav-inside-dropdown-subheading">&quot;Track expenses, maximize tax write-offs, and estimate taxes without the headache&quot;</div>
                                        </div>
                                    </a>
                                    <a className="main-nav-inside-dropdown-toggle w-inline-block">
                                        <div className="main-nav-inside-content-wrapper">
                                            <div className="main-nav-inside-dropdown-heading">Bonsai Cash</div>
                                            <div className="main-nav-inside-dropdown-subheading">Bonsai&apos;s all in-one financial hub: No fees and lightning fast payouts</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="main-nav-right-content">
                                    <div className="side-dropdown-grid">
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Invoices</div>
                                                    <div className="side-dropdown-text">Get paid faster with automatic invoicing, online payments and more</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Proposals</div>
                                                    <div className="side-dropdown-text">&quot;Create client-winning proposals with open receipts, custom packages and electronic approvals&quot;</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Contracts</div>
                                                    <div className="side-dropdown-text">&quot;Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.&quot;</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Client CRM</div>
                                                    <div className="side-dropdown-text">Add leads, manage existing clients and track projects easily fro one place</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Forms & Automations</div>
                                                    <div className="side-dropdown-text">&quot;Boost client intake and automate feedback with custom web forms and questionnaires&quot;</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Time Tracking</div>
                                                    <div className="side-dropdown-text">&quot;Stay organized with Bonsai&apos;s all-in-one tracket, automated timesheets and billing system&quot;</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Accounting</div>
                                                    <div className="side-dropdown-text">&quot;Manage your finances easily with income reports, expense tracking, tax reminders and more&quot;</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="side-dropdown-link-block w-inline-block">
                                            <div className="side-dropdown-inner-link">
                                                <img />
                                                <div className="side-dropdown-content">
                                                    <div className="side-dropdown-heading">Task Tracking</div>
                                                    <div className="side-dropdown-text">Stress-free task management with project templates and integrated timesheets</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-nav-link relative">
                            <div className="main-nav-dropdown-toggle">Templates</div>
                            <div className="dropdown-arrow no-margin-right w-icon-dropdown-toggle"></div>
                            <div className="main-nav-dropdown-wrapper-hidden">
                                <div className="main-nav-left-content-templates">
                                    <a className="main-nav-item---2 w-inline-block">
                                        <div className="main-nav-item-wrapper">
                                            <img />
                                            <div className="template-main-nav-inside-dropdown-heading">Contract Templates</div>
                                        </div>
                                    </a>
                                    <a className="main-nav-item---7 w-inline-block">
                                        <div className="main-nav-item-wrapper">
                                            <img />
                                            <div className="template-main-nav-inside-dropdown-heading">Proposal Templates</div>
                                        </div>
                                    </a>
                                    <a className="main-nav-item---1 w-inline-block">
                                        <div className="main-nav-item-wrapper">
                                            <img />
                                            <div className="template-main-nav-inside-dropdown-heading">Invoice Templates</div>
                                        </div>
                                    </a>
                                    <a className="main-nav-item---3 w-inline-block">
                                        <div className="main-nav-item-wrapper">
                                            <img />
                                            <div className="template-main-nav-inside-dropdown-heading">Agreement Templates</div>
                                        </div>
                                    </a>
                                    <a className="main-nav-item---4 w-inline-block">
                                        <div className="main-nav-item-wrapper">
                                            <img />
                                            <div className="template-main-nav-inside-dropdown-heading">Quote Templates</div>
                                        </div>
                                    </a>
                                    <a className="main-nav-item---8 w-inline-block">
                                        <div className="main-nav-item-wrapper">
                                            <img />
                                            <div className="template-main-nav-inside-dropdown-heading">Scope of Work Templates</div>
                                        </div>
                                    </a>
                                    <div className="main-nav-item---5">
                                        <div className="main-nav-item-wrapper">
                                            <img />
                                            <div className="template-main-nav-inside-dropdown-heading">Brief Templates</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-nav-right-content-templates">
                                    <div className="templates-right-content-item---1">
                                        <div className="templates-right-wrapper">
                                            <div className="main-nav-inside-dropdown-heading templates">Featured Invoice Templates</div>
                                            <a className="templates-right-item bg1 w-inline-block">
                                                <div className="template-main-nav-inside-dropdown-heading">Social Media Invoice Templates</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Contractor Invoice Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Web Design Invoice Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Influencer Invoice Template</div>
                                            </a>
                                        </div>
                                        <a className="nav-green-text is-centered">See All Templates</a>
                                    </div>
                                    <div className="templates-right-content-item---2">
                                        <div className="templates-right-wrapper">
                                            <div className="main-nav-inside-dropdown-heading templates">Featured Contract Templates</div>
                                            <a className="templates-right-item bg1 w-inline-block">
                                                <div className="template-main-nav-inside-dropdown-heading">Free Contract Maker</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Social Media Management Contract Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Graphic Design Contract Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Digital Marketing Contract Template</div>
                                            </a>
                                        </div>
                                        <a className="nav-green-text is-centered">See All Templates</a>
                                    </div>
                                    <div className="templates-right-content-item---3">
                                        <div className="templates-right-wrapper">
                                            <div className="main-nav-inside-dropdown-heading templates">Featured Agreement Templates</div>
                                            <a className="templates-right-item bg1 w-inline-block">
                                                <div className="template-main-nav-inside-dropdown-heading">Influencer Agreement Templates</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Influencer Collaboration Agreement Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Monthly Retainer Agreement Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Writer Agreement Template</div>
                                            </a>
                                        </div>
                                        <a className="nav-green-text is-centered">See All Templates</a>
                                    </div>
                                    <div className="templates-right-content-item---4">
                                        <div className="templates-right-wrapper">
                                            <div className="main-nav-inside-dropdown-heading templates">Featured Quote Templates</div>
                                            <a className="templates-right-item bg1 w-inline-block">
                                                <div className="template-main-nav-inside-dropdown-heading">Web Design Quotation Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Interior Design Quotation Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Digital Marketing Quotation Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Video Production Template</div>
                                            </a>
                                        </div>
                                        <a className="nav-green-text is-centered">See All Templates</a>
                                    </div>
                                    <div className="templates-right-content-item---5">
                                        <div className="templates-right-wrapper">
                                            <div className="main-nav-inside-dropdown-heading templates">Featured Brief Templates</div>
                                            <a className="templates-right-item bg1 w-inline-block">
                                                <div className="template-main-nav-inside-dropdown-heading">Design Brief Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Architecture Design Brief</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Fashion Design Brief</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Creative Brief Template</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="templates-right-content-item---6">
                                        <div className="templates-right-wrapper">
                                            <div className="main-nav-inside-dropdown-heading templates">Featured Proposal Templates</div>
                                            <a className="templates-right-item bg1 w-inline-block">
                                                <div className="template-main-nav-inside-dropdown-heading">Graphic Design Proposal Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Business Proposal Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Brand Ambassador Proposal Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Data Entry Proposal Letter Template</div>
                                            </a>
                                        </div>
                                        <a className="nav-green-text is-centered">See All Templates</a>
                                    </div>
                                    <div className="templates-right-content-item---7">
                                        <div className="templates-right-wrapper">
                                            <div className="main-nav-inside-dropdown-heading templates">Featured Scope of Work Templates</div>
                                            <a className="templates-right-item bg1 w-inline-block">
                                                <div className="template-main-nav-inside-dropdown-heading">Website Development Scope of Work Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Digital Marketing Scope of Work Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Consultant Scope of Work Template</div>
                                            </a>
                                            <a>
                                                <div className="template-main-nav-inside-dropdown-heading">Interior Design Scope of Work Template</div>
                                            </a>
                                        </div>
                                        <a className="nav-green-text is-centered">See All Templates</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="main-nav-link w--current">Pricing</a>
                        <a className="main-nav-link hidden">Resource Hub</a>
                        <a className="main-nav-link hidden">Reviews</a>
                        <a className="main-nav-link is-last-item-hidden">Company</a>
                        <img />
                    </div>
                    <div className="main-nav-right">
                        <a className="nav-button inverted w-button">Log In</a>
                        <a className="nav-button w-button">start free</a>
                    </div>
                    <div className="mobile-sub-menu-under-workflow">
                        <div className="mobile-main-nav-right-content">
                            <div className="side-dropdown-grid">
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Invoices</div>
                                    </div>
                                </a>
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Proposals</div>
                                    </div>
                                </a>
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Contracts</div>
                                    </div>
                                </a>
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Client CRM</div>
                                    </div>
                                </a>
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Forms & Automations</div>
                                    </div>
                                </a>
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Time Tracking</div>
                                    </div>
                                </a>
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Accounting</div>
                                    </div>
                                </a>
                                <a className="side-dropdown-link-block w-inline-block">
                                    <img />
                                    <div className="side-dropdown-content">
                                        <div className="side-dropdown-heading">Task Tracking</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-sub-menu-workflow">
                        <div className="mobile-main-nav-left-content">
                            <div className="main-nav-inside-dropdown-toggle arrow-bg">
                                <div className="main-nav-inside-content-wrapper">
                                    <div className="main-nav-inside-dropdown-heading">Bonsai Workflow</div>
                                    <div className="main-nav-inside-dropdown-subheading">Organize your business & look professional</div>
                                </div>
                            </div>
                            <a className="main-nav-inside-dropdown-toggle no-hover w-inline-block">
                                <div className="main-nav-inside-content-wrapper">
                                    <div className="main-nav-inside-dropdown-heading">Bonsai Tax</div>
                                    <div className="main-nav-inside-dropdown-subheading">Maximize write-offs, and estimate and save for 1099 taxes</div>
                                </div>
                            </a>
                            <a className="main-nav-inside-dropdown-toggle w-inline-block">
                                <div className="main-nav-inside-content-wrapper">
                                    <div className="main-nav-inside-dropdown-heading">Bonsai Cash</div>
                                    <div className="main-nav-inside-dropdown-subheading">Manage your money with a no-fee business account</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mobile-sub-menu-templates">
                        <div className="main-nav-left-content-templates">
                            <a className="main-nav-item---2 w-inline-block">
                                <div className="main-nav-item-wrapper">
                                    <img />
                                    <div className="template-main-nav-inside-dropdown-heading">Contract Templates</div>
                                </div>
                            </a>
                            <a className="main-nav-item---7 w-inline-block">
                                <div className="main-nav-item-wrapper">
                                    <img />
                                    <div className="template-main-nav-inside-dropdown-heading">Proposal Templates</div>
                                </div>
                            </a>
                            <a className="main-nav-item---1 w-inline-block">
                                <div className="main-nav-item-wrapper">
                                    <img />
                                    <div className="template-main-nav-inside-dropdown-heading">Invoice Templates</div>
                                </div>
                            </a>
                            <a className="main-nav-item---3 w-inline-block">
                                <div className="main-nav-item-wrapper">
                                    <img />
                                    <div className="template-main-nav-inside-dropdown-heading">Agreement Templates</div>
                                </div>
                            </a>
                            <a className="main-nav-item---4 w-inline-block">
                                <div className="main-nav-item-wrapper">
                                    <img />
                                    <div className="template-main-nav-inside-dropdown-heading">Quote Templates</div>
                                </div>
                            </a>
                            <a className="main-nav-item---8 w-inline-block">
                                <div className="main-nav-item-wrapper">
                                    <img />
                                    <div className="template-main-nav-inside-dropdown-heading">Scope of Work Templates</div>
                                </div>
                            </a>
                            <a className="main-nav-item---5 hidden w-inline-block">
                                <div className="main-nav-item-wrapper">
                                    <img />
                                    <div className="template-main-nav-inside-dropdown-heading">Brief Templates</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}