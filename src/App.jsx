import "./App.css";
import ProfilePage from "./components/ProfilePage";
import avatarImage from "./assets/profile.jpg";

export default function App() {
  const user = {
    name: "Somaiya Noori",
    username: "@somaiysnoori",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 22, 2025",
    streakDays: 3,
    longestStreak: 4,
    recentBadgesText: "No badges earned yet.",

    personalInfo: {
      Email: "somayenoori786@icloud.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province orState ": "Herat",
      "Date Of Birth": "10/10/2006",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "Open the Link",
      Languages: "farsi, english",
      Bio: "Full stuck web developer",
    },

    accountDetails: {
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    },
  };

  return (
    <div className="page">
      <ProfilePage user={user} />
    </div>
  );
}
