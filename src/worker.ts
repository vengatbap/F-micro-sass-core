import Queue from 'bull';

const emailQueue = new Queue('email', process.env.REDIS_URL || 'redis://127.0.0.1:6379');

emailQueue.process(async (job) => {
  console.log('Sending email', job.data);
});

export { emailQueue };