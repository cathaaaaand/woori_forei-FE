// import {
//   PropsWithChildren,
//   createContext,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from 'react';
// import * as St from './style';

// interface DropdownContextValue {
//   isOpen: boolean;
//   select: string;
//   handleOpen: () => void;
//   handleClose: () => void;
//   handleSelctAndClose: (item: string) => void;
// }

// const DropdownContext = createContext<DropdownContextValue | null>(null);

// interface Props {
//   value: string;
//   onChange: React.Dispatch<React.SetStateAction<string>>;
//   key?: number;
// }
// export const useDropdownContext = () => {
//   const context = useContext(DropdownContext);
//   if (context === null) {
//     throw new Error(
//       'useDropdownContext must be used within a DropdownProvider',
//     );
//   }
//   return context;
// };

// export const Dropdown = ({
//   value,
//   children,
//   onChange,
// }: PropsWithChildren<Props>) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [select, setSelect] = useState(value);

//   const firstMounded = useRef(true);
//   useEffect(() => {
//     if (!firstMounded.current) {
//       onChange(select);
//     }
//     firstMounded.current = false;
//   }, [select]);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };
//   const handleSelctAndClose = (item: string) => {
//     handleClose();
//     setSelect(item);
//   };
//   return (
//     <DropdownContext.Provider
//       value={{ isOpen, select, handleOpen, handleClose, handleSelctAndClose }}
//     >
//       {children}
//     </DropdownContext.Provider>
//   );
// };

// export const Trigger = ({ children }: PropsWithChildren<Props>) => {
//   const context = useDropdownContext();
//   const { isOpen, handleOpen, handleClose } = context;
//   return <div onClick={!isOpen ? handleOpen : handleClose}>{children}</div>;
// };

// export const Menu = ({ children }: PropsWithChildren<Props>) => {
//   const { isOpen } = useDropdownContext();

//   if (!isOpen) return null;

//   return (
//     <St.MenuWrapper>
//       <St.Lists>{children}</St.Lists>
//     </St.MenuWrapper>
//   );
// };
// export const Item = ({ value }: Props) => {
//   const { handleSelctAndClose, select } = useDropdownContext();
//   return (
//     <St.ItemWrapper
//       isSelect={select === value}
//       onClick={() => handleSelctAndClose(value)}
//     >
//       {value}
//     </St.ItemWrapper>
//   );
// };

// Dropdown.Trigger = Trigger;
// Dropdown.Menu = Menu;
// Dropdown.Item = Item;

// interface SelectProps {
//   value: string;
//   onChange: React.Dispatch<React.SetStateAction<string>>;
//   options: Array<string>;
//   Trigger: React.ReactNode;
// }

// export const Select = ({ value, onChange, Trigger, options }: SelectProps) => {
//   return (
//     <Dropdown value={value} onChange={onChange}>
//       <Dropdown.Trigger>{Trigger}</Dropdown.Trigger>
//       <Dropdown.Menu>
//         {options.map((option, index) => (
//           <Dropdown.Item key={index} value={option} />
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };
