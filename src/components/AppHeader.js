import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from "@coreui/icons";
import { Globe } from "react-feather";
import { MapPin } from "react-feather";
import { Users } from "react-feather";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";

const AppHeader = () => {
  const headerRef = useRef();
  const { colorMode, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );

  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      headerRef.current &&
        headerRef.current.classList.toggle(
          "shadow-sm",
          document.documentElement.scrollTop > 0
        );
    });
  }, []);

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4 header-menu-custom" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: "-14px" }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-md-flex">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              AvilaCare
            </CNavLink>
          </CNavItem>
          <CNavItem
            className={sidebarShow ? "d-none d-lg-flex" : "d-none d-md-flex"}
          >
            <div className="header-option-wrapper">
              <div className="header-icon">
                <MapPin size={20} />
              </div>
              <CDropdown
                variant="nav-item"
                placement="bottom-end"
                style={{ lineHeight: "0.5" }}
              >
                <CDropdownToggle caret={false}>
                  <CNavLink href="#">All Locations</CNavLink>
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem
                    // active={colorMode === "light"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("light")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    All Locations
                  </CDropdownItem>
                  <CDropdownItem
                    // active={colorMode === "dark"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("dark")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    Flower Mound
                  </CDropdownItem>
                  <CDropdownItem
                    // active={colorMode === "auto"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("auto")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    Health
                  </CDropdownItem>
                  <CDropdownItem
                    // active={colorMode === "auto"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("auto")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    Lewisville
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
          </CNavItem>
          <CNavItem
            className={sidebarShow ? "d-none d-lg-flex" : "d-none d-md-flex"}
          >
            <div className="header-option-wrapper">
              <div className="header-icon">
                <Globe size={20} />
              </div>
              <CDropdown
                variant="nav-item"
                placement="bottom-end"
                style={{ lineHeight: "0.5" }}
              >
                <CDropdownToggle caret={false}>
                  <CNavLink href="#">All Departments</CNavLink>
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem
                    // active={colorMode === "light"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("light")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    All Departments
                  </CDropdownItem>
                  <CDropdownItem
                    // active={colorMode === "dark"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("dark")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    Care Technicians
                  </CDropdownItem>
                  <CDropdownItem
                    // active={colorMode === "auto"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("auto")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    Evecutive Director
                  </CDropdownItem>
                  <CDropdownItem
                    // active={colorMode === "auto"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("auto")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    Medication Technicians
                  </CDropdownItem>
                  <CDropdownItem
                    // active={colorMode === "auto"}
                    className="d-flex align-items-center"
                    component="button"
                    type="button"
                    onClick={() => setColorMode("auto")}
                    style={{ padding: "0.8rem 1rem" }}
                  >
                    Regional Nurse
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
          </CNavItem>
          <CNavItem
            className={sidebarShow ? "d-none d-lg-flex" : "d-none d-md-flex"}
          >
            <div className="header-option-wrapper">
              <div className="header-icon">
                <Users size={20} />
              </div>
              <CNavLink href="#">Team Status</CNavLink>
            </div>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav style={{ position: "absolute", right: "1.5rem" }}>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
