import React from "react";

export default function Greeting({ firstName, lastName }) {
  console.log(firstName, lastName);
  return (
    <div>
      <h1>
        Greetings!! Hello {firstName} {lastName}
      </h1>
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
