import { ColorRing } from 'react-loader-spinner';

export default function Loader({
  children = (
    <ColorRing height="100%" width="100%" ariaLabel="blocks-loading" />
  ),
}) {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        margin: '0 auto',
        // marginTop: 24,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        zIndex: 111111,
      }}
    >
      {children}
    </div>
  );
}