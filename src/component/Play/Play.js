// import React , {useState} from "react";

// import "./Play.css";
// import Icons from "../Moves/Icons";
// import paper from "../images/icon-paper.svg";
// import scissors from "../images/icon-scissors.svg";
// import rock from "../images/icon-rock.svg";

// const Play = ({ id, setSelectedIcon }) => {

//     const [result, setResult] = ("");
//   const playAgain = () => {
//     setSelectedIcon("");
//   };

//   const choiceList = [
//     {
//       id: "PAPER",
//       Image: paper,
//       color: "cornflowerblue",
//     },
//     {
//       id: "SCISSOR",
//       Image: scissors,
//       color: "rgb(224, 224, 46)",
//     },
//     {
//       id: "ROCK",
//       Image: rock,
//       color: "rgb(255, 40, 40)",
//     },
//     ];
    
//    const getResult = () => {
//       if (choice1[0].id === "ROCK") {
//         switch (choice2.id) {
//             case "PAPER":
//                 setResult("YOU LOSE");
//                 break;
//             case "SCISSORS":
//                 setResult("YOU WON");
//                 break;
//           default:
//             setResult("IT IS DRAW");
//         }
//       } else if (choice1[0].id === "PAPER") {
//         switch (choice2.id) {
//           case "ROCK":
//                 setResult("YOU WON")
//                     break;
//             case "SCISSORS":
//                 setResult("YOU LOSE");
//                 break;
//           default:
//             setResult("IT IS DRAW");
//         }
//       } else {
//         switch (choice2.id) {
//             case "ROCK":
//                 setResult("YOU LOSE");
//                 break;
//             case "PAPER":
//                 setResult("YOU WON");
//                 break;
//           default:
//             setResult("IT IS DRAW");
//         }
//       }
//     };

//   const choice1 = choiceList.filter((eachvalue) => eachvalue.id === id);
//   const choice2 = choiceList[Math.floor(Math.random() * choiceList.length)];

//   return (
//     <div className="play">
//       <div className="paper_scissors" onClick={getResult}>
//         <div className="device" >
//           <Icons icon={choice2.Image} alt={choice2.id} clr={choice2.color} />
//         </div>
//         <div className="player">
//           <Icons
//             icon={choice1[0].Image}
//             alt={choice1[0].id}
//             clr={choice1[0].color}
//           />
//           </div>
//           </div>
//         <div className="play-again" onClick={getResult}>
//               <button onClick={playAgain}>PLAY AGAIN</button>
//               <div>{ result}</div>
//         </div>
//     </div>
//   );
// };
// export default Play;
