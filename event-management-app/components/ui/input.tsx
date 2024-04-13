import { useForm, useFormContext } from "react-hook-form"
import { z } from "zod"




interface InputProps {
    label: string,
    name: any
    placeholder: string
    description: string
    help?: string

}

const Input = ({ label, name, placeholder, description, help }: InputProps) => {

    const { register, formState: { errors } } = useFormContext();
    console.log(help)
    return (
        <div className="flex flex-col mt-2">
            <label className={`${errors[name]?.message ? 'text-red-500' : 'text-white-100'} text-[0.90rem]`}>{label}</label>
            <input {...register(name)}
                className="w-full px-3 overflow-y-hidden py-2 h-10 rounded-md border bg-transparent border-brown-50 focus:outline-none placeholder-brown-30"
                placeholder={placeholder}
            />
            <span className="text-gray-500">{description}</span>
            <div className={`${errors[name]?.message ? 'h-5' : 'h-3'} mt-1`}>
                <p className={`text-red-500 text-[0.75rem] ${errors[name].message ? '' : 'hidden'}`}>                 
                {typeof errors[name]?.message === 'string' && (
                    <p className={`text-red-500 text-[0.75rem]`}>{errors[name]?.message}</p>
                )}</p>
            </div>

        </div>
    )
}

export default Input;