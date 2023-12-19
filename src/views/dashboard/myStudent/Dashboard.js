import React, { useState } from "react";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CFormLabel,
  CFormFloating,
  CFormTextarea,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from "@coreui/icons";
import { Mail, Trash2, Send } from "react-feather";

import AppHeaderSecondary from "src/components/header/secondaryHeader/AppHeaderSecondary";
import avatar1 from "src/assets/images/avatars/1.jpg";
import avatar2 from "src/assets/images/avatars/2.jpg";
import avatar3 from "src/assets/images/avatars/3.jpg";
import avatar4 from "src/assets/images/avatars/4.jpg";
import avatar5 from "src/assets/images/avatars/5.jpg";
import avatar6 from "src/assets/images/avatars/6.jpg";

const Dashboard = () => {
  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2023",
      },
      country: { name: "USA", flag: cifUs },
      usage: {
        value: 50,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "success",
      },
      payment: { name: "Mastercard", icon: cibCcMastercard },
      activity: "10 sec ago",
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios",
        new: false,
        registered: "Jan 1, 2023",
      },
      country: { name: "Brazil", flag: cifBr },
      usage: {
        value: 22,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "info",
      },
      payment: { name: "Visa", icon: cibCcVisa },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2023" },
      country: { name: "India", flag: cifIn },
      usage: {
        value: 74,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "warning",
      },
      payment: { name: "Stripe", icon: cibCcStripe },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2023" },
      country: { name: "France", flag: cifFr },
      usage: {
        value: 98,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "danger",
      },
      payment: { name: "PayPal", icon: cibCcPaypal },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        new: true,
        registered: "Jan 1, 2023",
      },
      country: { name: "Spain", flag: cifEs },
      usage: {
        value: 22,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "primary",
      },
      payment: { name: "Google Wallet", icon: cibCcApplePay },
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        new: true,
        registered: "Jan 1, 2023",
      },
      country: { name: "Poland", flag: cifPl },
      usage: {
        value: 43,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "success",
      },
      payment: { name: "Amex", icon: cibCcAmex },
      activity: "Last week",
    },
  ];

  const [selectedTranscriptTab, setSelectedTranscriptTab] = useState({
    tab1: true,
    tab2: false,
  });

  const [documentTab, setDocumentTab] = useState({
    tab1: true,
  });

  const transcriptTabHandler = (tab) => {
    setSelectedTranscriptTab({
      tab1: tab === 1 ?? false,
      tab2: tab === 2 ?? false,
    });
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <AppHeaderSecondary title={"My Courses"} />
          <CCardFooter>
            <CRow
            //   xs={{ cols: 1, gutter: 4 }}
            //   sm={{ cols: 2 }}
            //   lg={{ cols: 4 }}
            //   xl={{ cols: 5 }}
            //   className="mb-2 text-center"
            >
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Title
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Progress
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Last View
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">
                          Last login
                        </div>
                        <div className="fw-semibold text-nowrap">
                          {item.activity}
                        </div>
                      </CTableDataCell> */}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CRow>
          </CCardFooter>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <AppHeaderSecondary title={"My Transcripts"} noWidget={false} />
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class={`nav-link ${selectedTranscriptTab.tab1 ? "active" : ""}`}
                id="home-tab"
                data-coreui-toggle="tab"
                data-coreui-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                onClick={() => transcriptTabHandler(1)}
              >
                MedTrainer Transcripts
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class={`nav-link ${selectedTranscriptTab.tab2 ? "active" : ""}`}
                id="profile-tab"
                data-coreui-toggle="tab"
                data-coreui-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => transcriptTabHandler(2)}
              >
                External Transcripts, Credentials, Licenses, Vaccinations,
                Immunizations
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class={`tab-pane fade ${
                selectedTranscriptTab.tab1 ? "show active" : ""
              }`}
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <CRow className="justify-content-between">
                <CCol>
                  <p>
                    <em>
                      These transcripts are from the courses that you have taken
                      and completed within the system.
                    </em>
                  </p>
                </CCol>
              </CRow>
              <CCardFooter>
                <CRow
                //   xs={{ cols: 1, gutter: 4 }}
                //   sm={{ cols: 2 }}
                //   lg={{ cols: 4 }}
                //   xl={{ cols: 5 }}
                //   className="mb-2 text-center"
                >
                  <CTable
                    align="middle"
                    className="mb-0 border"
                    hover
                    responsive
                  >
                    <CTableHead className="text-nowrap">
                      <CTableRow>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Course
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Verification Code
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Completed Date
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Actions
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tableExample.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          {/* <CTableDataCell className="text-center">
                            <CAvatar
                              size="md"
                              src={item.avatar.src}
                              status={item.avatar.status}
                            />
                          </CTableDataCell> */}
                          <CTableDataCell>
                            <div>{item.user.name}</div>
                            <div className="small text-body-secondary text-nowrap">
                              <span>{item.user.new ? "New" : "Recurring"}</span>{" "}
                              | Registered: {item.user.registered}
                            </div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon
                              size="xl"
                              icon={item.country.flag}
                              title={item.country.name}
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="d-flex justify-content-between text-nowrap">
                              <div className="fw-semibold">
                                {item.usage.value}%
                              </div>
                              <div className="ms-3">
                                <small className="text-body-secondary">
                                  {item.usage.period}
                                </small>
                              </div>
                            </div>
                            <CProgress
                              thin
                              color={item.usage.color}
                              value={item.usage.value}
                            />
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon size="xl" icon={item.payment.icon} />
                          </CTableDataCell>
                          {/* <CTableDataCell>
                            <div className="small text-body-secondary text-nowrap">
                              Last login
                            </div>
                            <div className="fw-semibold text-nowrap">
                              {item.activity}
                            </div>
                          </CTableDataCell> */}
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CRow>
              </CCardFooter>
            </div>
            <div
              class={`tab-pane fade ${
                selectedTranscriptTab.tab2 ? "show active" : ""
              }`}
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="1"
            >
              <CRow className="justify-content-between">
                <CCol>
                  <p>
                    <em>
                      These transcripts are from the courses that you have taken
                      and completed within the system.
                    </em>
                  </p>
                </CCol>
                <CCol className="text-right">
                  <CButton
                    component="a"
                    color="info"
                    href="#"
                    role="button"
                    className="cmt1 cmr2"
                  >
                    Upload Multiple Transcripts
                  </CButton>
                  <CButton
                    component="a"
                    color="danger"
                    href="#"
                    role="button"
                    className="cmt1 cmr2"
                  >
                    Delete Transcripts
                  </CButton>
                </CCol>
              </CRow>
              <CCardFooter>
                <CRow
                //   xs={{ cols: 1, gutter: 4 }}
                //   sm={{ cols: 2 }}
                //   lg={{ cols: 4 }}
                //   xl={{ cols: 5 }}
                //   className="mb-2 text-center"
                >
                  <CTable
                    align="middle"
                    className="mb-0 border"
                    hover
                    responsive
                  >
                    <CTableHead className="text-nowrap">
                      <CTableRow>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Title
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Completed Date
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Expiration Date
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Status
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Continued Eduction Units
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Actions
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tableExample.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell className="text-center">
                            <CAvatar
                              size="md"
                              src={item.avatar.src}
                              status={item.avatar.status}
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{item.user.name}</div>
                            <div className="small text-body-secondary text-nowrap">
                              <span>{item.user.new ? "New" : "Recurring"}</span>{" "}
                              | Registered: {item.user.registered}
                            </div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon
                              size="xl"
                              icon={item.country.flag}
                              title={item.country.name}
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="d-flex justify-content-between text-nowrap">
                              <div className="fw-semibold">
                                {item.usage.value}%
                              </div>
                              <div className="ms-3">
                                <small className="text-body-secondary">
                                  {item.usage.period}
                                </small>
                              </div>
                            </div>
                            <CProgress
                              thin
                              color={item.usage.color}
                              value={item.usage.value}
                            />
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon size="xl" icon={item.payment.icon} />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="small text-body-secondary text-nowrap">
                              Last login
                            </div>
                            <div className="fw-semibold text-nowrap">
                              {item.activity}
                            </div>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CRow>
              </CCardFooter>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <AppHeaderSecondary
            title={"Documents and Policies Binder"}
            noWidget={false}
            searchAction={false}
            fileAction={false}
          />
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class={`nav-link ${documentTab.tab1 ? "active" : ""}`}
                id="home-tab"
                data-coreui-toggle="tab"
                data-coreui-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                onClick={() => transcriptTabHandler(1)}
              >
                Accepted Policies
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class={`tab-pane fade ${documentTab.tab1 ? "show active" : ""}`}
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="1"
            >
              <CRow
                className="cmt2 cmb2"
                style={{ justifyContent: "space-around" }}
              >
                <CCol sm={12} xl={4} xxl={3}>
                  <CDropdown className="cmr2 w-100">
                    <CDropdownToggle className="skeleton-border">
                      Category
                    </CDropdownToggle>
                    <CDropdownMenu className="w-100">
                      <CDropdownItem href="#">Flower Mound</CDropdownItem>
                      <CDropdownItem href="#">Health</CDropdownItem>
                      <CDropdownItem href="#">Lewisville</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <CFormInput
                    type="email"
                    className="form-control form-control-md"
                    id="colFormLabelSm"
                    placeholder="Search..."
                  />
                </CCol>
                <CCol sm={12} xl={4} xxl={3}>
                  <CButton
                    component="a"
                    color="info"
                    href="#"
                    role="button"
                    className="cmr2"
                  >
                    Download
                  </CButton>
                </CCol>
              </CRow>
              <CCardFooter>
                <CRow
                //   xs={{ cols: 1, gutter: 4 }}
                //   sm={{ cols: 2 }}
                //   lg={{ cols: 4 }}
                //   xl={{ cols: 5 }}
                //   className="mb-2 text-center"
                >
                  <CTable
                    align="middle"
                    className="mb-0 border"
                    hover
                    responsive
                  >
                    <CTableHead className="text-nowrap">
                      <CTableRow>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Title
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Folder
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Category
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          Accepted Date
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tableExample.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          {/* <CTableDataCell className="text-center">
                            <CAvatar
                              size="md"
                              src={item.avatar.src}
                              status={item.avatar.status}
                            />
                          </CTableDataCell> */}
                          <CTableDataCell>
                            <div>{item.user.name}</div>
                            <div className="small text-body-secondary text-nowrap">
                              <span>{item.user.new ? "New" : "Recurring"}</span>{" "}
                              | Registered: {item.user.registered}
                            </div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon
                              size="xl"
                              icon={item.country.flag}
                              title={item.country.name}
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="d-flex justify-content-between text-nowrap">
                              <div className="fw-semibold">
                                {item.usage.value}%
                              </div>
                              <div className="ms-3">
                                <small className="text-body-secondary">
                                  {item.usage.period}
                                </small>
                              </div>
                            </div>
                            <CProgress
                              thin
                              color={item.usage.color}
                              value={item.usage.value}
                            />
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon size="xl" icon={item.payment.icon} />
                          </CTableDataCell>
                          {/* <CTableDataCell>
                            <div className="small text-body-secondary text-nowrap">
                              Last login
                            </div>
                            <div className="fw-semibold text-nowrap">
                              {item.activity}
                            </div>
                          </CTableDataCell> */}
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CRow>
              </CCardFooter>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
          <AppHeaderSecondary
            title={"User Messages"}
            noWidget={false}
            searchAction={false}
          />
          <CRow className="cmt2 cmb1">
            <CCol>
              <Mail size={24} className="cmr1" />
              Received Messages
            </CCol>
            <CCol>
              <Trash2 size={24} />
            </CCol>
          </CRow>

          <CCardFooter>
            <CRow
            //   xs={{ cols: 1, gutter: 4 }}
            //   sm={{ cols: 2 }}
            //   lg={{ cols: 4 }}
            //   xl={{ cols: 5 }}
            //   className="mb-2 text-center"
            >
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      From
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Date
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Location
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Body
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Actions
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      {/* <CTableDataCell className="text-center">
                            <CAvatar
                              size="md"
                              src={item.avatar.src}
                              status={item.avatar.status}
                            />
                          </CTableDataCell> */}
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">
                          Last login
                        </div>
                        <div className="fw-semibold text-nowrap">
                          {item.activity}
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CRow>
          </CCardFooter>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
          <CRow className="cmt2 cmb1">
            <CCol>
              <Mail size={24} className="cmr1" />
              Sent Messages
            </CCol>
            <CCol>
              <Trash2 size={24} />
            </CCol>
          </CRow>

          <CCardFooter>
            <CRow
            //   xs={{ cols: 1, gutter: 4 }}
            //   sm={{ cols: 2 }}
            //   lg={{ cols: 4 }}
            //   xl={{ cols: 5 }}
            //   className="mb-2 text-center"
            >
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      To
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Date Sent
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Body
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      {/* <CTableDataCell className="text-center">
                            <CAvatar
                              size="md"
                              src={item.avatar.src}
                              status={item.avatar.status}
                            />
                          </CTableDataCell> */}
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      {/* <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">
                          Last login
                        </div>
                        <div className="fw-semibold text-nowrap">
                          {item.activity}
                        </div>
                      </CTableDataCell> */}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CRow>
          </CCardFooter>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
          <CRow className="cmt2 cmb1">
            <CCol>
              <Mail size={24} className="cmr1" />
              Send Messages
            </CCol>
          </CRow>
          <CRow className="cmb2">
            <CCol>Recipient:</CCol>
            <CCol>
              <CDropdown className="cmr2 w-100">
                <CDropdownToggle className="skeleton-border">
                  Select Recipient:
                </CDropdownToggle>
                <CDropdownMenu className="w-100">
                  <CDropdownItem href="#">Abuse & Violence - LMS</CDropdownItem>
                  <CDropdownItem href="#">ADLs'</CDropdownItem>
                  <CDropdownItem href="#">Aid/BLS/ACLS/PALS</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CCol>
            <CCol>
              <Send size={24} />
            </CCol>
          </CRow>
          <CCardFooter>
            <CRow>
              <CFormFloating>
                <CFormTextarea
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></CFormTextarea>
                <CFormLabel
                  htmlFor="floatingTextarea2"
                  style={{ left: "10px" }}
                >
                  Message:
                </CFormLabel>
              </CFormFloating>
            </CRow>
          </CCardFooter>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
