import React, { useEffect, useState } from "react";

const Userflie = () => {
  useSelfLive("userfile");
  return <h2>Userflie</h2>;
};

export default function UserDeined() {
  const [show, setShow] = useState(true);
  useSelfLive("userdeind");
  return (
    <div>
      自定义HOOK
      <Userflie />
      {show && <Userflie />}
      <button onClick={(e) => setShow(!show)}>切换</button>
    </div>
  );
}

//自定义HOOK
function useSelfLive(name) {
  useEffect(() => {
    console.log(`${name}组件被创建`);
    return () => {
      console.log(`${name}组件被销毁`);
    };
  }, [name]);
}
