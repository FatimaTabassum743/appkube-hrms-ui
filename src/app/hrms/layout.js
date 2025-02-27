"use client";

import { Inter } from "next/font/google";

import "../globals.css";
// import {
//   DashboardOutlined,
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
  UserOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import { relative } from "path";

import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

import Image from "next/image";
import Vector from "../../../public/assets/homeicons/Vector.svg";
import Vector1 from "../../../public/assets/homeicons/Vector1.svg";
import Wrapper from "../../../public/assets/homeicons/wrapper.svg";
import Wrapper1 from "../../../public/assets/homeicons/wrapper1.svg";
import Wrapper2 from "../../../public/assets/homeicons/wrapper2.svg";
import Icon from "../../../public/assets/homeicons/icon.svg";
import Account from "../../../public/assets/homeicons/Setting.svg";
import Vector2 from "../../../public/assets/homeicons/Vector2.svg";
import Bell from "../../../public/assets/homeicons/Bell.svg";

// import Onboardemp from "@/components/employees/addemp/onboardemp/page";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
// const items = [
//   // getItem('Option 1', '1', <PieChartOutlined />),
//   // getItem('Option 2', '2', <DesktopOutlined />),
//   // getItem('User', 'sub1', <UserOutlined />, [
//   //   getItem('Tom', '3'),
//   //   getItem('Bill', '4'),
//   //   getItem('Alex', '5'),
//   // ]),
//   // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Dashboard', '9', <FileOutlined />),
//   getItem("Projects",'8', <FileOutlined />),
//   getItem("Employees",'7', <FileOutlined />),
//   getItem("Preference",'6', <FileOutlined />),
//   getItem("Compliance",'5', <FileOutlined />),

// ];

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const onSearch = (value) => console.log(value);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(<Link href={"/hrms"}>Dashboard</Link>, "1", <DashboardOutlined />),
    getItem(<Link href={"/projects"}>Project</Link>, "2", <FormOutlined />),
    getItem(
      <Link href={"/hrms/employees"}>Employees</Link>,
      "3",
      <TableOutlined />
    ),
    getItem(
      <Link href={"/hrms/preference"}>Preference</Link>,
      "4",
      <UserOutlined />
    ),
    getItem(
      <Link href={"/hrms/tracker"}>Tracker</Link>,
      "5",
      <HighlightOutlined />
    ),
  ];

  const siderStyle = {
    textAlign: "left",
    color: "#fff",
    backgroundColor: "#fff",
  };

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {/* <div className="logo" /> */}
            {/* <Menu
        theme="dark"
        // mode="horizontal"
        // defaultSelectedKeys={['2']}
        // items={new Array(3).fill(null).map((_, index) => ({
        //   key: String(index + 1),
        //   label: `nav ${index + 1}`,
        // }))}
      /> */}
            <div>
              <h2 className="text-white uppercase">Synectiks</h2>
            </div>

            <div className="flex">
              <div className="flex justify-center items-center bg-white border rounded-md">
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  style={{
                    width: 200,
                    borderRadius: 9,
                  }}
                />
              </div>
              <div className="flex w-full gap-4 justify-evenly px-4">
                <Image src={Vector2} />
                <Image className="text-white" src={Bell} />
                <Image src={Account} />
              </div>
            </div>
          </Header>

          {/* <Layout hasSider>
            <Sider
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                marginTop: 60,
                backgroundColor: "white",
                color: "black",
              }}
              trigger={null}
              collapsible
              collapsed={collapsed}
            > */}
          {/* <div className="logo" /> */}
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}

          {/* <div className="container flex flex-col justify-center items-center text-black">
                <Link
                  href={"/hrms"}
                  className="text-black w-full py-3 hover:bg-cyan-50 px-2 flex justify-between items-start"
                >
                  <div className="flex">
                    <Image src={Wrapper} width={20} height={20} />
                    <h2 className="pl-12"> Dashboard</h2>
                  </div>
                </Link>
                <Link
                  href={"/"}
                  className="text-black  w-full py-3  px-2 hover:bg-cyan-50 flex justify-between items-start"
                >
                  <div className="flex">
                    <Image src={Vector} width={20} height={20} />
                    <h2 className="pl-12">Projects</h2>
                  </div>
                </Link>
                <Link
                  href={"/hrms/employees"}
                  className="text-black w-full py-3 px-2 hover:bg-cyan-50 flex justify-between items-center"
                >
                  <div className="flex">
                    <Image src={Vector1} width={20} height={20} />
                    <h2 className="pl-12"> Employees</h2>
                  </div>
                </Link>
                <Link
                  href={"hrms/employees"}
                  className="text-black w-full py-3 px-2 hover:bg-cyan-50 flex justify-between items-center "
                >
                  <div className="flex">
                    <Image src={Icon} width={20} height={20} />{" "}
                    <h2 className="pl-12"> Preference </h2>
                  </div>
                </Link>
                <Link
                  href={"/hrms/employees"}
                  className="text-black w-full py-3 px-2 hover:bg-cyan-50 flex justify-between items-center "
                >
                  <div className="flex">
                    <Image src={Wrapper1} width={20} height={20} />
                    <h2 className="pl-12">Notification</h2>
                  </div>
                </Link>
              </div>
            </Sider>
            <Layout className="site-layout flex flex-col">
              <Content
                style={{
                  // margin: '24px 16px 0',

                  // overflow: 'initial',

                  // display:"flex",
                  // flexDirection:"column"
                  paddingLeft: 10,
                }}
              >
                <div
                  className=""
                  style={{
                    // padding: 24,
                    // textAlign: 'center',
                    // position:"absolute",
                    // left:"13%",
                    // top:"2%",
                    // width:"85%"
                    marginLeft: 200,
                    // padding:'10px',
                  }}
                >
                  {children}

                  <Footer
                    style={{
                      // textAlign: 'center',
                      marginLeft: 200,
                    }}
                  ></Footer>
                </div>
              </Content>
            </Layout>
          </Layout> */}
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              // style={siderStyle}
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                marginTop: "10vh",
                left: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <div />
              <Menu
                theme="light"
                defaultSelectedKeys={["1"]}
                mode="inline"
                style={{ height: "100%" }}
                items={items}
              >
                {/* <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined />}>
              <Link href="/project">
                <a>Project</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TableOutlined />}>
              <Link href="/employees">
                <a>Employees</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link href="/preference">
                <a>Preference</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<HighlightOutlined />}>
              <Link href="/compliance">
                <a>Compliance</a>
              </Link>
            </Menu.Item> */}
              </Menu>
            </Sider>
            <Layout className="site-layout flex flex-col">
              <Content
                style={{
                  // margin: '24px 16px 0',

                  // overflow: 'initial',

                  // display:"flex",
                  // flexDirection:"column"
                  paddingLeft: 10,
                }}
              >
                <div
                  className={`${collapsed ? "ml-[80px]" : "ml-[200px]"}`}
                  // {collapsed?style={{marginLeft: 80}}:style={{marginLeft: 200}}}
                  style={
                    {
                      // padding: 24,
                      // textAlign: 'center',
                      // position:"absolute",
                      // left:"13%",
                      // top:"2%",
                      // width:"85%"
                      // marginLeft: 200,
                      // padding:'10px',
                    }
                  }
                >
                  {children}

                  <Footer
                    style={{
                      // textAlign: 'center',
                      marginLeft: 200,
                    }}
                  ></Footer>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
