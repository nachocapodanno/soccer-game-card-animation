import React from 'react';
import logo from './person.svg';
import flag from './swiss.png';
import './App.css';
import {motion} from "framer-motion";
import {Frame, Stack} from "framer";

export const App = () => {

  const leftCol = [{att: 'PAC', value: 51}, {att: 'SHO', value: 72}, {att: 'PAS', value: 82}];
  const rightCol = [{att: 'DRI', value: 72}, {att: 'DEF', value: 74}, {att: 'PHY', value: 78}];

  return (
      <div className="App">
        <header className="App-header">
          <div className={'flip-box'}>
          <div className={'flip-box-inner'}>
          <Frame
              className={'flip-box-back'}
              width={"350px"}
              height={"450px"}
              background={"#EEDE88"}
              radius={30}
              rotateY={180}
          >
            <Stack
                backgroundColor={"transparent"}
                top={35}
                left={80}
                center={'x'}
            >
              <span style={{fontSize: '72px', color: '#47390E', marginBottom: '-10px'}}>81</span>
              <motion.div style={{fontSize: '36px', color: '#47390E'}}>CM</motion.div>
              <motion.div animate={{rotate: 180}}
                          transition={{duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse"}}>
                <motion.img src={flag} height={'40px'}></motion.img>
              </motion.div>
            </Stack>
            <motion.div
                transition={{duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse"}}
                animate={{y: [0, -20]}}
            >
              <Frame
                  image={logo}
                  scale={0.9}
                  right={30}
                  top={30}
                  backgroundColor={"transparent"}
              /></motion.div>
            <Frame center top={'75%'} backgroundColor={"transparent"}>
              <span style={{fontSize: '48px', color: '#47390E'}}>XHAKA</span>
              <Stack
                  backgroundColor={"transparent"}
                  center={'x'}
                  top={"35%"}
                  left={"15%"}
              >
                {leftCol.map(data =>
                    <motion.div whileHover={{scale: 1.2}} style={{fontSize: '24px', color: '#47390E'}}><span
                        style={{fontWeight: 'bold'}}>{data.value}</span> {data.att}
                    </motion.div>
                )
                }
              </Stack>
              <Stack
                  backgroundColor={"transparent"}
                  center={'x'}
                  top={"35%"}
                  left={"85%"}
              >
                {rightCol.map(data =>
                    <motion.div whileHover={{scale: 1.2}} style={{fontSize: '24px', color: '#47390E'}}><span
                        style={{fontWeight: 'bold'}}>{data.value}</span> {data.att}
                    </motion.div>
                )
                }
              </Stack>
            </Frame>
          </Frame>
          <Frame
              className={'flip-box-front'}
              width={"350px"}
              height={"450px"}
              background={"#EEDE88"}
              radius={30}
          >
            FIFA CARD
          </Frame>
          </div>
          </div>
        </header>
      </div>
  );
}

export default App;
