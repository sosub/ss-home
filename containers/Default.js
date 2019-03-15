import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Default = props => (
  <App>
    <Helmet titleTemplate="%s - SOSUB.ORG - Học mọi thứ qua phụ đề song ngữ">
      <title />
    </Helmet>
    <Header theme={props.headerTheme} />
    {props.children}
    <Footer />
  </App>
);

Default.defaultProps = {
  headerTheme: ''
};

Default.propTypes = {
  url: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  headerTheme: PropTypes.string
};

export default Default;
