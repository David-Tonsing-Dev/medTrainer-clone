import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { Camera } from "react-feather";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavTitle,
    name: "Dashboard",
  },
  {
    component: CNavItem,
    name: "Admin",
    to: "/dashboard",
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    component: CNavItem,
    name: "My Student",
    to: "/learning/dashboard",
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    component: CNavTitle,
    name: "Components",
  },
  {
    component: CNavGroup,
    name: "mt | Learning",
    to: "/base",
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    items: [
      {
        component: CNavItem,
        name: "My Course Assignments",
        to: "/base/accordion",
      },
      {
        component: CNavItem,
        name: "Course Library",
        to: "/base/breadcrumbs",
      },
      {
        component: CNavItem,
        name: "CE Course Library",
        to: "/base/cards",
      },
      // {
      //   component: CNavItem,
      //   name: "Group Learning",
      //   to: "/base/carousels",
      // },
      {
        component: CNavItem,
        name: "Learning Reports",
        to: "/base/collapses",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "CPR Certification",
    to: "/buttons",
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    items: [
      {
        component: CNavItem,
        name: "Courses & Team Assignments",
        to: "/buttons/buttons",
      },
      {
        component: CNavItem,
        name: "My Assignments",
        to: "/buttons/button-groups",
      },
      {
        component: CNavItem,
        name: "Skill Assessments",
        to: "/buttons/dropdowns",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Organization Management",
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    items: [
      {
        component: CNavItem,
        name: "Employee Center",
        to: "/forms/form-control",
      },
      {
        component: CNavItem,
        name: "Onboarding Path",
        to: "/forms/select",
      },
      {
        component: CNavItem,
        name: "Locations",
        to: "/forms/checks-radios",
      },
      {
        component: CNavItem,
        name: "Org NPIs",
        to: "/forms/range",
      },
      {
        component: CNavItem,
        name: "Divisions",
        to: "/forms/input-group",
      },
      {
        component: CNavItem,
        name: "Departments",
        to: "/forms/floating-labels",
      },
      {
        component: CNavItem,
        name: "Settings",
        to: "/forms/layout",
      },
      {
        component: CNavItem,
        name: "Company Settings",
        to: "/forms/validation",
      },
      {
        component: CNavItem,
        name: "Pending System Actions",
        to: "/forms/validation",
      },
      {
        component: CNavItem,
        name: "Positions",
        to: "/forms/validation",
      },
      {
        component: CNavItem,
        name: "Organization Reports",
        to: "/forms/validation",
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: "Charts",
  //   to: "/charts",
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: "Icons",
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "CoreUI Free",
  //       to: "/icons/coreui-icons",
  //       badge: {
  //         color: "success",
  //         text: "NEW",
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: "CoreUI Flags",
  //       to: "/icons/flags",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "CoreUI Brands",
  //       to: "/icons/brands",
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Notifications",
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Alerts",
  //       to: "/notifications/alerts",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Badges",
  //       to: "/notifications/badges",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Modal",
  //       to: "/notifications/modals",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Toasts",
  //       to: "/notifications/toasts",
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: "Widgets",
  //   to: "/widgets",
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    component: CNavTitle,
    name: "Extras",
  },
  {
    component: CNavItem,
    name: "Reports",
    to: "/dashboard",
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    component: CNavItem,
    name: "User Messages",
    to: "/dashboard",
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    component: CNavItem,
    name: "Support",
    to: "/dashboard",
    icon: (
      <div className="side-nav-item-icon">
        <Camera size={18} />
      </div>
    ),
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  // {
  //   component: CNavGroup,
  //   name: "Pages",
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Login",
  //       to: "/login",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Register",
  //       to: "/register",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Error 404",
  //       to: "/404",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Error 500",
  //       to: "/500",
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: "Docs",
  //   href: "https://coreui.io/react/docs/templates/installation/",
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
];

export default _nav;
