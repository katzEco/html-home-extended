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

  console.log(await lanyardPull());
}

mainLanyard()