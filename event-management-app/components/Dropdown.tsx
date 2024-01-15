import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { EventCategory } from '@/constants'

type DropdownProps = {
    onChangeHandler?: () => void,
    value: string,
}

type ICategory = {
    id: string,
    title: string,
}
function Dropdown({ onChangeHandler, value }: DropdownProps) {
    return (
        <Select onValueChange={onChangeHandler} defaultValue={value} >
            <SelectTrigger className="select-field px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {EventCategory.length > 0 && EventCategory.map((category) => (
                    <SelectItem key={category.id} value={category.id} className='select-item p-regular-16'>{category.title}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default Dropdown