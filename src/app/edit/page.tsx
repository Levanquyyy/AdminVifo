"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CheckboxProps, CollapseProps } from "antd";
import { Avatar, Checkbox, Collapse, Select, theme } from "antd";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { DatePicker, Space } from "antd";
import { useRef, useState } from "react";
import { Button, Input } from "antd";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Price from "@/components/Prices/Price";
import BenefitPropertyForm from "@/components/BenefitPropertyForm/BenefitPropertyForm";
import ProductOptionForm from "@/components/ProductOptionForm/ProductOptionForm";
const onChangeInPut: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const metadata: Metadata = {
  title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormLayout = () => {
  const [benefitforbike, setBenefitsforbike] = useState<string[]>([]);
  const [benefitforOptions, setBenefitforOptions] = useState([]);
  const [properties, setProperties] = useState([]);
  const [checked, setChecked] = useState<boolean>(false);
  const createAddBenefitHandler =
    (
      benefits: string[],
      setBenefits: React.Dispatch<React.SetStateAction<string[]>>,
    ) =>
    () => {
      setBenefits([...benefits, ""]);
    };

  const createInputChangeHandler =
    (
      benefits: string[],
      setBenefits: React.Dispatch<React.SetStateAction<string[]>>,
    ) =>
    (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const newBenefits = [...benefits];
      newBenefits[index] = event.target.value;
      setBenefits(newBenefits);
    };
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  const handleAddBenefitForBike = createAddBenefitHandler(
    benefitforbike,
    setBenefitsforbike,
  );
  const handleInputChangeForBike = createInputChangeHandler(
    benefitforbike,
    setBenefitsforbike,
  );
  const handleAddBenefitForOptions = () => {
    setBenefitforOptions([...benefitforOptions, {}]);
  };

  const handleAddBenefitForProperty = () => {
    setProperties([...properties, {}]);
  };

  const handleDeleteProperty = (index: any) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  // const handleAddBenefitForProperty = createAddBenefitHandler(
  //   benefitforProperty,
  //   setBenefitsforProperty,
  // );

  // const handleInputChangeForProperty = createInputChangeHandler(
  //   benefitforProperty,
  //   setBenefitsforProperty,
  // );

  // const handleAddBenefitForOptions = createAddBenefitHandler(
  //   benefitforOptions,
  //   setBenefitsforOptions,
  // );

  // const handleInputChangeForOptions = createInputChangeHandler(
  //   benefitforOptions,
  //   setBenefitsforOptions,
  // );
  const onChangeTab = (key: string) => {
    console.log(key);
  };
  const url =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

  const itemstabs: TabsProps["items"] = [
    {
      key: "1",
      label: "EN",
      children: (
        <input type="text" className="handlecsspicker" defaultValue={"a"} />
      ),
    },
    {
      key: "2",
      label: "VN",
      children: <input type="text" className="handlecsspicker" />,
    },
  ];
  // Correctly type the ref to be an HTMLInputElement
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Function to trigger input click
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const getItems: () => CollapseProps["items"] = () => [
    {
      key: "1",
      label: "Product Information",
      children: (
        <>
          <Breadcrumb pageName="Thêm Sản Phẩm" />

          <div className=" gap-9  sm:grid-cols-4 ">
            <div className="flex flex-col gap-9">
              {/* <!--Bao hiem xe co --> */}
              <div className="w1/2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Tên Sản Phẩm
                  </h3>
                </div>
                <form action="#">
                  <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      {/* <!-- File upload --> */}
                      <div className="  w-full rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex items-center  rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className="flex h-full flex-col gap-5.5 ">
                            <div className="flex items-center gap-3 px-3">
                              <label className=" block text-sm font-medium capitalize text-black dark:text-white">
                                product Logo
                              </label>
                              <div className="">
                                <input
                                  ref={fileInputRef} // Step 2: Assign the ref to the input
                                  type="file"
                                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                  style={{ display: "none" }}
                                />
                                <div className="" onClick={handleAvatarClick}>
                                  <Avatar src={url} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                      <div className="w-full">
                        <Space direction="vertical" size={12}>
                          <RangePicker showTime className="handlecsspicker" />
                        </Space>
                      </div>
                    </div>

                    {/* product code */}
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col gap-6 px-3 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            product code
                          </label>
                          <input
                            defaultValue="TASCOTNCAR20120179B"
                            required
                            type="text"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            version
                          </label>
                          <input
                            defaultValue="2"
                            required
                            type="text"
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
                            product name (English)
                          </label>
                          <input
                            defaultValue="Car 3th party Insurance"
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
                            defaultValue="BH TNDS Tải chở hàng TASCO Dưới 3 tấn - Không KD"
                            required
                            type="text"
                            placeholder="VietNam"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                            defaultValue={
                              "bao_hiem_trach_nhiem_dan_su_tasco_xe_tai_cho_hang_duoi_3_tan_kkd"
                            }
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
                            defaultValue={
                              "bao_hiem_trach_nhiem_dan_su_tasco_xe_tai_cho_hang_duoi_3_tan_kkd"
                            }
                            required
                            type="text"
                            placeholder="VietNam"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      {/* product highlight */}
                      <div className="mb-4.5 flex flex-col gap-6 px-3 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            Product Highlighted Text (English)
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
                            Product Highlighted Text (Việt Nam)
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
                    {/* product description */}
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
                    {/* product category */}

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className=" w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white xl:w-1/2">
                        {/* <!-- Chọn Category --> */}
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                              <h3 className=" font-medium capitalize text-black dark:text-white">
                                product family
                              </h3>
                            </div>
                            <div className="flex flex-col gap-5.5 p-6.5">
                              <SelectGroupTwo
                                id="Danhmuc"
                                nhacungcap="Bảo Hiểm Bắt Buộc"
                              >
                                <option value="xemay">Bảo Hiểm Xe Hơi</option>
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
                                nhacungcap="Bảo HIểm Tasco"
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
                    {/* product rank */}

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className=" w-full rounded-sm border border-stroke bg-white font-medium text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white">
                        {/* <!-- Chọn Category --> */}
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                              <h3 className=" font-medium capitalize text-black dark:text-white">
                                rank
                              </h3>
                            </div>
                            <div className="flex flex-col gap-5.5 p-6.5">
                              <SelectGroupTwo id="Danhmuc" nhacungcap="Tai">
                                <option value=""></option>
                              </SelectGroupTwo>
                              <Checkbox
                                onChange={onChange}
                                className="text-black dark:text-white"
                              >
                                Vifo Choice
                              </Checkbox>
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                    </div>
                    {/* product position */}
                    <div className="w-full rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            position
                          </label>
                          <input
                            defaultValue={"0"}
                            type="text"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            External link
                          </label>
                          <input
                            type="text"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full ">
                          <label className=" mb-3 block text-sm font-medium capitalize text-black dark:text-white">
                            evalution
                          </label>
                          <input
                            type="text"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full ">
                          <SelectGroupTwo
                            id="Commission"
                            nhacungcap="Exclude Tax"
                          >
                            <option
                              value="Exclude Tax"
                              className="text-black dark:text-white"
                            >
                              Exclude Tax
                            </option>
                            <option
                              value="Include Tax"
                              className="text-black dark:text-white"
                              disabled
                            >
                              Include Tax
                            </option>
                          </SelectGroupTwo>
                        </div>
                      </div>
                    </div>
                    <div className="w-full rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="w-full ">
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                          checked={!checked}
                        >
                          Activated
                        </Checkbox>
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                        >
                          Is Partnership
                        </Checkbox>
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                        >
                          Is LeadCapture
                        </Checkbox>
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                        >
                          Has promotion
                        </Checkbox>
                        <Checkbox
                          onChange={onChange}
                          className=" text-black dark:bg-boxdark dark:text-white"
                        >
                          Contact Us
                        </Checkbox>
                      </div>
                      <div className="mb-4.5">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Giá
                        </label>
                        <input
                          type="number"
                          placeholder="Điền Giá Tiền"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>

                      {benefitforbike.map((benefit, index) => (
                        <div key={index} className="mb-4.5 w-full">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Thêm lợi ích
                          </label>
                          <input
                            type="text"
                            placeholder="Thêm lợi ích"
                            value={benefit}
                            onChange={(event) =>
                              handleInputChangeForBike(index, event)
                            }
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                      ))}
                      <div className="mb-4.5 flex justify-end">
                        <Button
                          type="primary"
                          className="bg-primary dark:text-white"
                          onClick={handleAddBenefitForBike}
                        >
                          Thêm Lợi ích
                        </Button>
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
    {
      key: "2",
      label: "Product Attachments",
      children: (
        <>
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              {/* <!-- File upload --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className=" border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Term & Condition File
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                      <input
                        type="file"
                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <br />
                </div>
              </div>
              <div className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className=" border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Detail File
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
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
        </>
      ),
    },
    {
      key: "3",
      label: "Prices",
      children: (
        <>
          <Price />
        </>
      ),
    },
    {
      key: "4",
      label: "Product Detail",
      children: (
        <Tabs
          defaultActiveKey="1"
          items={itemstabs}
          onChange={onChangeTab}
          className=" rounded-sm border border-b border-stroke bg-white px-6.5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white"
        />
      ),
    },
    {
      key: "5",
      label: "Product Options",
      children: (
        <>
          <Button
            type="primary"
            className="mb-3 bg-primary"
            onClick={handleAddBenefitForOptions}
          >
            Add Product Option
          </Button>
          <div className="   mb-3 rounded-md  border  border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark xl:w-full">
            <div className="flex flex-col  space-y-4 md:flex-row ">
              {/* Add some space between items */}
              <div className="flex flex-grow flex-col gap-1">
                {/* Make each input container grow */}
                <label className="dark:text-white" htmlFor="Option_title">
                  Product Option Title
                </label>
                <Input
                  id="Option_title"
                  placeholder="Basic usage"
                  className="w-full  dark:border-strokedark dark:bg-boxdark dark:text-white"
                  style={{ borderRadius: "6px", borderColor: "gray" }}
                />
                {/* Ensure input takes full width */}
              </div>
              <div className="flex flex-grow flex-col gap-1">
                <label htmlFor="Option_select" className="dark:text-white">
                  Type
                </label>
                <Select
                  size={"large"}
                  className="w-full  dark:border-strokedark dark:bg-boxdark dark:text-white"
                  defaultValue="a1"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
              <div className="flex flex-grow flex-col gap-1">
                <label htmlFor="Option_position" className="dark:text-white">
                  Product Position
                </label>
                <Input
                  id="Option_position"
                  placeholder="Basic usage"
                  defaultValue={"1"}
                  className="w-full  dark:border-strokedark dark:bg-boxdark dark:text-white"
                  style={{ borderRadius: "6px", borderColor: "gray" }}
                />
              </div>
              <Button type="primary" danger className="self-end dark:bg-red ">
                Delete
              </Button>
            </div>
            <div className="mt-4 w-full">
              <Button
                type="primary"
                className="my-3 bg-primary dark:text-white"
                onClick={handleAddBenefitForProperty}
              >
                Add Property
              </Button>
            </div>
            {properties.map((property, index) => (
              <>
                <div
                  className="flex flex-col   space-y-4 md:flex-row md:space-y-0"
                  key={index}
                >
                  <div className="flex flex-grow flex-col gap-1">
                    <label
                      htmlFor={`Option_title_${index}`}
                      className="dark:text-white"
                    >
                      Product Option Title
                    </label>
                    <Input
                      id={`Option_title_${index}`}
                      placeholder="Basic usage"
                      className="w-full  dark:border-strokedark dark:bg-boxdark dark:text-white"
                      style={{ borderRadius: "6px", borderColor: "gray" }}
                    />
                  </div>
                  <div className="flex flex-grow flex-col gap-1">
                    <label
                      htmlFor={`Option_select_${index}`}
                      className="dark: text-white "
                    >
                      Type
                    </label>
                    <Select
                      size="large"
                      className="w-full  dark:border-strokedark dark:bg-boxdark"
                      defaultValue="a1"
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "Yiminghe" },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </div>
                  <div className="flex flex-grow flex-col gap-1">
                    <label
                      htmlFor={`Option_position_${index}`}
                      className="dark: text-white"
                    >
                      Product Position
                    </label>
                    <Input
                      id={`Option_position_${index}`}
                      placeholder="Basic usage"
                      defaultValue="1"
                      className="w-full  dark:border-strokedark dark:bg-boxdark dark:text-white"
                      style={{ borderRadius: "6px", borderColor: "gray" }}
                    />
                  </div>
                  <div className="flex flex-grow items-center">
                    <Checkbox
                      onChange={onChange}
                      className="text-black dark:bg-boxdark dark:text-white"
                      checked={checked}
                    >
                      Sku
                    </Checkbox>
                    <Checkbox
                      onChange={onChange}
                      className="text-black dark:bg-boxdark dark:text-white"
                    >
                      Position
                    </Checkbox>
                    <Checkbox
                      onChange={onChange}
                      className="text-black dark:bg-boxdark dark:text-white"
                    >
                      No Tax
                    </Checkbox>
                    <Checkbox
                      onChange={onChange}
                      className="text-black dark:bg-boxdark dark:text-white"
                    >
                      Pre Check
                    </Checkbox>
                  </div>
                </div>
                <Button type="primary" danger className="my-4 self-end">
                  Delete
                </Button>
              </>
            ))}
          </div>

          {benefitforOptions.map((benefit, index) => (
            <ProductOptionForm key={index} index={index} benefit={benefit} />
          ))}
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
        Thêm Bảo Hiểm
      </button>
    </DefaultLayout>
  );
};

export default FormLayout;
