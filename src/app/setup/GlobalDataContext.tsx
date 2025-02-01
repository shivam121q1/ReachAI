import { createContext, useContext, useState } from "react";

type GlobalDataContextType = {
  pageData: any; // Replace `any` with your data type
  setPageData: (key: string, value: any) => void;
};

const GlobalDataContext = createContext<GlobalDataContextType | undefined>(undefined);

export const GlobalDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageData, setPageDataState] = useState({});

  const setPageData = (key: string, value: any) => {
    setPageDataState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <GlobalDataContext.Provider value={{ pageData, setPageData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }
  return context;
};
