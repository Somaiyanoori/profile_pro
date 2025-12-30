import "./App.css";
import avatarImage from "./assets/profile.jpg";
import ProfilePage from "./components/profilePge";
function App() {
  const user = {
    name: "Somaiya Noori",
    username: "@somaiyanoori",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 22, 2025",
    streakDays: 3,
    longestStreak: 5,
    recentBadgesText: "No badges earned yet.",

    personalInfo: {
      Email: "somayenoori786@icloud.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province orState ": "Herat",
      "Learning Experience (in years)": "2",
      "Date Of Birth": "10/10/2006",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "Open the Link",
      Languages: "farsi, english",
      Bio: "Student",
    },
    accountDetails: {
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    },
  };
  return (
    <dive className="page">
      <ProfilePage user=user>

      </ProfilePage>
    </dive>
  );
}

export default App;
