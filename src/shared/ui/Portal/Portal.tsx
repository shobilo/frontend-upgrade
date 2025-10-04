import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    /*
     * content to be teleported
     */
    children: React.ReactNode;
    /*
     * where should be teleported
     */
    element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = ({ children, element = document.body }) => {
  return createPortal(children, element);
};
