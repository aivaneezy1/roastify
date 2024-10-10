"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface DatiContextType {
    selectedCategories: string;
    setSelectedCategories: Dispatch<SetStateAction<string>>;
}

// Default context value
const defaultContextValue: DatiContextType = {
    selectedCategories: '',
    setSelectedCategories: () => { } // Use an empty function instead of an empty string
};

export const DatiContext = createContext<DatiContextType>(defaultContextValue);

interface DatiContextProviderProps {
    children: ReactNode;
}

const DatiContextProvider = ({ children }: DatiContextProviderProps) => {
    const [selectedCategories, setSelectedCategories] = useState<string>('');

    return (
        <DatiContext.Provider value={{ selectedCategories, setSelectedCategories }}>
            {children}
        </DatiContext.Provider>
    );
};

export default DatiContextProvider;
