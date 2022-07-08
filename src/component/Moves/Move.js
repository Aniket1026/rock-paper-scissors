import React, { useState }  from "react";

import './Move.css'
import '../../App.css'
import Icons from "./Icons";
import PAPER from '../images/icon-paper.svg'
import SCISSOR from '../images/icon-scissors.svg'
import ROCK from '../images/icon-rock.svg'

// import Play from "../Play/Play";

const Move = () => {
  const [selectedIcon, setSelectedIcon] = useState("");
  // const [choice1, setChoice1] = useState([]);
  // const [choice2, setChoice2] = useState([]);
  const [result, setResult] = useState("");

  const handleClick = (event, param) => {
    if (param === "PAPER") { setSelectedIcon("PAPER") }
    else if (param === "SCISSOR") { setSelectedIcon("SCISSOR") }
    else if (param === "ROCK") { setSelectedIcon("ROCK") }
  }

      const playAgain = () => {
        setSelectedIcon("");
      };

      const choiceList = [
        {
          Id: "PAPER",
          Image: PAPER,
          Color: "cornflowerblue",
        },
        {
          Id: "SCISSOR",
          Image: SCISSOR,
          Color: "rgb(224, 224, 46)",
        },
        {
          Id: "ROCK",
          Image: ROCK,
          Color: "rgb(255, 40, 40)",
        },
      ];

      
      // setChoice1(choiceList.filter((eachvalue) => eachvalue.Id === selectedIcon));
      // setChoice2(choiceList[Math.floor(Math.random() * choiceList.length)]);
      // console.log(choice1.Id);
      // console.log(choice2.Id);   
      // console.log(result);
      //     setChoice1(
  var choice1 ;
  var choice2 ;
  
//  const choice1 = choiceList.filter(
//             (eachvalue) => eachvalue.Id === selectedIcon
//           );
//            const choice2 =
//       choiceList[Math.floor(Math.random() * choiceList.length)];
//     console.log("getresult");
        
  const getResult = () => {
           choice1 = choiceList.filter(
            (eachvalue) => eachvalue.Id === selectedIcon
          );
           choice2 =
      choiceList[Math.floor(Math.random() * choiceList.length)];
    console.log(1);
    console.log(choice1);
    if (choice1[0].Id === "ROCK") {
          switch (choice2.Id) {
            case "PAPER":
              setResult("YOU LOSE");
              break;
              case "SCISSOR":
              setResult("YOU WON");
              break;
              default:
              setResult("IT IS DRAW");
            }
        } else if (choice1[0].Id === "PAPER") {
          switch (choice2.Id) {
            case "ROCK":
              setResult("YOU WON");
              break;
            case "SCISSOR":
              setResult("YOU LOSE");
              break;
              default:
                setResult("IT IS DRAW");
              }
            } else {
              switch (choice2.Id) {
                case "ROCK":
                  setResult("YOU LOSE");
                  break;
                  case "PAPER":
                    setResult("YOU WON"); 
                    break;
                    default:
                      setResult("IT IS DRAW");
                    }
                  }
                  
                };
                
                
                // const choice1 = choiceList.filter((eachvalue) => eachvalue.Id === selectedIcon);
                // const choice2 = choiceList[Math.floor(Math.random() * choiceList.length)];


    return (
      <>
        {!selectedIcon ? (
          <div className="moves-container" onClick={getResult}>
            <div className="paper_scissors">
              <div onClick={(event) => handleClick(event, "PAPER")}>
                <Icons icon={PAPER} alt="paper-icon" clr="cornflowerblue" />
              </div>
              <div onClick={(event) => handleClick(event, "SCISSOR")}>
                <Icons
                  icon={SCISSOR}
                  alt="scissor-icon"
                  clr="rgb(224, 224, 46)"
                />
              </div>
            </div>
            <div onClick={(event) => handleClick(event, "ROCK")}>
              <Icons icon={ROCK} alt="rock-icon" clr="rgb(255, 40, 40)" />
            </div>
          </div>
        ) : (
          <div className="play">
            <div className="paper_scissors">
              <div className="device">
                <Icons
                  icon={choice2.Image}
                  alt={choice2.Id}
                  clr={choice2.Color}
                />
              </div>
              <div className="player">
                <Icons
                  icon={choice1[0].Image}
                  alt={choice1[0].Id}
                  clr={choice1[0].Color}
                />
              </div>
            </div>
            <div className="play-again">
              <button onClick={playAgain}>PLAY AGAIN</button>
              <div className="result ">{result} RESULT</div>
            </div>
          </div>
        )}
      </>
    );
  }
  // (<Play id={selectedIcon} setSelectedIcon={setSelectedIcon} />)

export default Move;
