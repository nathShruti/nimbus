import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="counter">
        <div className="grid grid-cols-3 pt-48 font-monotony">
          <div className="flex flex-col">
            <strong data-number="500">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={500}>
                {({ countUpRef }) => {
                  return (
                    <div>
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-5xl text-white text-center" ref={countUpRef} />
                    </ReactVisibilitySensor>
                    <span className="text-5xl text-white text-center">+</span>
                    </div>
                  );
                }}
              </CountUp>
            </strong>
            <span className="text-white text-center text-xl uppercase">
              CLIENTS
            </span>
          </div>

          <div className="flex flex-col">
            <strong data-number="100">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={100}>
                {({ countUpRef }) => {
                  return (
                    <div>
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-5xl text-white text-center" ref={countUpRef} />
                    </ReactVisibilitySensor>
                    <span className="text-5xl text-white text-center">+</span>
                    </div>
                  );
                }}
              </CountUp>
            </strong>
            <span className="text-white text-xl uppercase text-center">
              BUSINESS CONSULTANTS
            </span>
          </div>

          <div className="flex flex-col">
            <strong data-number="27">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={27}>
                {({ countUpRef }) => {
                  return (
                    <div>
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-5xl text-white text-center" ref={countUpRef} />
                    </ReactVisibilitySensor>
                    <span className="text-5xl text-white text-center">+</span>
                    </div>
                  );
                }}
              </CountUp>
            </strong>
            <span className="text-white text-xl uppercase text-center">
              YEARS OF EXPERIENCE
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;