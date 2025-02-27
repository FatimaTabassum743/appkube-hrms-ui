"use client";

// ProfessionalForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   updateProfessionalDetails,
//   selectProfessionalDetails,
//   setDropdownOption,
// } from "../../../../redux/slices/profDetails";

import { Form, Input, Button, Select, Col, Row,DatePicker, Space } from "antd";
import { useForm } from "antd/lib/form/Form";

import { useRouter } from "next/navigation";
import axios from "@/api/axios";
import { updateProfessionalDetails, selectProfessionalDetails, setDropdownOption,
  setDropdownOptionDesig,setDropdownOptionwork,setDropdownOptionReport,setSelectedDate} from "../../../../redux/slices/profDetails";
// const { Option } = Select;
const numberRegex = /^[0-9]{5,}$/; // Ensure at least 5 digits

const ProfessionalInfo = ({ tab, setTab }) => {
  const handleSelectChange = (value) => {
    dispatch(setDropdownOption(value));
  };
  const handlework=(value)=>{
    dispatch(setDropdownOptionwork(value));
  }
  const handleDesig=(value)=>{
    dispatch(setDropdownOptionDesig(value));
  }
  const handlReportk=(value)=>{
    dispatch(setDropdownOptionReport(value));
  }
  const handleDateChange = (date, dateString) => {
    // Dispatch the action to update the selectedDate in the Redux store
    dispatch(setSelectedDate(dateString));
  };
  const dispatch = useDispatch();
  const professionalDetails = useSelector(selectProfessionalDetails);
  const [form] = useForm();

  const handleChange = (name, value) => {
    // console.log(name,value)
    dispatch(updateProfessionalDetails({ [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(updateProfessionalDetails(professionalDetails))
    console.log(professionalDetails);
    putting(professionalDetails)
    // Retrieve existing data from local storage
    // const existingData = JSON.parse(localStorage.getItem('professionalDetails')) || {};

    // Merge existing data with the new data
    // const newData = [{ ...existingData, ...professionalDetails }];

    // Save the merged data to local storage
    // localStorage.setItem('professionalDetails', JSON.stringify(newData));
    // alert("Data stored in local storage");
  };
  const router = useRouter();
  const prof1=["option1","option2","option3"]
  const prof=["option1","option2","option3"]
  
   

 
   

  
 

  const putting = (values) => {
    let data = {
      // designation_id: values.selectedDesignation,
      designation_id: 4,
      pf: values.pfNumber,
      uan: values.uanNumber,
      // department_id: values.selectedDepartment,
      department_id:5,
      // reporting_manager_id: values.selectedReportingMngr,
      reporting_manager_id:'61a6b732-1597-444a-afcc-10eeafbacc63',
      work_location: values.selectedworkLocation,
      start_date: values.selectedDate,
      emp_id: values.employeeId,
    };

    const response = axios
      .put("/employee/professionalInfo", data)
      .then((response) => {
        console.log("success", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  
  const  selectedDepartment = useSelector((state) => state.selectedDepartment);
  const  selectedDesignation = useSelector((state) => state.selectedDesignation);
  const  selectedReportingMngr = useSelector((state) => state.selectedReportingMngr);
  const  selectedworkLocation = useSelector((state) => state.selectedworkLocation);
  const selectedDate = useSelector((state) => state.selectedDate);

  return (
    <div>
      <Form
      
        requiredMark={false}
        style={{
          padding: "50px",
          text:"start"
        }}
        initialValues={professionalDetails}
        labelAlign="left"
      
        labelCol={{
          span: 5,
        }}
         labelWrap
        className="m-20 w-[90%] rounded-none"
        onFinish={handleSubmit}
      >
        <Col span="3xl">
        <Form.Item
          className="rounded-none "
          label="Designation"
          name="designation"
          
          labelWrap


          rules={[{ required: true, message: "Please select a designation." }]}
          
        >
          <Select
            showSearch
            className="rounded-none"
            onChange={handleDesig}
            value={selectedDesignation}
            placeholder="Select Designation"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {prof1.map((option) => (
              <Select.Option
                key={option}
                value={option}
                className="rounded-none"
              >
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        </Col>

        <Row gutter={12}
        >
        <Col span={13}>
          
            <Form.Item
              label="PF No (Optional)"
              name="pfNumber"
              rules={[
                { message: "Enter Your PF Number" },
                {
                  pattern: numberRegex,
                  message: "Please enter at least 5 digits for PF number.",
                },
              ]}
              labelCol={{ span:9}}
              
            >
              <Input
                placeholder="Enter your PF number"

             
                type="text"
                value={professionalDetails.pfNumber}
                style={{width:"100%", marginLeft:"3%"}}
                onChange={(e) => handleChange("pfNumber", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
            
              label="UAN No (Optional)"
              name="uanNumber"
              className="ml-[20px]"
              rules={[
                { message: "Enter Your UAN Number" },
                {
                  pattern: numberRegex,
                  message: "Please enter at least 5 digits for UAN number.",
                },
              ]}
              labelCol={{ span: 9}}
            >
              <Input
                
                placeholder="Enter Your UAN Number"
              
                type="text"
                value={professionalDetails.uanNumber}
                onChange={(e) => handleChange("uanNumber", e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Col span="3xl">
        <Form.Item
          label="Employee ID (Optional)"
          name="employeeId"
          rules={[
            { message: "Enter Your Employee ID" },
            {
              // pattern: numberRegex,
              message: "Please enter at least 5 digits for UAN number.",
            },
          ]}
        >
          <Input
            placeholder="Enter Your Employee ID"
            
            type="text"
            value={professionalDetails.employeeId}
            onChange={(e) => handleChange("employeeId", e.target.value)}
          />
        </Form.Item>
        </Col>
        <Col span="3xl">
        <Form.Item
          className="rounded-none"
          label="Department"
          name="department"
          rules={[{ required: true, message: "Please select a department." }]}
        >
          <Select
            showSearch
            style={{ borderRadius: 0 }}
            className="rounded-none"
            onChange={handleSelectChange}
            value={selectedDepartment}
            placeholder="Select Department "
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {prof.map((option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        </Col>
        <Col span="3xl">        <Form.Item
    
          label=" Direct Reporting Manager"
          name="reportingManager"
          rules={[
            { required: true, message: "Please select a reporting manager." },
          ]}
        >
          <Select
            showSearch
            style={{borderRadius: 0 }}
            className="rounded-none"
            onChange={handlReportk}
            value={selectedReportingMngr}
            placeholder="Select Reporting Manager "
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {prof.map((option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        </Col>
        <Col span="3xl">   
          <Form.Item
        
          label="Work Location"
          name="workLocation"
          rules={[
            { required: true, message: "Please select a work location." },
          ]}
        >
          <Select
            showSearch
            style={{ borderRadius: 0 }}
            className="rounded-none"
            onChange={handlework}
            value={selectedworkLocation}
            placeholder=" Select Work Location "
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {prof.map((option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        </Col>
       <Col span="3xl">
        <Form.Item
          
          label="Started Date"
          name="Date"
          rules={[{ message: "Please select a  Date" }]}
         
        >
          <Space direction="vertical"
           style={{ width:"100%"}}>
            <DatePicker
             style={{ width:"100%"}}
          
              onChange={handleDateChange}
              value={selectedDate}
            
              
            />
          </Space>
        </Form.Item>
        </Col>
       
        {/* <Form.Item
        style={{display:"flex" , justifyContent:"center"}}>
          <Col span={24}>
          <Button
            type="primary"
            htmlType="submit"
            className=" bg-[#1890ff]"
            style={{borderRadius:"0" , height:"40px", width:"500%",marginLeft:"20%"}}
          >
            Next
          </Button>
          </Col>
         
        </Form.Item> */}
            <Row gutter={16}>
      {/* Other columns */}
      <Col span={18}>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-[#1890ff]"
          style={{ borderRadius: "0", height: "40px", width: "80%",display:"flex", justifyContent:"center", marginLeft:"40%"}}
          onClick={()=>{setTab(tab+1)}}
          >
        
          Next
        </Button>
      </Col>
    </Row>
        


        {/* <Form.Item>
          <Button
            type="primary"
            htmlType="button"
            className="rounded-md w-20 h-8 bg-blue-600"
          >
            <Link href="/ProfReview">Review</Link>
          </Button>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default ProfessionalInfo;
