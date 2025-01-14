import PropTypes from 'prop-types'
import Link from 'next/link'
import { css } from '@emotion/core'
import { gray50, gray60 } from '../util/colors'

const containerStyle = css`
  font-variant-numeric: normal;
`

const titleStyle = css`
  margin-top: 0;

  a {
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  @media (hover:hover) {
    a:hover {
      text-decoration: underline;
    }
  }
`

const subtitleStyle = css`
  margin: 0;
  color: ${gray60};

  @media (prefers-color-scheme: dark) {
    color: ${gray50};
  }
`

function ListItemHeader ({ title, subtitle, titleLink }) {
  return (
    <div css={containerStyle}>
      <p css={subtitleStyle}>{subtitle}</p>
      <h3 css={titleStyle}>
        {titleLink
          ? (<Link href={titleLink}>
            <a>{title}</a>
          </Link>)
          : title
        }
      </h3>
    </div>
  )
}

ListItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  titleLink: PropTypes.string
}

ListItemHeader.defaultProps = {
  titleLink: null
}

export default ListItemHeader
