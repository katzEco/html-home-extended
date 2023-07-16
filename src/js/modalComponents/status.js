const uuid = "298415109359796234"

async function lanyardPull() {
  const axiosSetup = await axios.get(
    `https://api.lanyard.rest/v1/users/${uuid}`
  );
  const resp = axiosSetup.data.data;

  const spotifyBox =
    resp.listening_to_spotify == false
      ? null
      : {
          trackLink: `https://open.spotify.com/track/${resp.spotify.track_id}`,
          song: resp.spotify.song,
          artist: resp.spotify.artist,
          album: resp.spotify.album,
          albumArt: resp.spotify.album_art_url,
        };
  
  const customStatus = (resp.activities[0].name != 'Custom Status') ? 'Got no custom status now :(' : resp.activities[0].state

  const API = {
    name: `${resp.discord_user.global_name} #${resp.discord_user.username}`,
    listen: resp.listening_to_spotify,
    spotify: spotifyBox,
    status: resp.discord_status,
    avatarImage: `https://cdn.discordapp.com/avatars/${resp.discord_user.id}/${resp.discord_user.avatar}.webp?size=4096`,
    customStatus: customStatus
  };

  return API;
}

async function mainLanyard() {
  const modal = document.querySelector('#StatusModal')
  const API = await lanyardPull()

  let status
  switch (API.status) {
    case 'online':
      status = "Online"
      break;
    
    case 'idle':
      status = "Idle"
      break;

    case 'dnd':
      status = "Do not disturb"
      break;
  
    default:
      status = "Offline"
      break;
  }

  let spotifyElement
  if (API.listen == true) {
    spotifyElement = `<a class="card" href="${API.spotify.trackLink}">
  <div class="cardBody">
    <h3>
      ${API.spotify.song}
    </h3>
    <h4>
      ${API.spotify.artist}
    </h4>
    <p>
      ${API.spotify.album}
    </p>
  </div>
  <div class="img" style="background: url(${API.spotify.albumArt});"></div>
</a>`
  } else {
    spotifyElement = ""
  }

  modal.innerHTML = `<div class="contentContainer">
  <div class="cardContainer">
    <div class="card">
      <div class="img" style="background: url(${API.avatarImage});"></div>
      <div class="cardBody">
        <h3>
          ${API.name} － ${status}
        </h3>
        <p>
          ${(API.customStatus) != null ? API.customStatus : "No status now.."}
        </p>
      </div>
    </div>

    ${spotifyElement}
  </div> 
</div>`

  console.log(await lanyardPull());
}

mainLanyard()