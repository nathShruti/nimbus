import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const count = [
    {val: '500', title: 'Clients'},
    {val: '100', title: 'Business Consultants'},
    {val: '27', title: 'Years of Experience'},
  ]

  return (
    <>
      <section className="counter">
        <div className="grid grid-cols-1 pt-28 md:grid-cols-3 md:pt-36 lg:pt-48 font-monotony">
          {count.map((item) => (
            <div className="flex flex-col pb-3">
            <strong data-number={item.val}>
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={item.val}>
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
            <span className="text-white py-2 md:py-0 text-center text-xl uppercase">
              {item.title}
            </span>
          </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Counter;