import { CFormInput, CRow, CCol } from "@coreui/react";
import React from "react";
import { Command, FileText, Printer } from "react-feather";
import SecondaryHeaderWidget from "./SecondaryHeaderWidget";

const AppHeaderSecondary = ({
  title,
  noWidget = true,
  searchAction = true,
  fileAction = true,
}) => {
  return (
    <>
      <CRow className="justify-content-between">
        <CCol
          sm={12}
          md={12}
          lg={4}
          xl={4}
          xxl={3}
          className="d-flex mb-lg-0 mb-3"
        >
          <div style={{ marginRight: "1rem" }}>
            <Command size={26} />
          </div>
          <span
            className="font-weight-bold text-nowrap"
            style={{ lineheight: "1.8" }}
          >
            {title}
          </span>
        </CCol>
        <CCol sm={12} md={12} lg={4} xl={4} xxl={3}>
          <CRow className="justify-content-between">
            <CCol
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className={`mb-3 mb-xl-0 ${searchAction ? "d-flex" : "d-none"}`}
            >
              <CFormInput
                type="email"
                className="form-control form-control-md"
                id="colFormLabelSm"
                placeholder="Search..."
              />
            </CCol>
            <CCol
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className={`${fileAction ? "d-block" : "d-none"}`}
            >
              <button
                style={{
                  marginRight: "0.8rem",
                  border: "none",
                  background: "transparent",
                }}
              >
                <Printer size={26} />
              </button>
              <button
                style={{
                  // marginRight: "0.8rem",
                  border: "none",
                  background: "transparent",
                }}
              >
                <FileText size={26} />
              </button>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className={noWidget ? "" : "d-none"}>
        <SecondaryHeaderWidget className="mb-4" />
      </CRow>
    </>
  );
};

export default AppHeaderSecondary;
