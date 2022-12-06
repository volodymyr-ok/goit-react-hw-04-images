import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ margin: 'auto' }}>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};
