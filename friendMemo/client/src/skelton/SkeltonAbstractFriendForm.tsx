import ContentLoader from "react-content-loader";

const SkeltonAbstractFriendForm = () => (
  <div className="row">
    <div className="offset-1 col-10 offset-lg-3 col-lg-6">
      <div className="card mt-3 shadow">
        <div className="card-body">
          <ContentLoader
            speed={2}
            width={400}
            height={340}
            viewBox="0 0 400 340"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            {/* タイトル */}
            <rect x="10" y="10" rx="4" ry="4" width="180" height="24" />
            {/* サブテキスト */}
            <rect x="10" y="44" rx="3" ry="3" width="260" height="16" />
            {/* 氏名 */}
            <rect x="10" y="74" rx="4" ry="4" width="360" height="32" />
            {/* メールアドレス */}
            <rect x="10" y="116" rx="4" ry="4" width="360" height="32" />
            {/* 電話番号 */}
            <rect x="10" y="158" rx="4" ry="4" width="360" height="32" />
            {/* 住所 */}
            <rect x="10" y="200" rx="4" ry="4" width="360" height="32" />
            {/* 誕生日 */}
            <rect x="10" y="242" rx="4" ry="4" width="360" height="32" />
            {/* メモ */}
            <rect x="10" y="284" rx="4" ry="4" width="360" height="40" />
            {/* ボタン */}
            <rect x="290" y="330" rx="6" ry="6" width="80" height="32" />
          </ContentLoader>
        </div>
      </div>
    </div>
  </div>
);

export default SkeltonAbstractFriendForm;
