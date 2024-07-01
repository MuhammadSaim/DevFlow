'use client';

import { Input } from '@/components/ui/input';
import { CustomInputProps } from '@/types';
import Image from 'next/image';

const LocalSearchbar = ({
    route,
    iconPosition,
    imgSrc,
    placeholder,
    otherClasses,
}: CustomInputProps) => {
    return (
        <div
            className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] ${otherClasses}`}
        >
            {iconPosition === 'left' && (
                <Image
                    src={imgSrc}
                    alt="Search icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            )}

            <Input
                type="text"
                placeholder={placeholder}
                value=""
                onChange={() => {}}
                className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
            />

            {iconPosition === 'right' && (
                <Image
                    src={imgSrc}
                    alt="Search icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            )}
        </div>
    );
};

export default LocalSearchbar;
