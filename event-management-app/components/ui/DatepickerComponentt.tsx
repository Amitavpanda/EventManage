
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";

interface DatePickerComponentProps {
    name : any,
    description : string,

}
const DatePickerComponent = ({ name, description } : DatePickerComponentProps) => {
    const [startDate, setStartDate] = useState(new Date());
    const { register, formState: { errors } } = useFormContext();
    return (
        <div>
            <label className="text-black-100' text-[0.90rem]">Category</label>
            <div className="flex-1 w-full rounded-md border border-brown-50 px-3 py-2 focus:outline-none bg-transparent" >
                <DatePicker {...register(name)} selected={startDate} onChange={(date) => setStartDate(date)} className="w-full bg-transparent focus:outline-none" showTimeSelect timeInputLabel="Time: " dateFormat="MM/dd/yyyy h:mm aa" wrapperClassName="datePicker" />
            </div>
        </div>

    )

}


export default DatePickerComponent;