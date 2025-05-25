import ContentLoader from "react-content-loader";

const SkeltonFriendDetails = () => (
  <div className="card shadow">
    <div className="card-header">
      <ContentLoader
        speed={2}
        width={300}
        height={40}
        viewBox="0 0 300 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="16" y="10" rx="4" ry="4" width="180" height="20" />
      </ContentLoader>
    </div>
    <div className="card-body">
      <ContentLoader
        speed={2}
        width={300}
        height={120}
        viewBox="0 0 300 120"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="10" rx="3" ry="3" width="220" height="16" />
        <rect x="0" y="36" rx="3" ry="3" width="180" height="16" />
        <rect x="0" y="62" rx="3" ry="3" width="200" height="16" />
        <rect x="0" y="88" rx="3" ry="3" width="160" height="16" />
        <rect x="0" y="114" rx="3" ry="3" width="240" height="16" />
      </ContentLoader>
    </div>
    <div className="card-footer d-flex justify-content-end">
      <ContentLoader
        speed={2}
        width={160}
        height={40}
        viewBox="0 0 160 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="8" rx="6" ry="6" width="70" height="24" />
        <rect x="90" y="8" rx="6" ry="6" width="70" height="24" />
      </ContentLoader>
    </div>
  </div>
);

export default SkeltonFriendDetails;
