import { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Hide from 'hidden-styled';
import ReactMarkdown from 'react-markdown';
import ReactPlayerSubtitles from 'react-player-subtitles';
import connect from './store';
import {
  Container,
  H1,
  H3,
  P,
  A,
  BoxRight,
  Logo,
  SponsorTitle,
  Banner,
  RandomVideos,
  VideoImage,
  VideoA,
  BecomeSponsorA,
  Avatar,
  Speaker,
  Tabs,
  Tab,
  Tag,
  Category,
  SubCategory,
  EmbedInput
} from './styles';
import { ShareLink } from '../Theme';
import { Link } from '../../routes';

class VideoPage extends Component {
  state = {
    tab: 'description'
  };
  onViewCount() {
    // eslint-disable-next-line
    fetch(`/graphql?query=mutation%20%7B%0A%20%20increaseViews(slug%3A%20"${this.props.slug}")%20%7B%0A%20%20%20%20video%20%7B%0A%20%20%20%20%20%20viewAmount%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`, { method: 'POST' });
  }

  render() {
    const {
      slug,
      cookie,
      data: { video, randomVideos, networkStatus }
    } = this.props;
    const { tab } = this.state;
    // console.log('data', this.props.data, video, networkStatus);
    if (networkStatus === 2 || networkStatus === 1) {
      return (
        <Flex align="center" justify="center" style={{ minHeight: 500 }}>
          <Helmet>
            <title>{slug}</title>
          </Helmet>
          <p>Đang tải...</p>
        </Flex>
      );
    }
    if (video) {
      return (
        <div>
          <Helmet>
            <title>{video.title}</title>
            <meta property="og:title" content={`${video.title} - SOSUB.ORG`} />
            <meta property="og:image" content={video.image} />
            <meta property="og:description" content={video.description} />
          </Helmet>
          <ReactPlayerSubtitles
            cookies={cookie}
            backgroundImage={video.image}
            url={`https://www.youtube.com/watch?v=${video.videoId}`}
            playerWidth={1000}
            primarySubtitleURL={video.viSub}
            secondarySubtitleURL={video.enSub}
            onViewCount={() => this.onViewCount()}
          />
          <Container>
            <Flex mb={20} direction={['column', 'column', 'column', 'row']}>
              <Box px={20} width={[1, 1, 1, 2 / 3]} mb={[50, 50, 50, 0]}>
                <H1>{video.title}</H1>
                <Flex justify="space-between" align="center">
                  <ShareLink
                    href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsosub.org%2F${
                      video.slug
                    }%2F&display=popup&ref=plugin&src=like&kid_directed_site=0&app_id=1015678545158200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share on Facebook
                  </ShareLink>
                  <P>{`${video.viewAmount} lượt xem`}</P>
                </Flex>
                <Box mt={20}>
                  Nhúng
                  <EmbedInput
                    defaultValue={`<iframe width="853" height="480" src="https://sosub.org/embed/${slug}/" frameborder="0" allowfullscreen="1"></iframe>`}
                  />
                </Box>
              </Box>
              {video.sponsor ? (
                <BoxRight px={20} width={[1, 1, 1, 1 / 3]}>
                  <SponsorTitle>Tài trợ phụ đề</SponsorTitle>
                  <Link route={`/sponsor/${video.sponsor.slug}/`} passHref>
                    <a>
                      <Flex align="center">
                        <Logo
                          src={video.sponsor.image}
                          alt={video.sponsor.name}
                        />
                        <div>
                          <h2>{video.sponsor.name}</h2>
                          <span>{video.sponsor.slogan}</span>
                        </div>
                      </Flex>
                    </a>
                  </Link>
                </BoxRight>
              ) : (
                <BoxRight px={20} width={[1, 1, 1, 1 / 3]}>
                  <BecomeSponsorA href="/give/" target="_blank">
                    Tài trợ dịch video này
                  </BecomeSponsorA>
                </BoxRight>
              )}
            </Flex>
            {video.sponsor && video.sponsor.adLink ? (
              <Flex align="center" justify="center" mb={30} px={10}>
                <a href={video.sponsor.adLink} target="_blank">
                  <Banner
                    src={video.sponsor.adImage}
                    alt={video.sponsor.adTooltip}
                  />
                </a>
              </Flex>
            ) : null}
            <Flex mt={70} direction={['column', 'column', 'row', 'row']}>
              <Box px={20} width={[1, 1, 2 / 3, 2 / 3]} mb={[50, 50, 0, 0]}>
                <Flex
                  justify="space-between"
                  mb={30}
                  direction={['column', 'column', 'row', 'row']}
                >
                  <Box>
                    <p>
                      <u>Kênh gốc:</u>
                    </p>
                    <Link route={`/source/${video.source.slug}/`} passHref>
                      <A>
                        <Flex align="center">
                          <Avatar
                            src={video.source.image}
                            alt={video.source.name}
                          />
                          <P>
                            <b>{video.source.name}</b>
                          </P>
                        </Flex>
                      </A>
                    </Link>
                  </Box>
                  {video.speakers && video.speakers.length > 0 ? (
                    <Box>
                      <p>
                        <u>Diễn giả:</u>
                      </p>
                      <Flex align="center">
                        {video.speakers.map(speaker => (
                          <Link
                            key={speaker.slug}
                            route={`/speaker/${speaker.slug}/`}
                            passHref
                          >
                            <A>
                              <Speaker>
                                <Avatar
                                  src={
                                    speaker.image ||
                                    '/static/home/img/no_avatar.jpg'
                                  }
                                  alt={speaker.name}
                                />
                                <P>
                                  <b>{speaker.name}</b>
                                </P>
                              </Speaker>
                            </A>
                          </Link>
                        ))}
                      </Flex>
                    </Box>
                  ) : null}
                </Flex>
                <Box mb={10}>
                  {video.categories && video.categories.length > 0
                    ? video.categories.map(category => (
                        <Flex
                          key={category.slug}
                          direction={['column', 'column', 'row', 'row']}
                        >
                          <Link route={`/category/${category.slug}/`} passHref>
                            <Category>{category.name}</Category>
                          </Link>
                          {video.subcategories && video.subcategories.length > 0
                            ? video.subcategories
                                .filter(subcategory => {
                                  if (
                                    subcategory.parent.slug === category.slug
                                  ) {
                                    return subcategory;
                                  }
                                  return null;
                                })
                                .map(subcategory => (
                                  <SubCategory key={subcategory.slug}>
                                    {subcategory.name}
                                  </SubCategory>
                                ))
                            : null}
                        </Flex>
                      ))
                    : null}
                </Box>
                <Flex mb={50} direction={['column', 'column', 'row', 'row']}>
                  {video.tags && video.tags.length > 0
                    ? video.tags.map(tag => (
                        <Link
                          key={tag.slug}
                          route={`/tag/${tag.slug}/`}
                          passHref
                        >
                          <Tag>{`# ${tag.name}`}</Tag>
                        </Link>
                      ))
                    : null}
                </Flex>
                <Flex align="center" mb={15}>
                  <Link route={`/sosuber/${video.creator.slug}/`} passHref>
                    <A>
                      <Flex align="center">
                        {video.creator.image ? (
                          <Avatar
                            src={video.creator.image}
                            alt={video.creator.name}
                          />
                        ) : null}
                        <P>
                          <b>{video.creator.name}</b>
                        </P>
                      </Flex>
                    </A>
                  </Link>
                  <p>
                    &nbsp;đăng ngày&nbsp;
                    <b>{video.publishedAt.slice(0, 10)}</b>
                  </p>
                </Flex>
                <Hide xs sm>
                  <Tabs>
                    <Tab
                      active={tab === 'description'}
                      onClick={() => this.setState({ tab: 'description' })}
                    >
                      Mô tả
                    </Tab>
                    <Tab
                      active={tab === 'viTranscript'}
                      onClick={() => this.setState({ tab: 'viTranscript' })}
                    >
                      Bản dịch Tiếng Việt
                    </Tab>
                    <Tab
                      active={tab === 'enTranscript'}
                      onClick={() => this.setState({ tab: 'enTranscript' })}
                    >
                      English Transcript
                    </Tab>
                  </Tabs>
                </Hide>
                <div>
                  {tab === 'description' ? (
                    <ReactMarkdown
                      softBreak="br"
                      source={video[tab] || ''}
                      renderers={{
                        Link: props => (
                          <a href={props.href} target="_blank">
                            {props.children}
                          </a>
                        )
                      }}
                    />
                  ) : (
                    <ReactMarkdown source={video[tab]} />
                  )}
                </div>
              </Box>
              <BoxRight px={20} py={10} width={[1, 1, 1 / 3, 1 / 3]}>
                <H3>VIDEOS NGẪU NHIÊN</H3>
                {randomVideos &&
                randomVideos.edges &&
                randomVideos.edges.length > 0 ? (
                  <RandomVideos>
                    {randomVideos.edges.map(({ node: randomVideo }) => (
                      <li key={randomVideo.slug}>
                        <Link route={`/${randomVideo.slug}/`} passHref>
                          <VideoA>
                            <Flex align="center">
                              <VideoImage
                                src={randomVideo.image}
                                alt={randomVideo.title}
                              />
                              <div>
                                <h2>{randomVideo.title}</h2>
                                <small>
                                  {`${randomVideo.viewAmount} lượt xem`}
                                </small>
                              </div>
                            </Flex>
                          </VideoA>
                        </Link>
                      </li>
                    ))}
                  </RandomVideos>
                ) : null}
              </BoxRight>
            </Flex>
          </Container>
        </div>
      );
    }
    return (
      <Flex align="center" justify="center" style={{ minHeight: 500 }}>
        <Helmet>
          <title>404 Page not found</title>
        </Helmet>
        <p>Trang không tồn tại</p>
      </Flex>
    );
  }
}

VideoPage.defaultProps = {
  cookie: ''
};

VideoPage.propTypes = {
  cookie: PropTypes.string,
  slug: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default connect(VideoPage);
