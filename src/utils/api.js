export const getVideos = new Promise((resolve, reject) => {
  fetch(
    'https://my-json-server.typicode.com/bluesky93128/tiktok_mock_db/videos',
  )
    .then(response => response.json())
    .then(json => {
      console.log('real videos = ', json);
      resolve(json);
    });
});

export const getUser = new Promise((resolve, reject) => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(res => {
      console.log('user = ', res);
      resolve(res);
    });
});
