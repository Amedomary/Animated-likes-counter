import React, { useRef, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import LikeIcon from './Icon';
import './LikeButtonAnimated.css';
import { randomNumber } from './utils';

const rangeMass = [0.3, 2, 4.5, 6];

const NumberSpring = ({ projectile }) => {
  const [show, setShow] = useState(true);
  const { current: elementMass } = useRef(randomNumber(rangeMass[0], rangeMass[3]));
  const weight = elementMass > rangeMass[2] ? 'bold' : elementMass < rangeMass[1] ? 'lighter' : 'normal';

  const transitions = useTransition(show, {
    from: { opacity: 0, y: 0, x: 0 },
    enter: { opacity: 1, y: randomNumber(-20, -35), x: randomNumber(-3, 3) },
    leave: { opacity: 0 },
    delay: 900,
    config: { mass: elementMass, tension: 210, friction: 20 },
    onRest: () => setShow(false),
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.span
          style={{ color: 'var(--text-level-2)', fontWeight: weight, position: 'absolute', left: '27px', whiteSpace: 'nowrap', ...styles }}
        >
          {projectile}
        </animated.span>
      )
  );
};

const HexSpringSVG = ({ id }) => {
  const aConfig = {
    dur: '1s',
    repeatCount: '1',
  };

  const { current: height } = useRef(randomNumber(40, 80));
  const { current: rotationCount } = useRef(Math.random() * 720);

  return (
    <svg
      style={{ position: 'absolute', pointerEvents: 'none', top: 0, zIndex: 100 }}
      width="50"
      height="100"
      viewBox="0 0 50 100"
      fill="var(--lba-c-accent)"
    >
      <g id={`circle${id}`} transform="translate(-7, -6)" opacity="0">
        <g>
          <path d="M4.49737 2H11.5026L15 8L11.5026 14H4.49737L1 8L4.49737 2Z" fill="var(--lba-c-bg)" />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M4.49737 2H11.5026L15 8L11.5026 14H4.49737L1 8L4.49737 2ZM5.18481 3.16129L2.36435 8L5.18481 12.8387H10.8152L13.6356 8L10.8152 3.16129H5.18481Z"
            fill="var(--lba-c-accent)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.7424 4.47657L11.3847 7.32116L10.379 7.90181L8.73669 5.05722L9.7424 4.47657Z"
            fill="var(--lba-c-accent)"
          />

          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            values={`0 8 8; ${rotationCount} 8 8;`}
            repeatCount="indefinite"
          />
        </g>

        <animate
          attributeName="opacity"
          values="0;1;1;1;1;1;1;1;0"
          dur={aConfig.dur}
          repeatCount={aConfig.repeatCount}
        />
      </g>

      <animateMotion
        fill="freeze"
        keyPoints="0;1"
        keyTimes="0;1"
        keySplines="0.3 0.8 0.8 0.2"
        dur={aConfig.dur}
        calcMode="spline"
        begin="0s"
        repeatCount={aConfig.repeatCount}
        origin="10 10"
        xlinkHref={`#circle${id}`}
        path={`M8 8C8 ${height} 27 ${height} 27 13`}
      />
    </svg>
  );
};

const LikeButtonAnimated = ({ disabledButton, handleLike, projectile, style, likes, classes }) => {
  const [list, setList] = useState([]);
  const [countStyle, setCountStyle] = useState({});
  const durationCancel = 5000;
  const durationPing = 100;
  const durationIncomingAnimation = 1000;

  const onLike = () => {
    const now = new Date().getTime();
    setList((a) => [...a, now]);

    setTimeout(() => {
      setCountStyle({
        transform: 'translateY(-1px)',
        color: style.countTextActiveColor,
      });
      handleLike();

      setTimeout(() => {
        setCountStyle({});
      }, durationPing);
    }, durationIncomingAnimation);

    setTimeout(() => {
      setList((a) => a.slice(1));
    }, durationCancel);
  };

  return (
    <button
      type="button"
      disabled={disabledButton}
      className={`lba-root ${classes?.root || ''}`}
      onClick={onLike}
    >
      {list.length > 0 &&
        list.map((e) => (
          <React.Fragment key={e}>
            <HexSpringSVG id={e} />
            <NumberSpring projectile={projectile} />
          </React.Fragment>
        ))}

      <LikeIcon className={`lba-icon ${classes?.icon || ''}`} />

      <div className={classes?.countText || ''} style={countStyle}>
        {likes}
      </div>
    </button>
  );
};

LikeButtonAnimated.defaultProps = {
  projectile: '+1',
  disabledButton: false,
  style: {
    countTextActiveColor: 'var(--lba-c-icon-hover)'
  }
}

export default LikeButtonAnimated;
