/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
const GiftItem = ({title,url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GiftItem.propTypes={
  title: PropTypes.string.isRequiered,
  url: PropTypes.string.isRequiered
}
export default GiftItem