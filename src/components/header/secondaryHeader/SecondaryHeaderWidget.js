import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { CRow, CCol, CWidgetStatsA } from "@coreui/react";
import { getStyle } from "@coreui/utils";
import "./secondaryHeader.css";

const SecondaryHeaderWidget = (props) => {
  const widgetChartRef1 = useRef(null);
  const widgetChartRef2 = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("ColorSchemeChange", () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor =
            getStyle("--cui-primary");
          widgetChartRef1.current.update();
        });
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor =
            getStyle("--cui-info");
          widgetChartRef2.current.update();
        });
      }
    });
  }, [widgetChartRef1, widgetChartRef2]);

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <div className="secondary-widget-card card-primary" style={{}}>
          <span style={{ fontSize: "16px" }}>Users</span>
          <br />
          <span className="font-weight-bold" style={{ fontSize: "24px" }}>
            6
          </span>
        </div>
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <div className="secondary-widget-card card-info" style={{}}>
          <span style={{ fontSize: "16px" }}>Users</span>
          <br />
          <span className="font-weight-bold" style={{ fontSize: "24px" }}>
            6
          </span>
        </div>
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <div className="secondary-widget-card card-warning" style={{}}>
          <span style={{ fontSize: "16px" }}>Users</span>
          <br />
          <span className="font-weight-bold" style={{ fontSize: "24px" }}>
            6
          </span>
        </div>
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <div className="secondary-widget-card card-danger" style={{}}>
          <span style={{ fontSize: "16px" }}>Users</span>
          <br />
          <span className="font-weight-bold" style={{ fontSize: "24px" }}>
            6
          </span>
        </div>
      </CCol>
    </CRow>
  );
};

SecondaryHeaderWidget.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
};

export default SecondaryHeaderWidget;
