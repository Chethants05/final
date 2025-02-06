import { ACCOUNT_TYPE } from './../src/utils/constants';


export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: [ACCOUNT_TYPE.INSTRUCTOR],
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "All Courses",
    path: "/dashboard/full-catalog",
    type: [ACCOUNT_TYPE.ADMIN,ACCOUNT_TYPE.STUDENT],
    icon: "VscLibrary",
  },
  {
    id: 4,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: [ACCOUNT_TYPE.INSTRUCTOR],
    icon: "VscVm",
  },
  {
    id: 5,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: [ACCOUNT_TYPE.INSTRUCTOR,ACCOUNT_TYPE.ADMIN],
    icon: "VscAdd",
  },
  {
    id: 6,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: [ACCOUNT_TYPE.STUDENT],
    icon: "VscMortarBoard",
  },
  // {
  //   id: 6,
  //   name: "Purchase History",
  //   path: "/dashboard/purchase-history",
  //   type: [ACCOUNT_TYPE.STUDENT],
  //   icon: "VscHistory",
  // },
  {
    id: 7,
    name: "Add Instructor",
    path: "/add-instructor",
    type: [ACCOUNT_TYPE.ADMIN],
    icon: "VscAdd"
  }
];
