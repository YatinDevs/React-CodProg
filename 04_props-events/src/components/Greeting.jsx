import React from "react";

export default function Greeting({
  firstName,
  lastName,
  users,
  fullName = "Yatin Chaudhari",
  children,
}) {
  // console.log(props);
  // !props : Destructure
  // const { firstName, lastName } = props;
  // console.log(firstName, lastName);

  // !Props are Immutable ! Read - Only ! It affects Parent Components and Makes Function ImPure.
  // props.firstName = "abc"; // Type Error // Cannot assign property to read only .
  return (
    <div>
      <h1>
        Greetings!! Hello {firstName} {lastName}
      </h1>

      {/* {users ? (
        <div>
          Yes
          {users.map((user) => (
            <div> {user}</div>
          ))}
        </div>
      ) : (
        <div>No</div>
      )} */}

      {/* Default Props */}
      <div>{fullName}</div>

      {/* Children Props */}
      <div>{children}</div>
    </div>
  );
}

// export default function Greeting(props) {
//   const { firstName, lastName } = props;
//   return (
//     <div>
//       <h1>
//         Greetings!! Hello {firstName} {lastName}
//       </h1>
//     </div>
//   );
// }
