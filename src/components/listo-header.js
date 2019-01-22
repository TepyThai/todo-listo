import React from 'react'
import { connect } from 'react-redux'
import { onSaveTodo, onSetFilter } from '../state/actions'

const Filter = ({ label, active, isLastLabel, onSetFilter }) => {
  const filteredClassName = active
    ? 'border-b-2 border-header pb-2 -mb-3 text-header font-bold'
    : 'text-grey'
  const mr = isLastLabel ? '' : 'mr-4'

  return (
    <h2
      className={`${filteredClassName} ${mr} font-sans hover:cursor-pointer text-base font-hairline text-md`}
      onClick={onSetFilter}
    >
      {label}
    </h2>
  )
}

class ListoHeader extends React.Component {
  state = {
    addingNewTodo: false,
    text: '',
  }
  handleToggleAdd = () => {
    this.setState({ addingNewTodo: !this.state.addingNewTodo, text: '' })
  }

  onValueChange = e => {
    this.setState({ text: this.textRef.value })
  }
  render() {
    const { onSaveTodo, filter, onSetFilter } = this.props
    const { addingNewTodo, text } = this.state

    return (
      <div className=" shadow z-40 sticky pin-t py-4  w-screen bg-white">
        <div className="flex flex-col container px-4 mx-auto max-w-iphonex">
          <div className="justify-between items-end flex">
            <div className="flex items-baseline border-b-2 border-grey-lighter pb-2">
              <Filter
                label="All"
                active={filter === 'all'}
                onSetFilter={() => onSetFilter('all')}
              />
              <Filter
                label="Active"
                active={filter === 'active'}
                onSetFilter={() => onSetFilter('active')}
              />
              <Filter
                label="Completed"
                isLastLabel
                active={filter === 'done'}
                onSetFilter={() => onSetFilter('done')}
              />
              {/* <button className="focus:outline-none">
                <svg
                  className="fill-header hover:fill-done"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 14L0.20577 0.5L15.7942 0.500002L8 14Z" />
                </svg>
              </button> */}
            </div>

            {addingNewTodo ? (
              <button
                onClick={() => {
                  onSaveTodo(this.textRef.value)
                  this.handleToggleAdd()
                }}
                className="focus:outline-none hover:bg-not-done flex justify-center item-center w-12 h-12 rounded-full bg-header z-50 shadow-md  "
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="40"
                  height="40"
                  className=" fill-white p-2"
                  xmlSpace="preserve"
                >
                  <path
                    d="M83,5H17C10.4,5,5,10.4,5,17v66c0,6.6,5.4,12,12,12h66c6.6,0,12-5.4,12-12V17C95,10.4,89.6,5,83,5z M89,83c0,3.3-2.7,6-6,6
	H17c-3.3,0-6-2.7-6-6V17c0-3.3,2.7-6,6-6h66c3.3,0,6,2.7,6,6V83z M78.4,29.6c0.8,0.8,0.8,2,0,2.8l-38,38C40,70.8,39.5,71,39,71
	s-1-0.2-1.4-0.6l-16-16c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0L39,66.2l36.6-36.6C76.4,28.8,77.6,28.8,78.4,29.6z"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={this.handleToggleAdd}
                className="focus:outline-none hover:bg-not-done flex justify-center item-center w-12 h-12 rounded-full bg-header z-50 shadow-md  "
              >
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
            )}
          </div>
          {addingNewTodo && (
            <textarea
              ref={el => (this.textRef = el)}
              autoFocus
              className="w-full my-6 appearance-none py-3 px-4 leading-tight focus:outline-none focus:bg-white block bg-grey-lightest text-grey-darker rounded-lg border-header border-2"
              placeholder="Write down your task here"
              value={text}
              onChange={e => this.onValueChange(e)}
              rows={3}
            />
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    filter: state.setFilter.filter,
  }),
  { onSaveTodo, onSetFilter }
)(ListoHeader)
