import Container from "./Container";

const Layout = ({ header, children, footer }) => {
  return (
    <div >
        {header}
        <Container>
          <main>
              {children}
          </main>
          </Container>
        {footer}
     </div> 
  );
};

export default Layout;