import Icon from "./Icon";

export const Modal = ({
    title,
    children,
    footer,
    showModal,
    onClose,
    size,
  }) => {
    return (
      <>
        <div className={showModal ? "d-block modal " : "modal"}>
          <div className={`modal-dialog ${size}`}>
            <div className="modal-content">
              <section className="modal-header">
                <h5 className="modal-title text-center">
                  {title}
                </h5>
                <Icon
                  className="border-0 "
                  icon={["fas", "xmark"]}
                  onClick={onClose}
                />
              </section>
              <section className="modal-body">{children}</section>
              <section className="modal-footer">{footer}</section>
            </div>
          </div>
        </div>
      </>
    );
  };
  