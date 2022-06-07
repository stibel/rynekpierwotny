import { ReactNode } from "react";

interface PageProps {
  children?: ReactNode | Array<ReactNode>;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
