'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const Filter = ({
    filters,
    otherClasses,
    containerClasses,
}: {
    filters: {
        name: string;
        value: string;
    }[];
    otherClasses: string;
    containerClasses: string;
}) => {
    return (
        <div className={`relative ${containerClasses}`}>
            <Select>
                <SelectTrigger className={`${otherClasses} body-regular`}>
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Filter;
