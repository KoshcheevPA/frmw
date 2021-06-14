import React from 'react';

export default function ContainerComponent({title, children}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="accordion shadow" style={{maxWidth: '901px'}}>
      <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => setOpen(!open)}>
          <button className="accordion-button collapsed" type="button">
            {title}
          </button>
        </h2>
        {open && (
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}