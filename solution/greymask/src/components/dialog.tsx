import { createPortal } from 'react-dom';

import './dialog.css'

const PortalDialog = (props: any) => {
  const { visible, children} = props;
  console.log(visible)
  return visible
    ? createPortal(
        <div className='portalDialog'>
            {children}
        </div>,
        document.getElementById('root')!,
      )
    : null;
};

export default PortalDialog;