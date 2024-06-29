'use client';

import { ThemeContextType } from '@/types';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState('');

    const handleThemeChange = () => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                matchMedia('(prefer-color-scheme: dark)').matches)
        ) {
            setMode('dark');
            document.documentElement.classList.add('dark');
        } else {
            setMode('light');
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        handleThemeChange();
    }, [mode]);

    return (
        <ThemeContext.Provider
            value={{
                mode,
                setMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be use in ThemeProvider');
    }

    return context;
}
