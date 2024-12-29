import React from 'react';
interface Props{
  fullname:string;
  student:string;
  aim:string;
  dream:string
} 



const ChildComponent :React.FC<Props> =(props) => {
  console.log(props);
  return (
    <>
      <div className="bg-lime-500 flex justify-center flex-col">
      
       <p className='text-center text-2xl p-6'>Passing Value from ParentComponent to ChildComponent with the help of Props </p>
        <ul className="flex lg:flex-col justify-center items-center">
          <li>{props.fullname}</li>
          <li>{props.student}</li>
          <li>{props.aim}</li>
          <li>{props.dream}</li>
        </ul>
      </div>
    </>
  );
};

export default ChildComponent;