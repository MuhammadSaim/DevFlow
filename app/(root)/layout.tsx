import LeftSidebar from '@/components/shared/LeftSidebar';
import Navbar from '@/components/shared/navbar/Navbar';
import RightSidebar from '@/components/shared/RightSidebar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="background-light850_dark100 relative">
            <Navbar />
            <div className="flex">
                <LeftSidebar />
                <section className="max-md:pg-14 flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">{children}</div>
                </section>
                <RightSidebar />
            </div>
            {/* Toaster */}
        </main>
    );
};

export default Layout;
