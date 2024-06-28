import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
export function Layout({ children }) {
    return (
       
      <div>
         <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
          <div class="basic">
                    <form>
                        <input class="child" type="text" placeholder="Họ và tên của bạn" />
                    </form>

                    <form>
                        <input class="child" type="text" placeholder="Email của bạn" />
                    </form>
                    <form>
                        <input class="child" type="text" placeholder="Số điện thoại liên hệ" />
                    </form>
                    <button type="button" class="btn btn-primary">Gửi lời nhắn</button>
                </div>
                <div class="content">
                    <form>
                        <input class="child-content" type="text" placeholder="Nội dung" />
                    </form>
                </div>
      </div>
       
      
    );
  }
  
  Layout.propTypes = {
    children: PropTypes.node,
  };