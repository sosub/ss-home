import { Component } from 'react';
import PropTypes from 'prop-types';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import ListPage from '../components/ListPage';
import connect from '../components/ListPage/store';

const LISTS = {
  category: {
    query: 'categories',
    name: 'Danh mục',
    description:
      'Tất cả video phụ đề song ngữ của SOSUB đều được sắp xếp vào các danh mục dưới đây. Vì mỗi video có thể đề cập đến rất nhiều chủ đề khác nhau nên việc phân loại chỉ là tương đối. Điều quan trọng là hãy khám phá mọi thứ và rút ra bài học để áp dụng vào lĩnh vực mà bạn yêu thích.'
  },
  tag: {
    query: 'tags',
    name: 'Tags',
    description:
      'Mỗi video phụ đề song ngữ có thể có gắn tag hoặc không, tùy vào người đăng bài. Vậy có thể sẽ còn những video khác liên quan tới chủ đề mà bạn quan tâm những không nằm trong danh sách tag dưới đây. Bạn có thể sử dụng thêm trang /search để tìm video như ý muốn.'
  },
  playlist: {
    query: 'playlists',
    name: 'Playlist',
    description:
      'Toàn bộ các danh sách phát và các bộ bài giảng đều được tổng hợp ở dưới đây. Bạn cũng có thể tham gia tạo ra những playlist thú vị tùy theo mục đích sử dụng của bạn. Bạn chỉ cần gửi email danh sách các video và tên playlist vào email của nhóm mình là được nhé!'
  },
  speaker: {
    query: 'speakers',
    name: 'Diễn giả',
    description:
      'Đây là danh sách những diễn giả, tác giả, những người đã truyền đạt nội dung trong video gốc. Họ là những ngọn đuốc mồi lên ánh lửa tri thức trong bạn, và giờ bạn sẽ là một ngọn đuốc tiếp tục truyền ánh sáng đó cho nhiều người hơn nữa...'
  },
  source: {
    query: 'sources',
    name: 'Kênh gốc',
    description:
      'Đây là danh sách những kênh nội dung gốc mà chúng tôi đã làm phụ đề và chia sẻ. Đây đều là những kênh chính chủ, với những nội dung giáo dục hàng đầu thế giới. Và chúng tôi đang cố gắng mang về cho người Việt nhiều hơn thế nữa...'
  },
  sponsor: {
    query: 'sponsors',
    name: 'Nhà tài trợ nội dung',
    description:
      'Đây là những nhà tài trợ đang chung tay đưa tri thức lan tỏa đến nhiều người Việt Nam hơn. SOSUB sẽ không thể hoạt động được nếu thiếu sự hỗ trợ từ những tấm lòng như vậy. Hãy cùng đồng hành với chúng tôi nhé!'
  },
  sosuber: {
    query: 'creators',
    name: 'Sosuber',
    description:
      'Sosuber là tất cả những thành viên đang đóng góp những bản phụ đề tuyệt vời nhất quả đất để chung tay lan tỏa tri thức cho người Việt. Mỗi lượt xem, mỗi comment, mỗi lượt like/share của bạn đều là động lực rất lớn để chúng tôi tiếp tục thực hiện công việc này. Cảm ơn bạn rất nhiều!'
  }
};

class List extends Component {
  constructor(props) {
    super(props);
    const { query } = LISTS[props.url ? props.url.query.type : ''];
    this.ListPageComponent = connect(ListPage, query);
    this.state = {
      orderBy: '-video_amount'
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.url.query.type !== nextProps.url.query.type) {
      const { query } = LISTS[nextProps.url ? nextProps.url.query.type : ''];
      this.ListPageComponent = connect(ListPage, query);
    }
  }

  changeOrderBy(orderBy) {
    this.setState({ orderBy });
  }

  render() {
    console.log(this.props);
    const { query, name, description } = LISTS[this.props.url.query.type];

    return (
      <DefaultCon {...this.props}>
        <this.ListPageComponent
          query={query}
          path={this.props.url.query.type}
          name={name}
          description={description}
          orderBy={this.state.orderBy}
          changeOrderBy={orderBy => this.changeOrderBy(orderBy)}
        />
      </DefaultCon>
    );
  }
}

List.propTypes = {
  url: PropTypes.object.isRequired
};

export default withData(List);
