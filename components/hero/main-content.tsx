import { TypeAnimation } from "react-type-animation";

export default function MainContent() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
        <span className="block">Mohammad Waliullah</span>
        <span className="text-primary block mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2200,
              "SaaS Founder",
              2200,
              "Website Developer",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>

      <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
        Software developer focused on scalable backends, performance
        optimization, and modern full-stack development.
      </p>
    </>
  );
}



// import { TypeAnimation } from "react-type-animation";

// export default function MainContent() {
//   return (
//     <>
//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
//         <span className="block">Mohammad Waliullah</span>
//         <span className="text-primary block mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
//           <TypeAnimation
//             sequence={[
//               "Full-Stack Developer",
//               2200,
//               // "Backend Engineer",
//               2200,
//               "Website Developer",
//               1800,
//             ]}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//           />
//         </span>
//       </h1>

//       <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
//         Software developer focused on scalable backends, performance optimization, and modern full-stack
//         development.
//       </p>

//     </>
//   )
// }