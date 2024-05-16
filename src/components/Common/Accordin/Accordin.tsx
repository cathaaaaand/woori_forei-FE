import { createContext, useContext, useState, ReactNode } from 'react';
import * as St from './style';

interface AccordionContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);
const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'useAccordionContext must be used within a SmartAccordionProvider',
    );
  }
  return context;
};

interface SmartAccordionProps {
  children: ReactNode;
}

export const SmartAccordion: React.FC<SmartAccordionProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <AccordionContext.Provider value={value}>
      <St.SmartAccordionWrapper>{children}</St.SmartAccordionWrapper>
    </AccordionContext.Provider>
  );
};

interface SmartAccordionHeaderProps {
  children: ReactNode;
}

export const SmartAccordionHeader: React.FC<SmartAccordionHeaderProps> = ({
  children,
}) => {
  const { isOpen, setIsOpen } = useAccordionContext();
  return (
    <St.SmartAccordionHeader onClick={() => setIsOpen(!isOpen)}>
      {children}
    </St.SmartAccordionHeader>
  );
};

interface SmartAccordionBodyProps {
  children: ReactNode;
}

export const SmartAccordionBody: React.FC<SmartAccordionBodyProps> = ({
  children,
}) => {
  const { isOpen } = useAccordionContext();

  return (
    <St.SmartAccordionBody>
      {isOpen ? <div className="inner">{children}</div> : null}
    </St.SmartAccordionBody>
  );
};
