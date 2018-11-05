import React from 'react'

const SvgIconMediation = props => (
  <svg width={175} height={175} {...props}>
    <defs>
      <circle id="icon-mediation_svg__a" cx={57.618} cy={57.618} r={57.618} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle
        cx={57.618}
        cy={57.618}
        r={57.618}
        transform="rotate(45 57.276 59.749)"
        strokeWidth={2}
        stroke="#5A7EFF"
      />
      <g transform="rotate(135 74.995 99.03)">
        <circle
          stroke="#5A7EFF"
          strokeWidth={2}
          cx={57.618}
          cy={57.618}
          r={57.618}
        />
        <mask id="icon-mediation_svg__b" fill="#fff">
          <use xlinkHref="#icon-mediation_svg__a" />
        </mask>
        <g mask="url(#icon-mediation_svg__b)" stroke="#5A7EFF" strokeWidth={2}>
          <path d="M27.761 89.853v33.862M42.428 82.786v40.93M58.142 81.723v41.992M72.808 83.49v40.225M87.475 89.854v33.861" />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgIconMediation
