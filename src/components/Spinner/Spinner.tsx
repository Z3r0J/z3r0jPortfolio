'use client';

import Text from '@/i18n/Text';

export default function Spinner() {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <span className="spinner-border text-danger fs-1 h1" role="status" />
        <span className="text-white h5">
          &nbsp;&nbsp;
          <Text tid="loading" />
        </span>
      </div>
    </div>
  );
}
