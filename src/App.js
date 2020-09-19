import React, {useEffect} from 'react';
import logo from './person.svg';
import flag from './swiss.png';
import './App.css';
import {motion, useCycle, useMotionValue, useTransform} from "framer-motion";
import {Frame, Stack} from "framer";

export const App = () => {
  const y = useMotionValue(40);
  const x = useTransform(y, value => value * 2)

  return (
      <div className="App">
        <header className="App-header">
          <Frame
              width={"350px"}
              height={"450px"}
              background={"#EEDE88"}
              radius={30}
          >
            <Stack
                backgroundColor={"transparent"}
                top={35}
                left={80}
                center={'x'}
            >
              <span style={{fontSize: '72px', color: '#47390E', marginBottom: '-10px'}}>81</span>
              <motion.div style={{fontSize: '36px', color: '#47390E'}}>CM</motion.div>
              <motion.div animate={{ rotate: 180 }}
                          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }} ><motion.img src={flag} height={'40px'}></motion.img></motion.div>
            </Stack>
            <motion.div
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                animate={{ y: [0, -20] }}
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
                <motion.div whileHover={{ scale: 1.2 }} style={{fontSize: '24px', color: '#47390E'}}><span style={{fontWeight:'bold'}}>51</span> PAC</motion.div>
                <motion.div whileHover={{ scale: 1.2 }} style={{fontSize: '24px', color: '#47390E'}}><span style={{fontWeight:'bold'}}>72</span> SHO</motion.div>
                <motion.div whileHover={{ scale: 1.2 }} style={{fontSize: '24px', color: '#47390E'}}><span style={{fontWeight:'bold'}}>82</span> PAS</motion.div>
              </Stack>
              <Stack
                  backgroundColor={"transparent"}
                  center={'x'}
                  top={"35%"}
                  left={"85%"}
              >
                <motion.div whileHover={{ scale: 1.2 }} style={{fontSize: '24px', color: '#47390E'}}><span style={{fontWeight:'bold'}}>72</span> DRI</motion.div>
                <motion.div whileHover={{ scale: 1.2 }} style={{fontSize: '24px', color: '#47390E'}}><span style={{fontWeight:'bold'}}>74</span> DEF</motion.div>
                <motion.div whileHover={{ scale: 1.2 }} style={{fontSize: '24px', color: '#47390E'}}><span style={{fontWeight:'bold'}}>78 </span>PHY</motion.div>
              </Stack>
            </Frame>


          </Frame>
        </header>
      </div>
  );
}

export default App;
