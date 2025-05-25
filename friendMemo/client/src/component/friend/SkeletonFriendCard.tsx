import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonFriendCard = () => {
  return (
    <div className="card mt-3 shadow">
      <div className="card-body">
        <ContentLoader
          speed={2}
          width="100%"
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          {/* タイトルと詳細リンク */}
          <rect x="0" y="10" rx="4" ry="4" width="180" height="24" />
          <rect x="340" y="14" rx="3" ry="3" width="50" height="16" />
          {/* 各情報行 */}
          <rect x="0" y="50" rx="3" ry="3" width="250" height="16" />
          <rect x="0" y="75" rx="3" ry="3" width="180" height="16" />
          <rect x="0" y="100" rx="3" ry="3" width="300" height="16" />
          <rect x="0" y="125" rx="3" ry="3" width="120" height="16" />
          <rect x="0" y="150" rx="3" ry="3" width="350" height="16" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default SkeletonFriendCard;
