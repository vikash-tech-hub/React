import React from 'react';

const ChildComponent = React.memo(({ btn, handleCount }) => {
  console.log("Child component render");

  return (
    <div>
      <button onClick={handleCount}>
        {btn}
      </button>
    </div>
  );
});

export default ChildComponent;


// React.memo=> wrap ke dete h Component rerender tabhi 
// hog ajb props change honge nhi to re render nah ihoga
// if you are sendd a function react.memo wwwant be re erenderihng
