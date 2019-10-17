const rootEl = document.getElementById('root');

const post = {
    id: 999,
    content: 'Первый пост в моей соц.сети',
    imageUrl: 'https://placekitten.com/300/300',
    likes: 0,   
};
const postEl = document.createElement('div');
postEl.className = 'card'; 

const imgEl = document.createElement('img');
imgEl.src = post.imageUrl;
imgEl.className = 'card-img-top';
postEl.appendChild(imgEl);

const postBodyEl = document.createElement('div');
postBodyEl.className = 'card-body';
postEl.appendChild(postBodyEl);

const postContentEl = document.createElement('p');
postContentEl.textContent = post.content;
postBodyEl.appendChild(postContentEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '❤ ' + post.likes;


likesEl.onclick = function () {
        if(post.likes > 0){
        post.likes = post.likes - 1;
        } else
        post.likes = post.likes + 1;
    
    likesEl.textContent = '❤ ' + post.likes;   
};
postBodyEl.appendChild(likesEl);

rootEl.appendChild(postEl);




const videoPost = {
    id: 1000,
    content: 'Первое видео в моей социальной сети',
    videoUrl: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
    like: 0,


}

const videoPostEl = document.createElement('div');
videoPostEl.className = 'card'; 

const videoPostBodyEl = document.createElement('div');
videoPostBodyEl.className = 'embed-responsive embed-responsive-16by9 card-img-top';
videoPostEl.appendChild(videoPostBodyEl);


const videoEl = document.createElement('video');
videoEl.controls = true; 
videoEl.src = videoPost.videoUrl;
videoEl.className = 'embed-responsive-item';
videoPostBodyEl.appendChild(videoEl);

const videoBodyEl = document.createElement('div');
videoBodyEl.className = 'card-body';
videoPostEl.appendChild(videoBodyEl);




const videoPostContentEl = document.createElement('p');
videoPostContentEl.textContent = videoPost.content;
videoBodyEl.appendChild(videoPostContentEl);

const videoLikesEl = document.createElement('button');
videoLikesEl.className = 'btn btn-primary';
videoLikesEl.textContent = '❤ ' + videoPost.like;

videoLikesEl.onclick = function () {
    
        if(videoPost.like > 0){
        videoPost.like = videoPost.like - 1;
        } else
        videoPost.like = videoPost.like + 1;
    

    videoLikesEl.textContent = '❤ ' + videoPost.like;
   
    
};

videoBodyEl.appendChild(videoLikesEl);


rootEl.appendChild(videoPostEl)




const audioPost = {
    id: 1000,
    content: 'Первое видео в моей социальной сети',
    audioUrl: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
    like: 0,


}

const audioPostEl = document.createElement('div');
audioPostEl.className = 'card'; 

const audioPostBodyEl = document.createElement('div');
audioPostBodyEl.className = 'embed-responsive embed-responsive-21by9 card-img-top';
audioPostEl.appendChild(audioPostBodyEl);


const audioEl = document.createElement('audio');
audioEl.controls = true; 
audioEl.src = audioPost.audioUrl;
audioEl.className = 'embed-responsive-item';
audioPostBodyEl.appendChild(audioEl);

const audioBodyEl = document.createElement('div');
audioBodyEl.className = 'card-body';
audioPostEl.appendChild(audioBodyEl);


const audioPostContentEl = document.createElement('p');
audioPostContentEl.textContent = audioPost.content;
audioBodyEl.appendChild(audioPostContentEl);


const audioLikesEl = document.createElement('button');
audioLikesEl.className = 'btn btn-primary';
audioLikesEl.textContent = '❤ ' + audioPost.like;

audioLikesEl.onclick = function () {
    
        if(audioPost.like > 0){
        audioPost.like = audioPost.like - 1;
        } else
        audioPost.like = audioPost.like + 1;
    

    audioLikesEl.textContent = '❤ ' + audioPost.like;
   
    
};

audioBodyEl.appendChild(audioLikesEl);

rootEl.appendChild(audioPostEl)