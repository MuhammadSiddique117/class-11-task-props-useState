import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const name = "Name : Muhammad Siddique";
  const student="Student : At GIAIC"
  const aim = "Aim : Become software developer";
  const dream ="Dream : Success in life"


  return (
    <div>
      <ChildComponent fullname={name} student={student} aim={aim} dream={dream} />
    </div>
  );
};

export default ParentComponent;