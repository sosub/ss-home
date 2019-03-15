import { Helmet } from 'react-helmet';
import { Link } from '../../routes';
import { Container, Info, Table, Col, TH, THContent, TR, A } from './styles';
import { ShareLink } from '../Theme';

const ListingPage = () => (
  <Container>
    <Helmet>
      <title>Danh sách chỉ mục</title>
      <meta property="og:title" content="Danh sách chỉ mục - SOSUB.ORG" />
      <meta
        property="og:image"
        content="/static/home/img/thumbnail_sosub.png"
      />
      <meta
        property="og:description"
        content="Đây là toàn bộ các danh sách mà bạn có thể tra cứu trên SOSUB. Bạn có thể tra cứu diễn giả, kênh gốc, danh mục, tag, playlist, người dịch, hay nhà tài trợ. Tất cả đều tập hợp ở đây."
      />
    </Helmet>
    <Info px={[10, 80, 150, 250]}>
      <h1>Danh sách chỉ mục</h1>
      <ShareLink
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsosub.org%2Flisting%2F&display=popup&ref=plugin&src=like&kid_directed_site=0&app_id=1015678545158200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Facebook
      </ShareLink>
    </Info>
    <Table>
      <thead>
        <tr>
          <TH>
            <THContent>
              <span>TÊN</span>
            </THContent>
          </TH>
        </tr>
      </thead>
      <tbody>
        <TR>
          <Col>
            <Link route="list" params={{ type: 'category' }} passHref>
              <A>
                <b>Danh mục</b>
              </A>
            </Link>
          </Col>
        </TR>
        {/* <TR>
          <Col>
            <Link route="list" params={{ type: 'tag' }} passHref>
              <A>
                <b>Tags</b>
              </A>
            </Link>
          </Col>
        </TR> */}
        <TR>
          <Col>
            <Link route="list" params={{ type: 'playlist' }} passHref>
              <A>
                <b>Playlists</b>
              </A>
            </Link>
          </Col>
        </TR>
        <TR>
          <Col>
            <Link route="list" params={{ type: 'speaker' }} passHref>
              <A>
                <b>Diễn giả</b>
              </A>
            </Link>
          </Col>
        </TR>
        <TR>
          <Col>
            <Link route="list" params={{ type: 'source' }} passHref>
              <A>
                <b>Kênh gốc</b>
              </A>
            </Link>
          </Col>
        </TR>
        <TR>
          <Col>
            <Link route="list" params={{ type: 'sponsor' }} passHref>
              <A>
                <b>Nhà tài trợ nội dung</b>
              </A>
            </Link>
          </Col>
        </TR>
        <TR>
          <Col>
            <Link route="list" params={{ type: 'sosuber' }} passHref>
              <A>
                <b>Sosubers</b>
              </A>
            </Link>
          </Col>
        </TR>
      </tbody>
    </Table>
  </Container>
);

export default ListingPage;
