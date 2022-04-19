import PageLinkLi from "./pegelink";
function Peginate() {
  return (
    <div className="pagination mt-2 ms-1 d-flex">
      <small className="text-muted flex-grow-1">
        Showing 1 to 10 of 96 entires
      </small>
      <PageLinkLi />
    </div>
  );
}
export default Peginate;
