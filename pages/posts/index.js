import { css } from '@emotion/core'
import Shell from '../../components/shell'
import Header from '../../components/header'
import Content from '../../components/content'
import ListItemHeader from '../../components/list-item-header'
import listOfPosts from '../../util/list-of-posts'

const postsStyle = css`
  list-style: none;

  li {
    margin: 0 0 3.815rem 0;
  }
`

export default function Posts () {
  return (
    <Shell>
      <Header pageName="/ Posts" />
      <Content>
        <ul css={postsStyle}>
          {listOfPosts.map(postMeta => {
            return (
              <li key={postMeta.link}>
                <ListItemHeader title={postMeta.title} titleLink={postMeta.link} subtitle={postMeta.dateString} />
                <p dangerouslySetInnerHTML={{ __html: postMeta.summary }}></p>
              </li>
            )
          })}
        </ul>
      </Content>
    </Shell>
  )
}
