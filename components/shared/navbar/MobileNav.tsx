'use client';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavContent = () => {
    const pathName = usePathname();

    return (
        <section className="flex h-full flex-col gap-6 pt-16">
            {sidebarLinks.map((link) => {
                const isActive =
                    (pathName.includes(link.route) && link.route.length > 1) ||
                    pathName === link.route;

                return (
                    <SheetClose key={link.route}>
                        <Link
                            href={link.route}
                            className={`
                                    ${
                                        isActive
                                            ? 'primary-gradient rounded-lg text-light-900'
                                            : 'text-dark300_light900'
                                    } flex items-center justify-start gap-4 bg-transparent p-4
                                `}
                        >
                            <Image
                                src={link.imgURL}
                                width={30}
                                height={30}
                                alt={link.label}
                                className={`${isActive ? '' : 'invert-colors'}`}
                            />
                            <p
                                className={`${isActive ? 'font-bold' : 'font-medium'}`}
                            >
                                {link.label}
                            </p>
                        </Link>
                    </SheetClose>
                );
            })}
        </section>
    );
};

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="cursor-pointer">
                <Image
                    src="/assets/icons/hamburger.svg"
                    width={36}
                    height={36}
                    alt="Menu"
                    className="invert-colors"
                />
            </SheetTrigger>
            <SheetContent
                className="background-light900_dark200 border-none"
                side="left"
            >
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/assets/images/site-logo.svg"
                        width={23}
                        height={23}
                        alt="DevFlow"
                    />
                    <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
                        Dev<span className="text-primary-500">Flow</span>
                    </p>
                </Link>
                <div>
                    <SheetClose className="w-full border-none focus-visible:outline-none">
                        <NavContent />
                    </SheetClose>
                    <SignedOut>
                        <div className="flex flex-col gap-3">
                            <SheetClose>
                                <Link href="/sign-in">
                                    <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                        <span className="primary-text-gradient">
                                            Log In
                                        </span>
                                    </Button>
                                </Link>
                            </SheetClose>
                            <SheetClose>
                                <Link href="/sign-up">
                                    <Button className="small-medium text-dark400_light900 light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                        Sign Up
                                    </Button>
                                </Link>
                            </SheetClose>
                        </div>
                    </SignedOut>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
