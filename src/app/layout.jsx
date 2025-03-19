import "./global.css";
import CodeHeader from "../Components/CodeHeader";
import Footer from "../Components/Footer";
import PropTypes from 'prop-types';


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <CodeHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};