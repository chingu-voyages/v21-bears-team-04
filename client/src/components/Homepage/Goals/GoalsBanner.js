import React from "react";
import "./GoalsBanner.css"
import diary from './diary.png'
import passion from './passion.png'
import shoe from './shoe.png'

const photos=[{icon: diary, title: "Track Your Progress",description: "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."},{icon: passion, title: "Connect With Others",description: "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."},{icon: shoe, title: "Stay Motivated",description: "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."}]

function GoalsBanner() {
  return (
    <div className="GoalsBanner">
        <h1>Tools for your Goals</h1>
        <div className="GoalsBanner-section">
        {photos.map(photo=>
            <div className="GoalsBanner-goal">
            <img className="GoalsBanner-logo" src={photo.icon} alt="goal logos"/>
            <h2>{photo.title}</h2>
            <h3>{photo.description}</h3>
            </div>
        )}
        </div>
    </div>
  );
}

export default GoalsBanner;
