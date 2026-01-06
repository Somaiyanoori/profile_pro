export default function TopHeader(name, username, avatarImage) {
  return (
    <header className="TopHeader">
      <div className="topHeaderInner">
        <div className="avatarRing">
          <div className="avatarCircle avaterImageWrapper">
            <img src={avatarImage} alt={name} className="avatarImage" />
          </div>
        </div>
      </div>
      <div className="topHeaderContent">
        <h1 className="profileName">{name}</h1>
        <p className="profileHandle">{username}</p>
        <div className="topHeaderButton">
          <button className="btnHeader primary">Edit Profile</button>
          <button className="btnHeader ghost"> Sign out</button>
        </div>
      </div>
    </header>
  );
}
