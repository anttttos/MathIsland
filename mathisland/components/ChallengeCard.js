// components/ChallengeCard.js
const ChallengeCard = ({ title, description }) => {
    return (
      <div className="challenge-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ChallengeCard;
  