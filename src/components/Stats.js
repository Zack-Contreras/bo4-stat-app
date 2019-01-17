import React from 'react';

const Stats = (props) => {
  return(
    <div className="statsContainer">
      <div className='statsHeader'>
        <h1>{props.playerLevel}</h1>
        <h1>{props.username}</h1>
      </div>
      <div className='mainStats'>
        <div className='statBox'>
          <h3>Prestige:</h3>
          <p>{props.prestige}</p>
        </div>
        <div className='statBox'>
          <h3>K/D:</h3>
          <p>{props.kdRatio}</p>
        </div>
        <div className='statBox'>
          <h3>Death Counter:</h3>
          <p>{props.deaths}</p>
        </div>
        <div className='statBox'>
          <h3>Best Plays:</h3>
          <p>{props.bestplays}</p>
        </div>
        <div className='statBox'>
          <h3>Time Played:</h3>
          <p>{props.timePlayed}</p>
        </div>
        <div className='statBox'>
          <h3>First Bloods:</h3>
          <p>{props.firstBloods}</p>
        </div>
        <div className='statBox'>
          <h3>Accuracy:</h3>
          <p>{props.accuracy}</p>
        </div>
        <div className='statBox'>
          <h3>Grapple Gun Kills:</h3>
          <p>{props.grappleKills}</p>
        </div>
        <div className='statBox'>
          <h3>Enemy Teams Killed in One Life:</h3>
          <p>{props.enemyTeamKills}</p>
        </div>
        <div className='statBox'>
          <h3>EKIA:</h3>
          <p>{props.ekia}</p>
        </div>
        <div className='statBox'>
          <h3>Final Kills:</h3>
          <p>{props.finalKills}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
