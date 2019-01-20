import React from 'react'

const Listo = ({ done, todoText }) => {
  return (
    <div className="container mx-auto py-3 ">
      <div className="flex no-wrap items-center">
        <button className="mr-4">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className={`${
              done
                ? 'fill-done hover:fill-not-done'
                : 'fill-not-done hover:fill-done'
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i)">
              <circle cx="15" cy="15" r="15" />
            </g>
            <defs>
              <filter
                id="filter0_i"
                x="0"
                y="0"
                width="30"
                height="34"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow"
                />
              </filter>
            </defs>
          </svg>
        </button>

        <div
          className={`${
            done ? 'bg-done' : 'bg-not-done'
          } rounded flex flex-col flex-1 items-center px-4 py-2 `}
        >
          <h3
            className={`${
              done ? 'line-through' : ''
            } antialiased text-white font-semibold text-sm tracking-wide leading-loose`}
          >
            {todoText}
          </h3>
        </div>
      </div>
    </div>
  )
}
export default Listo
