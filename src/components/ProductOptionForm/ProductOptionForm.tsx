import React, { useEffect, useState } from "react";
import { Input, Select, Checkbox, Button, CheckboxProps } from "antd";
import BenefitPropertyForm from "../BenefitPropertyForm/BenefitPropertyForm";

interface ProductOptionFormProps {
  index: number;
  benefit: string;
}

const ProductOptionForm: React.FC<ProductOptionFormProps> = ({
  index,
  benefit,
}) => {
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
  const [benefitforProperty, setBenefitsforProperty] = useState<string[]>([]);
  const handleAddBenefitForProperty = createAddBenefitHandler(
    benefitforProperty,
    setBenefitsforProperty,
  );

  const handleInputChangeForProperty = createInputChangeHandler(
    benefitforProperty,
    setBenefitsforProperty,
  );

  const [checked, setChecked] = useState<boolean>(false);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };
  useEffect(() => {
    handleAddBenefitForProperty();
  }, []);
  return (
    <div className=" mb-3 w-full  rounded-md  border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center space-x-4">
        {/* Add some space between items */}
        <div className="flex flex-grow flex-col gap-1">
          {/* Make each input container grow */}
          <label htmlFor="Option_title" className="dark: text-white">
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
        <Button type="primary" danger className="self-end dark:bg-red">
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
        {benefitforProperty.map((benefit, index) => (
          <BenefitPropertyForm
            key={index}
            benefit={benefit}
            index={index}
            handleInputChangeForProperty={handleInputChangeForProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductOptionForm;
