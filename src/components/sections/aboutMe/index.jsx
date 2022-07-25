import React from 'react';
import { useInView } from 'react-intersection-observer';

import { calculateYears } from '../../../utils/calculateYears';
import { BIRTHDAY_DATE, EXPERIENCE_DATE } from '../../../utils/constants';
import CountBox from '../../countBox';
import Layout from '../../layout';
import Squares from '../../Squares';

const AboutMe = () => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1
  });

  return (
    <Layout title="About" id="AboutMe" gridColumn="1/13">
      <Squares />
      <div ref={wrapperRef} className="about-wrapper">
        <p>
          Hello, my name is Adam. I am {calculateYears(new Date(BIRTHDAY_DATE))} years old and I am
          from Poland. As you can see I am a JavaScript developer, and this is what I love so much!
          Too much time spent on learning, a lot of bad code and failures caused me resistant on
          defeat. Working with a large amount of lines code, experience caused me increasing more
          professionalism.
          <br />
          <strong>Programming is my hooby and I love it!</strong>
        </p>

        <div className="about-amounts-container">
          <CountBox
            text="Years of experience"
            countNumber={calculateYears(new Date(EXPERIENCE_DATE))}
          />
          <CountBox text="Number of written lines of code" countNumber={10000} />
          <CountBox text="Hours spent on learning" countNumber={4860} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
