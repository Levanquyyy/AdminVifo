import React, { useState } from "react";
import { Input, Select, Checkbox, Button, CheckboxProps } from "antd";

interface BenefitPropertyFormProps {
  benefit: any;
  index: number;
  handleInputChangeForProperty: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

const BenefitPropertyForm: React.FC<BenefitPropertyFormProps> = ({
  benefit,
  index,
  handleInputChangeForProperty,
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <>
      <div className="flex flex-col   md:flex-row md:space-y-0" key={index}>
        <div className="flex flex-grow flex-col gap-1">
          <label className="dark:text-white" htmlFor={`Option_title_${index}`}>
            Product Option Title
          </label>
          <Input
            id={`Option_title_${index}`}
            placeholder="Basic usage"
            className="w-full dark:border-strokedark dark:bg-boxdark dark:text-white"
            style={{ borderRadius: "6px", borderColor: "gray" }}
            value={benefit.title}
            onChange={(event) => handleInputChangeForProperty(index, event)}
          />
        </div>
        <div className="flex flex-grow flex-col gap-1">
          <label className="dark:text-white" htmlFor={`Option_select_${index}`}>
            Type
          </label>
          <Select
            size="large"
            className="w-full"
            defaultValue="a1"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "Yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
        <div className="flex flex-grow flex-col gap-1">
          <label
            className="dark:text-white"
            htmlFor={`Option_position_${index}`}
          >
            Product Position
          </label>
          <Input
            id={`Option_position_${index}`}
            placeholder="Basic usage"
            defaultValue="1"
            className="w-full dark:border-strokedark dark:bg-boxdark dark:text-white"
            style={{ borderRadius: "6px", borderColor: "gray" }}
            value={benefit.position}
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
      <Button type="primary" danger className="my-4 self-end dark:bg-red">
        Delete
      </Button>
    </>
  );
};

export default BenefitPropertyForm;
