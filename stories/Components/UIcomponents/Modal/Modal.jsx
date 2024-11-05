import React, { useEffect } from 'react';
import './modal.scss';
import loader from '../../../assets/js/loader';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Modal({
  content, id, css_class, ...props
}) {
  useEffect(() => {
    if (loader) {
      loader();
    } 
  }, []);
  return (
    <div className={cls('modal', `${css_class}`)} role="dialog" aria-label="modal" aria-modal="true" id={id} data-undpds="data-undpds-modal">
      <div className="modal-content" aria-describedby="content">
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close">Close</button>
        {content}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  css_class: '',
  id: 'modal',
};
