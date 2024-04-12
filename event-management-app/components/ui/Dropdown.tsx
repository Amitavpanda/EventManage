import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { EventCategory } from "@/constants";
import { useFormContext } from "react-hook-form";

interface DropDownProps {
    name : any,
    description : string,

}

const DropDown = ({name, description} : DropDownProps) => {
    const [active, setActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Category")
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className="relative mb-3">
            <label className={`${ errors[name]?.message ? 'text-red-500' : 'text-black-100' } text-[0.90rem]`}>Category</label>
            <div className="flex-row flexBetween w-full border px-3 py-2 h-15 rounded-md border-brown-50" onClick={ () => setActive(!active)}>
                <p {...register(name)} className="text-brown-50">{selectedItem}</p>                
                <div className="text-brown-50" >{!active ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
            </div>
            <span className="text-gray-500">{description}</span>
            {active &&
            <div className="absolute top-full w-full bg-white rounded-md mt-2">
                {EventCategory.map((item, id) => (
                    <div key={item.id} className="w-full hover:bg-slate-50 p-3" onClick={() => {
                        setSelectedItem(item.title);
                        setActive(false);
                    }}
                    >
                        <p className="text-brown-50 hover:text-black-100">{item.title}</p>
                    </div>
                ))}
            </div>}

        </div>
    )
}

export default DropDown;