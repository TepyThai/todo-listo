import React from 'react'
const ListoHeader = props => {
  return (
    <div className=" shadow z-40 sticky pin-t mb-4 py-2  w-screen bg-white">
      <div className="flex justify-between items-center container px-4 mx-auto max-w-iphonex">
        <div className="flex items-baseline ">
          <h2 className="font-mono font-hairline text-header mr-2 text-md border-b-2 border-header">
            All List
          </h2>
          <button className="">
            <svg
              className="fill-header hover:fill-done"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 14L0.20577 0.5L15.7942 0.500002L8 14Z" />
            </svg>
          </button>
        </div>
        <button className="hover:bg-not-done flex justify-center item-center w-12 h-12 rounded-full bg-header z-50 shadow-md  ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="40" height="40" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0" transform="scale(0.00694444)" />
              </pattern>
              <image
                id="image0"
                width="144"
                height="144"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAQAAABNTyozAAABIklEQVR4Ae3cAWYDQQCF4UkgZ9icLgGQY7bb7QXWghxi7QFe1QpRK0XLzPJ9R/gxZnimAAAAAAAAAADA73LKLfd8u+eWU3lGuox5NuZcHsgxb/mpz7GwyiVbroVVPrJlKKwyZ8tcWGVbCgJtEkgggQQSSCCBBEIggQQSSKBGCSSQQAIJJJBAAiGQQAIJJJBAArW8LWzQY+tYf1vYsjHn2tvCdtXfOuaSPbjW3Ra2b6i/LWzbXC/Qkj1Y6gUasgefzR7SDulD+rTuPYe6F8UpLZvSlXo8NTxWBRJIIIEQSCCBBBJIIIEEEkgggQQSSCCBBBJIoAgkkEACCSSQQAIJRJaX20Iy/GVb6LNbckj/cltIukz/vC30ZTsAAAAAAAAAAHwBKyo7n4zXChAAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ListoHeader
