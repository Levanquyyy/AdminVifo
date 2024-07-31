"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type {
  CheckboxProps,
  CollapseProps,
  TabsProps,
  UploadProps,
} from "antd";
import {
  Checkbox,
  Collapse,
  Button,
  Modal,
  Input,
  message,
  Upload,
} from "antd";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import { UploadOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";

const { TextArea } = Input;

const metadata: Metadata = {
  title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormLayout = () => {
  // handel modal
  const [isCoverages, setIsCoverages] = useState(false);
  const showisCoverages = () => {
    setIsCoverages(true);
  };

  const handleisCoverages = () => {
    setIsCoverages(false);
  };

  const handleCancelisCoverages = () => {
    setIsCoverages(false);
  };
  const [Attributes, setAttributes] = useState(false);
  const showAttributes = () => {
    setAttributes(true);
  };

  const handleAttributes = () => {
    setAttributes(false);
  };

  const handleCancelAttributes = () => {
    setAttributes(false);
  };
  // check upload file
  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const [checked, setChecked] = useState(false);
  const [underpricess, setUnderprices] = useState("hidden");
  const [benefitforbike, setBenefitsforbike] = useState([""]);
  const [benefitforpricesquan, setBenefitforpricesquan] = useState([""]);
  const createAddBenefitHandler = (benefits: any, setBenefits: any) => () => {
    setBenefits([...benefits, ""]);
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };
  const createInputChangeHandler =
    (benefits: any, setBenefits: any) => (index: number, event: any) => {
      const newBenefits = [...benefits];
      newBenefits[index] = event.target?.value;
      setBenefits(newBenefits);
    };
  const handleAddBenefitForBike = createAddBenefitHandler(
    benefitforbike,
    setBenefitsforbike,
  );
  const handleInputChangeForBike = createInputChangeHandler(
    benefitforbike,
    setBenefitsforbike,
  );

  const onChangeTab = (key: string) => {
    console.log(key);
  };

  const itemstabs: TabsProps["items"] = [
    {
      key: "1",
      label: "EN",
      children: <input type="text" className="handlecsspicker" />,
    },
    {
      key: "2",
      label: "VN",
      children: <input type="text" className="handlecsspicker" />,
    },
  ];

  const getItems: () => CollapseProps["items"] = () => [
    {
      key: "1",
      label: "Add Product Family",
      children: (
        <>
          <Breadcrumb pageName="Add Product Family" />

          <div className=" gap-9  sm:grid-cols-4 ">
            <div className="flex flex-col gap-9">
              {/* <!--Bao hiem xe co --> */}
              <div className="w1/2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <form action="#">
                  <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      {/* <!-- File upload --> */}
                      <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="  rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className=" border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                              File upload
                            </h3>
                          </div>
                          <div className="flex flex-col gap-5.5 ">
                            <div className="px-3">
                              <label className="mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                product Logo
                              </label>
                              <input
                                type="file"
                                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                              />
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                    </div>

                    {/* product name */}
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col gap-6 px-3 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            product name (English)
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="English"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            product name (Việt Nam)
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="VietNam"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col gap-6 p-3 xl:flex-row">
                        <div className=" handlecssplacholder w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white xl:w-1/2">
                          <TextArea
                            required
                            rows={4}
                            placeholder="Mô tả sản phẩm (Việt Nam)"
                            maxLength={500}
                            className=" dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="handlecssplacholder w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white xl:w-1/2">
                          <TextArea
                            required
                            rows={4}
                            placeholder="Mô tả sản phẩm (English)"
                            maxLength={500}
                            className="dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    {/* product desc */}

                    {/* product slug */}
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col gap-6 px-3 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            Product Slug (English)
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="English"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            Product Slug (Việt Nam)
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="VietNam"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    {/* product name */}
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col gap-6 px-3 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            Promotion Text (English)
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Promotion Text (English)"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            Promotion Text (Việt Nam)
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Promotion Text (Việt Nam)"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"></div>

                    {/* product category */}

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className=" w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white xl:w-1/2">
                        {/* <!-- Chọn Category --> */}
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                              <h3 className=" font-medium capitalize text-black dark:text-white">
                                CateLog
                              </h3>
                            </div>
                            <div className="flex flex-col gap-5.5 p-6.5">
                              <SelectGroupTwo id="Danhmuc" nhacungcap="Catelog">
                                <option value="xemay">Physical</option>
                                <option value="xehoi">Bảo Hiểm Xe Máy</option>
                                <option value="suckhoe">
                                  Bảo Hiểm Sức Khỏe
                                </option>
                              </SelectGroupTwo>
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                      <div className="w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white xl:w-1/2">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                              <h3 className="font-medium text-black dark:text-white">
                                Providers
                              </h3>
                            </div>
                            <div className="flex flex-col gap-5.5 p-6.5">
                              <SelectGroupTwo
                                id="provider"
                                nhacungcap="Provider"
                              >
                                <option value="dongabank">DOng A Bank</option>
                                <option value="mbbank">MB Bank</option>
                                <option value="bamabank">Ba Ma Bank</option>
                              </SelectGroupTwo>
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                    </div>
                    {/* Valid After (days) */}
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col gap-6 px-3 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            Valid After (days)
                          </label>
                          <input
                            required
                            type="number"
                            placeholder="English"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            Product Family Code *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="VietNam"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* product rank */}

                    {/* product position */}
                    <div className="w-full rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col items-center gap-6 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            position
                          </label>
                          <input
                            type="text"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            SMS Content
                          </label>
                          <TextArea
                            rows={2}
                            className="dark:bg-form-input dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="mb-4.5 flex flex-col flex-wrap gap-6 xl:flex-row">
                        <div className="flex flex-1 flex-wrap gap-4">
                          <div className="min-w-[200px] flex-1">
                            <label
                              htmlFor="upload1"
                              className="mb-3 block text-sm font-medium capitalize text-black dark:text-white"
                            >
                              Product Family Banner
                            </label>
                            <Upload {...props} className="flex-1" id="upload1">
                              <Button
                                icon={<UploadOutlined />}
                                className="dark:text-white"
                              >
                                Click to Upload
                              </Button>
                            </Upload>
                          </div>
                          <div className="min-w-[200px] flex-1">
                            <label
                              htmlFor="upload2"
                              className="mb-3 block text-sm font-medium capitalize text-black dark:text-white"
                            >
                              Product Family Banner Promotion
                            </label>
                            <Upload {...props} className="flex-1" id="upload2">
                              <Button
                                icon={<UploadOutlined />}
                                className="dark:text-white"
                              >
                                Click to Upload
                              </Button>
                            </Upload>
                          </div>
                          <div className="min-w-[200px] flex-1">
                            <label
                              htmlFor="upload3"
                              className="mb-3 block text-sm font-medium capitalize text-black dark:text-white"
                            >
                              Order Template Upload
                            </label>
                            <Upload {...props} className="flex-1" id="upload3">
                              <Button
                                icon={<UploadOutlined />}
                                className="dark:text-white"
                              >
                                Click to Upload
                              </Button>
                            </Upload>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-wrap gap-8">
                          <div className="flex gap-3">
                            <label className="mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                              Coverages
                            </label>
                            <Button
                              type="primary"
                              onClick={showisCoverages}
                              className="bg-primary"
                            >
                              +
                            </Button>
                            <Modal
                              title="Add Coverage"
                              open={isCoverages}
                              onOk={handleisCoverages}
                              onCancel={handleCancelisCoverages}
                              className="dark: bg-form-input"
                            >
                              <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="mb-4.5  flex flex-col gap-6 px-3">
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Label (en) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="English"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Label (vi) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="VietNam"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Description (en) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="VietNam"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Description (vi) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="VietNam"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <Checkbox
                                      onChange={onChange}
                                      className=" text-black dark:bg-boxdark dark:text-white "
                                    >
                                      Required
                                    </Checkbox>
                                    <Checkbox
                                      onChange={onChange}
                                      className=" text-black dark:bg-boxdark dark:text-white"
                                    >
                                      Sort
                                    </Checkbox>
                                    <Checkbox
                                      onChange={onChange}
                                      className=" text-black dark:bg-boxdark dark:text-white"
                                    >
                                      Filter
                                    </Checkbox>
                                  </div>
                                  <div className=" w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white ">
                                    {/* <!-- Chọn Category --> */}
                                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"></div>
                                        <div className="flex flex-col gap-5.5 p-6.5">
                                          <SelectGroupTwo
                                            id="Danhmuc"
                                            nhacungcap="Field Type "
                                          >
                                            <option value="xemay">
                                              Physical
                                            </option>
                                            <option value="xehoi">
                                              Bảo Hiểm Xe Máy
                                            </option>
                                            <option value="suckhoe">
                                              Bảo Hiểm Sức Khỏe
                                            </option>
                                          </SelectGroupTwo>
                                        </div>
                                      </div>

                                      <br />
                                    </div>
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      position
                                    </label>
                                    <input
                                      type="number"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Modal>
                          </div>
                          <div className="flex  gap-3">
                            <label className="mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                              Attributes
                            </label>
                            <Button
                              type="primary"
                              onClick={showAttributes}
                              className="bg-primary"
                            >
                              +
                            </Button>
                            <Modal
                              title="Basic Modal"
                              open={Attributes}
                              onOk={handleAttributes}
                              onCancel={handleAttributes}
                            >
                              <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="mb-4.5  flex flex-col gap-6 px-3">
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Label (en) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="English"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Label (vi) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="VietNam"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Description (en) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="VietNam"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      Description (vi) *
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="VietNam"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <Checkbox
                                      onChange={onChange}
                                      className=" text-black dark:bg-boxdark dark:text-white "
                                    >
                                      Required
                                    </Checkbox>
                                    <Checkbox
                                      onChange={onChange}
                                      className=" text-black dark:bg-boxdark dark:text-white"
                                    >
                                      Sort
                                    </Checkbox>
                                    <Checkbox
                                      onChange={onChange}
                                      className=" text-black dark:bg-boxdark dark:text-white"
                                    >
                                      Filter
                                    </Checkbox>
                                  </div>
                                  <div className=" w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white ">
                                    {/* <!-- Chọn Category --> */}
                                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"></div>
                                        <div className="flex flex-col gap-5.5 p-6.5">
                                          <SelectGroupTwo
                                            id="Danhmuc"
                                            nhacungcap="Field Type "
                                          >
                                            <option value="xemay">
                                              Physical
                                            </option>
                                            <option value="xehoi">
                                              Bảo Hiểm Xe Máy
                                            </option>
                                            <option value="suckhoe">
                                              Bảo Hiểm Sức Khỏe
                                            </option>
                                          </SelectGroupTwo>
                                        </div>
                                      </div>

                                      <br />
                                    </div>
                                  </div>
                                  <div className="w-full ">
                                    <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                                      position
                                    </label>
                                    <input
                                      type="number"
                                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="w-full ">
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                        >
                          Has Beneficiary
                        </Checkbox>
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                        >
                          Is Allow Send SMS
                        </Checkbox>
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                        >
                          Is Disable Reminder
                        </Checkbox>
                      </div>
                    </div>

                    <div className="mb-6"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <DefaultLayout>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        items={getItems()}
      />
      <button
        type="submit"
        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 "
      >
        Submit
      </button>
    </DefaultLayout>
  );
};

export default FormLayout;
