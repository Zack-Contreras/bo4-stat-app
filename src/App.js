import React, { Component } from 'react';
import './App.css';
import Stats from './components/Stats';
import Form from './components/Form';
import { Spinner } from 'react-mdl';
import DefaultPage from './components/DefaultPage';

class App extends Component {

  state = {
    Loading: false,
    PlayerLevel: null,
    KDRatio: ''
  }

/******************
Use this API call, alter __platform__ with  [ xbl , psn , battle ] & alter __type__ with [ mp , zm ]
Battle.net requires # changed to %23
*******************/

/*
https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/xTHKxNeonPlague/profile/type/mp
https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/xTHKxNeonPlague/profile/type/blackout
*/
getStats = async(e) => {
    e.preventDefault();
    this.setState({Loading: true});
    const gamertag = e.target.elements.gamertag.value;
    const system = e.target.elements.console.value
    const api_call = await fetch(`https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/${system}/gamer/${gamertag}/profile/type/mp`);
    const data = await api_call.json();
    console.log(data);
    if (data.status === 'success') {
      this.setState({
        error: false,
        prestige: data.data.mp.prestige,
        ekia: data.data.mp.lifetime.all.ekia,
        username: data.data.username,
        Loading: false,
        Status: true,
        deaths: data.data.mp.lifetime.all.deaths,
        bestplays: data.data.mp.lifetime.all.featuredInBestPlay,
        PlayerLevel: data.data.mp.level,
        finalKills: data.data.mp.lifetime.all.getFinalKill,
        KDRatio: data.data.mp.lifetime.all.ekiadRatio,
        timePlayed: (data.data.mp.lifetime.all.timePlayedTotal / 60) / 60,
        firstBloods: data.data.mp.lifetime.all.statsFirstKill,
        enemyTeamKills: data.data.mp.lifetime.all.ekiaEveryEnemyOnelife,
        accuracy: data.data.mp.lifetime.all.accuracy,
        grappleGunKills: data.data.mp.lifetime.all.statsGrappleGunKill
      })
      console.log(this.state)
    } else {
      this.setState({
        Loading: false,
        Status: false,
        error: true
      })
    }

  }

  switchPage = () => {
    this.setState({Status: false});
  }

  render() {
    return (
      <div className="App">
        <Form switchPage={this.switchPage} getStats={this.getStats} />
        { this.state.Loading ? <Spinner className='spinnerClass' /> : null }
        { this.state.Status ? <Stats
           playerLevel={this.state.PlayerLevel}
           finalKills={this.state.finalKills}
           grappleKills={this.state.grappleGunKills}
           ekia={this.state.ekia}
           accuracy={this.state.accuracy}
           enemyTeamKills={this.state.enemyTeamKills}
           firstBloods={this.state.firstBloods}
           timePlayed={this.state.timePlayed}
           username={this.state.username}
           bestplays={this.state.bestplays}
           deaths={this.state.deaths}
           prestige={this.state.prestige}
           kdRatio={this.state.KDRatio} /> : <DefaultPage /> }
        { this.state.error ? <h1 className='errorMsg'>User Not Found</h1> : null }
      </div>
    );
  }
}

export default App;
