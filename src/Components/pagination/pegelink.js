import Pageitem from "./pageItem";

function PageLinkLi() {
  return (
    <ul className="pagination">
      <Pageitem disable={true}>
        <i className="fa-solid fa-angle-left small"></i>
      </Pageitem>
      <Pageitem active={true}>1</Pageitem>
      <Pageitem>2</Pageitem>
      <Pageitem>3</Pageitem>
      <Pageitem>
        <i className="fa-solid fa-angle-right small"></i>
      </Pageitem>
    </ul>
  );
}
export default PageLinkLi;
