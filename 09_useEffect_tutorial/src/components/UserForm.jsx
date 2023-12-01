import React, { useEffect, useRef } from "react";
// ! - 8. Focus on Input when component mounts.

function UserForm() {
  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form>
      <input
        type="text"
        name=""
        id=""
        placeholder="username"
        ref={usernameRef}
      />
    </form>
  );
}

export default UserForm;
