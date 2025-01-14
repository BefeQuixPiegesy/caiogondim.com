import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Shell from './shell'
import Header from './header'
import HeaderDivider from './header-divider'
import AspectRatio from './aspect-ratio'
import Image from './image'
import { gray30, white4 } from '../util/colors'

const descriptionStyle = css`
  text-align: right;
  color: ${gray30};
`

function PhotoDetail ({ title, subtitle, imgSrc, imgRatio, camera, shutter, lens, iso }) {
  return (
    <Shell width="100%">
      <Header pageName="/ Photos" />
      <HeaderDivider
        title={title}
        subtitle={subtitle}
      />
      <p>
        <AspectRatio ratio={imgRatio} backgroundColor={white4}>
          <Image src={imgSrc} alt={title} />
        </AspectRatio>
      </p>
      <p css={descriptionStyle}>
        {camera}<br />
        {shutter}<br />
        {lens}<br />
        {iso}
      </p>
    </Shell>
  )
}

PhotoDetail.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgSrc: PropTypes.string,
  imgRatio: PropTypes.string,
  camera: PropTypes.string,
  shutter: PropTypes.string,
  lens: PropTypes.string,
  iso: PropTypes.string
}

export default PhotoDetail
