const oldData = [
	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/dandelion%20hands%20-%20lonely-kdRw1m8J3Uo.m4a?raw=true',
			title: 'Lonely',
			artist: 'Dandelion Hands',
			youtube: 'https://youtu.be/kdRw1m8J3Uo'
		}
	},
	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/Freddie%20Mercury%20-%20Living%20On%20My%20Own%20(1993%20Remix%20Remastered)-HTdd8QxifbY.webm?raw=true',
			title: 'Living on my own',
			artist: 'Freddie Mercury',
			youtube: 'https://youtu.be/HTdd8QxifbY'
		}
	},
	{
		audio: {
			src: "https://github.com/pwhb/public/blob/main/music/Electric%20Youth%20-%20'A%20Real%20Hero'%20(SC%20Live%20Session%20Pt.%201)-6cedWvuxwbc.webm?raw=true",
			title: 'A Real Hero',
			artist: 'Electric Youth',
			youtube: 'https://youtu.be/6cedWvuxwbc'
		}
	},

	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/Mariya%20Takeuchi%20Plastic%20Love%20%20%E7%AB%B9%E5%86%85%20%E3%81%BE%E3%82%8A%E3%82%84-9Gj47G2e1Jc.m4a?raw=true',
			title: 'Plastic Love',
			artist: 'Mariya Takeuchi',
			youtube: 'https://youtu.be/9Gj47G2e1Jc'
		}
	},
	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/Queen%20-%20I%20Want%20To%20Break%20Free%20(Official%20Video)-f4Mc-NYPHaQ.m4a?raw=true',
			title: 'I want to break free',
			artist: 'Queen',
			youtube: 'https://youtu.be/f4Mc-NYPHaQ'
		}
	},

	{
		audio: {
			src: "https://github.com/pwhb/public/blob/main/music/4%20Non%20Blondes%20-%20What's%20Up%20(Official%20Music%20Video)-6NXnxTNIWkc.webm?raw=true",
			title: '4 Non Blondes',
			artist: "What's Up",
			youtube: 'https://youtu.be/6NXnxTNIWkc'
		}
	},
	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/Ch%C5%8Dcho%20-%20Paper%20Castle-9e950N0BsFA.webm?raw=true',
			title: 'Paper Castle',
			artist: 'Chōcho',
			youtube: 'https://youtu.be/9e950N0BsFA'
		}
	},
	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/Les%20Mis%C3%A9rables%20Cast%20-%20Do%20You%20Hear%20The%20People%20Sing%20(Official%20Video)-PUlQNsl4Qvk.m4a?raw=true',
			title: 'Do You Hear the People Sing?',
			artist: 'Les Misérables',
			youtube: 'https://youtu.be/PUlQNsl4Qvk'
		}
	},
	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/Dario%20Marianelli%20-%20Your%20hands%20are%20cold%20(Pride%20&%20Prejudice)-9FCqdd3O14Y.webm?raw=true',
			title: 'Your Hands Are Cold',
			artist: 'Marianelli',
			youtube: 'https://youtu.be/X6bB0IjFSqM'
		}
	},
	{
		audio: {
			src: 'https://github.com/pwhb/public/blob/main/music/Johnny%20Cash%20-%20Hurt-8AHCfZTRGiI.opus?raw=true',
			title: 'Hurt',
			artist: 'Johnny Cash',
			youtube: 'https://youtu.be/8AHCfZTRGiI'
		}
	}
];

const createSong = async (audio) => {
	const { src, title, artist, youtube } = audio;
	const url = 'http://localhost:5173/api/songs';
	const payload = {
		title,
		artist,
		audioUrl: src,
		imageUrl: '',
		youtubeUrl: youtube
	};
	const option = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	};
	const response = await fetch(url, option);
	const data = await response.json();
	console.log(data);
};

const main = async () => {
	try {
		let count = 0;
		for (let entry of oldData) {
			if (entry.audio) {
				await createSong(entry.audio);
				count++;
			}
		}

		console.log('count', count);
	} catch (err) {
		console.error(err);
	}
	process.exit(1);
};

main();
