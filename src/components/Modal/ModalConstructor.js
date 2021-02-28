import React from "react";
import { useSpring, a } from "react-spring";
import styled from 'styled-components'

const ModalContext = React.createContext({
  content: null,
  closeModal: () => null,
  open: false,
  openModal: (content) => null
});

const ModalInner = ({ ModalContent }) => {
  const { children, title } = ModalContent();

  return (
    <>
      <div className="modal-title">
        <h2>{title}</h2>
      </div>
      <div className="modal-content">{children}</div>
    </>
  );
};

const Modal = () => {
  const { closeModal, content: ModalContent } = useModalContext();
  if (!ModalContent) {
    return null;
  }
  return (
    <div className="modal-body">
      <button onClick={closeModal} className="modal-exit"></button>
      <ModalInner ModalContent={ModalContent} />
    </div>
  );
};

export const useModalContext = () => {
  return React.useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [{ open, content }, setContent] = React.useState({
    open: false,
    content: () => ({})
  });
  const modalSpring = useSpring({
    from: { display: "none" },
    to: async (next) => {
      if (open) {
        await next({
          display: "block",
          transform: "translate(0px,0px)",
          opacity: 1
        });
      } else {
        await next({ transform: "translate(0px, -100px)", opacity: 0 });
        await next({
          display: "none"
        });
      }
    }
  });
  return (
    <ModalContext.Provider
      value={{
        open,
        content,
        openModal: (content) => {
          setContent({ open: true, content });
        },
        closeModal: () => {
          setContent((state) => ({ ...state, open: false }));

          setTimeout(() => {
            setContent((state) => ({ ...state, content: null }));
          }, 500);
        }
      }}
    >
      <a.div style={modalSpring} className="modal">
        <Modal />
      </a.div>
      {children}
    </ModalContext.Provider>
  );
};

