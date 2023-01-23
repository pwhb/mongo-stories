import { createReadStream } from 'fs';
import { PutObjectCommand, S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET_NAME } from '$env/static/private';

const accessKeyId = ACCESS_KEY_ID;
const secretAccessKey = SECRET_ACCESS_KEY;
const Bucket = BUCKET_NAME;
const filePath = '/home/pwhb/dev/pwhb/mongo-stories/client/after_school.mp3';

export const s3Client = new S3Client({
	region: 'ap-southeast-1',
	credentials: {
		accessKeyId,
		secretAccessKey
	}
});

export const uploadCommand = new PutObjectCommand({
	Bucket,
	Key: 'songs/after_school.mp3',
	Body: createReadStream(filePath)
});

export const downloadCommand = new GetObjectCommand({
	Bucket,
	Key: 'songs/after_school.mp3'
});

// const response = await s3Client.send(downloadCommand);

// console.log('response', response);
// import AWS from 'aws-sdk';
// import fs from 'fs';

// AWS.config.update({})
// const s3 = new AWS.S3({ apiVersion: '2023-01-20' });
// const file = fs.readFileSync('/home/pwhb/dev/pwhb/mongo-stories/client/after_school.mp3');

// console.log('file', file);
